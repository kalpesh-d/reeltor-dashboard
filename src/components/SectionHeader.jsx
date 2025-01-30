import { Ellipsis } from "lucide-react";

const SectionHeader = ({ title, onMenuClick }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl  text-gray-800">{title}</h2>
      <button
        onClick={onMenuClick}
        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Ellipsis className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default SectionHeader; 