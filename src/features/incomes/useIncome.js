import { useQuery } from "@tanstack/react-query";
import { getIncomes } from "../../services/apiIncome";

export function useIncome() {
  const {
    isLoading,
    data: incomes,
    error,
  } = useQuery({ queryKey: ["incomes"], queryFn: getIncomes });

  return { isLoading, incomes, error };
}
