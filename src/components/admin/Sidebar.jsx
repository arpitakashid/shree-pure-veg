import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Images,
  UtensilsCrossed,
  BedDouble,
  Star,
  Settings,
  LogOut,
  Bed,
  MessageSquare,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Gallery", icon: Images, path: "/admin/gallery" },
    { name: "Food Management", icon: UtensilsCrossed, path: "/admin/food" },
    { name: "Rooms", icon: BedDouble, path: "/admin/rooms" },
    { name: "Reviews", icon: Star, path: "/admin/reviews" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
    {name: "Rooms Management",icon: Bed,path: "/admin/rooms",},
    {name: "Reviews Management",icon: MessageSquare,path: "/admin/reviews",},
  ];

  return (
    <aside className="w-72 bg-[#121212] text-white min-h-screen border-r border-yellow-500/20">
      <div className="p-6 border-b border-yellow-500/20">
        <h1 className="text-2xl font-bold text-yellow-400">
          SHREE ADMIN
        </h1>
      </div>

      <nav className="mt-6">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className="flex items-center gap-4 px-6 py-4 hover:bg-yellow-500/10 hover:text-yellow-400 transition"
            >
              <Icon size={22} />

              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      <button className="flex items-center gap-4 px-6 py-4 mt-10 text-red-400 hover:bg-red-500/10 w-full">
        <LogOut size={22} />
        Logout
      </button>
    </aside>
  );
}