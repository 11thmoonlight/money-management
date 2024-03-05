import { useSearchParams } from "react-router-dom";
import { useIncome } from "./useIncome";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";

function IncomeTable() {
  const { isLoading, incomes } = useIncome();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!incomes.length) return <Empty resourceName="cabins" />;

  let filteredIncomes;

  // SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedIncomes = filteredIncomes.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table>
        <Table.Header></Table.Header>

        <Table.Body
          data={sortedIncomes}
          render={(incomes) => <IncomeRow></IncomeRow>}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default IncomeTable;
