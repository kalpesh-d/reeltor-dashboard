import Investment from "../components/Investment";
import Marketplace from "../components/Marketplace";
import TopNav from "../components/TopNav";
import CreditCard from "../components/CreditCard";
import Nft from "../components/Nft";
import Portfolio from "../components/Portfolio";

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
    <div className="container mx-auto">
      <TopNav pageTitle="Dashboard" />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex">
            <Marketplace data={marketplaceData} />
            <Investment />
          </div>
          <div className="flex">
            <Nft />
            <Portfolio />
          </div>
        </div>
        <CreditCard />
      </div>
    </div>
  );
}

export default Dashboard;
