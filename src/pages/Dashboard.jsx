import Marketplace from "../components/Marketplace";
import TopNav from "../components/TopNav";

function Dashboard() {
  const marketplaceData = {
    badges: ["Top picks", "Featured"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Modern Villa",
    price: "1.44",
    bids: 24,
    bidders: [
      {
        image: "/bidder.jpeg",
        type: "user"
      },
      {
        type: "camera"
      }
    ]
  };

  return (
    <div>
      <TopNav pageTitle="Dashboard" />
      <Marketplace data={marketplaceData} />
    </div>
  );
}

export default Dashboard;
