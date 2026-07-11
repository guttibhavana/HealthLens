import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaHeartbeat,
  FaChartLine,
  FaRobot,
  FaFileAlt,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      name: "Health Logs",
      icon: <FaHeartbeat />,
      path: "/health-logs",
    },
    {
      name: "Analytics",
      icon: <FaChartLine />,
      path: "/analytics",
    },
    {
      name: "AI Assistant",
      icon: <FaRobot />,
      path: "/assistant",
    },
    {
      name: "Reports",
      icon: <FaFileAlt />,
      path: "/reports",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
  ];

  return (
    <aside className="min-h-screen w-64 bg-slate-900 text-white shadow-lg">
      {/* Logo */}
      <div className="border-b border-slate-700 p-6 text-center">
        <h1 className="text-3xl font-bold text-cyan-400">
          HealthLens
        </h1>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-2 px-4">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-lg px-4 py-3 text-lg transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;