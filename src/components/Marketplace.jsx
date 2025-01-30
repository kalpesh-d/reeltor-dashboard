import { Camera } from "lucide-react";
import Badges from "./Badges";
import SectionHeader from "./SectionHeader";
import Rating from "./Rating";

const Marketplace = () => {
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
    <div className="w-md px-8 py-10">
      <SectionHeader title="NFT Marketplace" />

      <div className="w-full h-md overflow-hidden rounded-lg relative">
        <div className="absolute top-4 left-4 z-10 gap-3 flex">
          {marketplaceData.badges.map((badge, index) => (
            <Badges key={index} title={badge} />
          ))}
        </div>
        <img src={marketplaceData.image} alt="marketplace" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white">{marketplaceData.title}</h3>
            <div className="flex justify-between items-center gap-1 w-full">
              <div className="flex items-center gap-1">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  className="w-6 h-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.7936 8.47981L6.96717 10.676L3.14071 8.47981L6.96717 2.31409L10.7936 8.47981ZM10.7957 9.18459L6.96715 14.4203L3.14069 9.18459L6.96715 11.3787L10.7957 9.18459Z" />
                </svg>
                <p className="text-white text-sm">{marketplaceData.price} Ether</p>
                <Rating />
              </div>
              <div className="flex gap-2">
                {marketplaceData.bidders.map((bidder, index) => (
                  bidder.type === "user" ? (
                    <div key={index} className="h-8 w-8 bg-violet-100 overflow-hidden rounded-full">
                      <img src={bidder.image} alt="avatar" className="h-12 object-cover" />
                    </div>
                  ) : (
                    <div key={index} className="h-8 w-8 bg-slate-100 overflow-hidden rounded-full flex items-center justify-center">
                      <Camera className="w-5 h-5 fill-white text-slate-400" />
                    </div>
                  )
                ))}
              </div>
            </div>
            <p className="text-white text-xs">
              (<span className="font-semibold">{marketplaceData.bids}</span> bids)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
