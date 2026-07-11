import { FaArrowUp } from "react-icons/fa";

function HealthCard({ title, value, unit, icon, color }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800">
            {value}
            <span className="ml-1 text-lg font-normal text-gray-500">
              {unit}
            </span>
          </h2>

          <div className="mt-3 flex items-center gap-2 text-green-500">
            <FaArrowUp />
            <span className="text-sm">Healthy</span>
          </div>
        </div>

        <div className={`rounded-full p-4 text-3xl text-white ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default HealthCard;