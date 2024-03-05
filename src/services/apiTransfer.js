import supabase from "./supabase";

export async function getOutcomse() {
  const { data, error } = await supabase.from("transfer").select("id");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
