import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Income() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All incomes</Heading>
      </Row>

      <Row>
        <IncomeTable />
        <AddIncome />
      </Row>
    </>
  );
}

export default Income;
