import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteIncome() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteIncome } = useMutation({
    mutationFn: deleteIncomeApi,

    onSuccess: () => {
      toast.success("Income successfully deleted");

      queryClient.invalidateQueries({ queryKey: ["incomes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteIncome };
}
