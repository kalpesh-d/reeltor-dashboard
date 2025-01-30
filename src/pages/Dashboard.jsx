import Marketplace from "../components/Marketplace";
import TopNav from "../components/TopNav";

function Dashboard() {
  return (
    <div>
      <TopNav pageTitle="Dashboard" />
      <Marketplace />
    </div>
  );
}

export default Dashboard;
