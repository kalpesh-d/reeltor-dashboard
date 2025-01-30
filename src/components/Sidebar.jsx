import { CircleGauge, House, ChartPie, BriefcaseBusiness, CalendarCheck, Settings, Power } from
  "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: CircleGauge, path: "/" },
  { icon: House, path: "/home" },
  { icon: ChartPie, path: "/analytics" },
  { icon: BriefcaseBusiness, path: "/properties" },
  { icon: CalendarCheck, path: "/schedule" },
  { icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-24 bg-white border-r border-gray-200 flex flex-col items-center">
      <img src="/logo.svg" alt="Reeltor Dashboard" className="h-8 my-8" />

      <nav className="flex flex-col items-center gap-10 m-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center rounded-lg transition-colors ${isActive
                ? "text-violet-700 relative before:absolute before:w-1 before:h-10 before:bg-red-400 before:rounded before:-left-9"
                : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Icon className="h-6 w-6" />
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto mb-8">
        <Power className="h-6 w-6 text-violet-700 hover:text-violet-900 cursor-pointer " />
      </div>
    </div>
  );
};

export default Sidebar;
