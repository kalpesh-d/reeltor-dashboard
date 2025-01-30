import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Portfolio = () => {
  const scrollContainerRef = useRef(null);

  const properties = [
    {
      id: 1,
      name: "Mandragora Mansion",
      value: 0.005,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: 2,
      name: "Halbert Avenue",
      value: 0.076,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: 3,
      name: "Pomeroy",
      value: 0.082,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: 4,
      name: "Pomeroy",
      value: 0.082,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: 5,
      name: "Pomeroy",
      value: 0.082,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    }
  ];

  const distributionData = [
    { day: 'Mon', value: 300 },
    { day: 'Tue', value: 250 },
    { day: 'Wed', value: 200 },
    { day: 'Thu', value: 180 },
    { day: 'Fri', value: 280 },
    { day: 'Sat', value: 250 },
    { day: 'Sun', value: 300 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-purple-500 text-white px-2 py-1 rounded-md text-sm">
          ${payload[0].value}
        </div>
      );
    }
    return null;
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 150;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-[540px] p-3 bg-gray-50 rounded-2xl">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl  text-gray-800">My Portfolio</h2>
        <div className="flex gap-1">
          <button
            onClick={() => scroll('left')}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1 rounded-full bg-purple-500 hover:bg-purple-600 text-white transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto hide-scrollbar relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex-shrink-0 flex items-center bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-[220px] h-[70px]"
            >
              <div className="relative h-[70px] w-[70px] flex-shrink-0">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-2 flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-800 truncate">{property.name}</h3>
                <div className="flex items-center mt-0.5">
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 14 16"
                    className="w-3 h-3 text-gray-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7936 8.47981L6.96717 10.676L3.14071 8.47981L6.96717 2.31409L10.7936 8.47981ZM10.7957 9.18459L6.96715 14.4203L3.14069 9.18459L6.96715 11.3787L10.7957 9.18459Z" />
                  </svg>
                  <span className="text-xs font-bold ml-0.5">{property.value} Ether</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>

      <div className="mt-3">
        <div className="bg-white rounded-xl p-3">
          <h2 className="text-xl  text-gray-800 mb-1">Total Distributions</h2>
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={distributionData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 11 }}
                  dy={5}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 11 }}
                  domain={[0, 400]}
                  ticks={[0, 100, 200, 300]}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={false}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    r: 4,
                    fill: "#8B5CF6",
                    stroke: "#fff",
                    strokeWidth: 2
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
