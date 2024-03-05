import supabase, { supabaseUrl } from "./supabase";

export async function getIncomes() {
  const { data, error } = await supabase.from("incomes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditIncome(newIncome, id) {
  const hasImagePath = newIncome.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newIncome.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newIncome.image
    : `${supabaseUrl}/storage/v1/object/public/income-images/${imageName}`;

  let query = supabase.from("incomes");

  if (!id) query = query.insert([{ ...newIncome, image: imagePath }]);

  if (id) query = query.update({ ...newIncome, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Income could not be created");
  }

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("income-images")
    .upload(imageName, newIncome.image);

  if (storageError) {
    await supabase.from("incomes").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Income image could not be uploaded and the image was not created"
    );
  }
  return data;
}

export async function deleteIncome(id) {
  const { data, error } = await supabase.from("incomes").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Income could not be deleted");
  }
  return data;
}
