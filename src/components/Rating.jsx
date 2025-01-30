import { Star } from "lucide-react";

const Rating = () => {
  return (
    <div className="flex items-center">
      <Star className="w-4 h-4 fill-yellow-400" />
      <Star className="w-4 h-4 fill-yellow-400" />
      <Star className="w-4 h-4 fill-yellow-400" />
      <Star className="w-4 h-4 fill-yellow-400" />
      <Star className="w-4 h-4 fill-white" />
    </div>
  );
};

export default Rating;
