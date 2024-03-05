import DashboardFilter from "../features/DashboardFilter";
import DashboardLayout from "../features/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboad() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboad;
