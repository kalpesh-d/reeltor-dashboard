import SectionHeader from "./SectionHeader";
import Badges from "./Badges";
import { ChevronRight } from "lucide-react";

const CreditCard = () => {
  const cardData = {
    balance: "521,652",
    monthlyProfit: "14,225",
    percentage: "+10%"
  };

  const topPicks = [
    {
      title: "Roma Avenue",
      price: "400,000",
      location: "0.0000345 Ether",
      color: "red"
    },
    {
      title: "Atlas Shack",
      price: "500,000",
      location: "0.0000678 Ether",
      color: "amber"
    },
    {
      title: "Roma Avenue",
      price: "400,000",
      location: "0.0000345 Ether",
      color: "green"
    },
    {
      title: "Atlas Shack",
      price: "500,000",
      location: "0.0000678 Ether",
      color: "amber"
    },
    {
      title: "Roma Avenue",
      price: "400,000",
      location: "0.0000345 Ether",
      color: "red"
    },
  ];

  return (
    <div className="w-96 px-6 py-10 bg-white">
      <h3 className="text-2xl font-semibold mb-4">My Card</h3>

      {/* Credit Card */}
      <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl p-6 text-white shadow-lg">
        <div className="flex flex-col justify-between items-start mb-4">
          <p>Balance</p>
          <p className="text-[2rem] font-bold">${cardData.balance}</p>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-between items-start">
            <p>Monthly Profit</p>
            <p className="text-[1.5rem] font-semibold">${cardData.monthlyProfit}</p>
          </div>
          <Badges title={cardData.percentage} />
        </div>
      </div>


      {/* Top Picks */}
      <div className="mt-8">
        <SectionHeader title="Top Picks" />
        <div className="">
          {topPicks.map((pick, index) => (
            <div key={index} className="bg-white rounded-xl p-4 relative">
              <div
                className="w-1 h-[50%] rounded-full absolute left-4 top-1/4"
                style={{
                  backgroundColor: pick.color === 'red' ? '#EF4444' :
                    pick.color === 'amber' ? '#F59E0B' :
                      pick.color === 'green' ? '#10B981' : '#EF4444'
                }}
              ></div>
              <div className="flex justify-between items-center mb-2 ml-4">
                <div>
                  <h4 className="font-medium text-gray-800">{pick.title}</h4>
                  <div className="flex gap-10">
                    <p className="text-sm text-gray-500">${pick.price}</p>
                    <p className="text-sm text-gray-500">{pick.location}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreditCard; 