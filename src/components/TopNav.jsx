import { Bell } from "lucide-react";

const TopNav = ({ pageTitle }) => {
  return (
    <div className="h-24 border-b border-gray-200 flex items-center justify-between px-8 ">
      <h1 className="text-2xl font-semibold text-slate-700">{pageTitle}</h1>
      <div className="flex items-center gap-8">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-8 w-8 bg-violet-100 overflow-hidden">
            <img src="/avatar.png" alt="avatar" className="h-full object-cover" />
          </div>
          <p className="text-sm font-medium text-gray-700">Rowena Ravenclaw</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;