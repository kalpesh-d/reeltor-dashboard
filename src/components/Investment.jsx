import SectionHeader from "./SectionHeader";
import { BadgeCheck, BadgeDollarSign, Calendar } from "lucide-react";

const Investment = () => {
  const investmentData = [
    {
      icon: BadgeCheck,
      title: "Total investment",
      amount: "0.56",
      color: "amber",
      value: 80
    },
    {
      icon: BadgeDollarSign,
      title: "Weekly Returns",
      amount: "0.05",
      color: "green",
      value: 95
    },
    {
      icon: Calendar,
      title: "Expenses",
      amount: "0.005",
      color: "red",
      value: 60
    }
  ];

  const getHeight = (value) => {
    const minValue = 0;
    const maxValue = 100;
    return `${((value - minValue) / (maxValue - minValue)) * 100}%`;
  };

  const VerticalBars = () => (
    <div className="flex items-center justify-center py-6">
      <div className="relative h-56 flex items-center space-x-4">
        {/* Max label */}
        <div className="absolute -top-2 -right-12 text-gray-400 text-xs">Max</div>

        {/* Min label */}
        <div className="absolute -bottom-2 -right-12 text-gray-400 text-xs">Min</div>

        {/* Dynamic bars */}
        {investmentData.map((bar, index) => (
          <div key={index} className="relative h-full w-2">
            {/* Background bar */}
            <div className={`absolute inset-0 w-full rounded-full bg-gray-100`}></div>
            {/* Filled bar */}
            <div
              className={`absolute bottom-0 w-full rounded-full bg-${bar.color}-400`}
              style={{ height: getHeight(bar.value) }}
            ></div>
          </div>
        ))}

        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-full h-px bg-gray-200"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );

  const EtherIcon = ({ color }) => (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      className={`w-8 h-8 text-${color}-400 fill-current`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7936 8.47981L6.96717 10.676L3.14071 8.47981L6.96717 2.31409L10.7936 8.47981ZM10.7957 9.18459L6.96715 14.4203L3.14069 9.18459L6.96715 11.3787L10.7957 9.18459Z" />
    </svg>
  );

  const InvestmentItem = ({ icon: Icon, title, amount, color }) => (
    <div className="flex items-center gap-4">
      <div className={`bg-${color}-400 text-white rounded-lg h-12 w-12 flex items-center justify-center`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="mb-1">{title}</p>
        <div className="flex items-center gap-1">
          <EtherIcon color={color} />
          <p className={`text-${color}-400 text-xl`}>{amount} Ether</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-8 py-10">
      <SectionHeader title="Investment" />
      <div className="bg-white rounded-xl shadow-md flex">
        <div className="py-8 px-6 flex flex-col mr-20">
          {investmentData.map((item, index) => (
            <InvestmentItem key={index} {...item} />
          ))}
        </div>
        <VerticalBars />
      </div>
    </div>
  );
};

export default Investment;
