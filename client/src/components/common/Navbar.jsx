import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">
        HealthLens
      </h1>

      <div className="flex items-center gap-5">
        <FaBell className="cursor-pointer text-xl text-gray-600 hover:text-blue-600" />
        <FaUserCircle className="cursor-pointer text-3xl text-gray-700" />
      </div>
    </header>
  );
}

export default Navbar;