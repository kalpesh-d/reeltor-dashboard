import SectionHeader from "./SectionHeader";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const Nft = () => {
  const nfts = [
    {
      name: "Roma Avenue",
      value: 0.91,
      change: "+10%",
      trending: "up",
      data: [
        { value: 30 },
        { value: 40 },
        { value: 35 },
        { value: 50 },
        { value: 45 },
        { value: 60 },
      ]
    },
    {
      name: "Thorian Park",
      value: 0.89,
      change: "+19%",
      trending: "up",
      data: [
        { value: 25 },
        { value: 35 },
        { value: 45 },
        { value: 40 },
        { value: 50 },
        { value: 55 },
      ]
    },
    {
      name: "Linda Mansion",
      value: 1.1,
      change: "-17%",
      trending: "down",
      data: [
        { value: 50 },
        { value: 45 },
        { value: 35 },
        { value: 30 },
        { value: 25 },
        { value: 20 },
      ]
    },
    {
      name: "Villa Mary",
      value: 0.71,
      change: "+22%",
      trending: "up",
      data: [
        { value: 20 },
        { value: 30 },
        { value: 45 },
        { value: 40 },
        { value: 55 },
        { value: 60 },
      ]
    }
  ];

  return (
    <div className="w-1/3 ml-6 mr-8 my-4">
      <SectionHeader title="NFTs Owned" />
      <div className="rounded-xl mt-4 w-full">
        {nfts.map((nft, index) => (
          <div key={index} className="mb-6 last:mb-0 bg-white rounded-lg p-4 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{nft.name}</h3>
                <div className="flex items-center mt-1">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    className="w-6 h-6 text-gray-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7936 8.47981L6.96717 10.676L3.14071 8.47981L6.96717 2.31409L10.7936 8.47981ZM10.7957 9.18459L6.96715 14.4203L3.14069 9.18459L6.96715 11.3787L10.7957 9.18459Z" />
                  </svg >
                  <span className="text-xl font-bold">{nft.value} Ether</span>
                </div >
              </div >
              <div className="flex items-center">
                <div className={`text-sm ${nft.trending === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {nft.change}
                </div>
                <div className="w-24 h-8 ml-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={nft.data}>
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor={nft.trending === 'up' ? '#10B981' : '#EF4444'}
                            stopOpacity={0.2}
                          />
                          <stop
                            offset="100%"
                            stopColor={nft.trending === 'up' ? '#10B981' : '#EF4444'}
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke={nft.trending === 'up' ? '#10B981' : '#EF4444'}
                        fill={`url(#gradient-${index})`}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div >
          </div >
        ))}
      </div >
    </div >
  );
};

export default Nft;
