import { FaRobot } from "react-icons/fa";

function AIInsightCard() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white shadow-lg">
      <div className="flex items-center gap-4">
        <FaRobot className="text-4xl" />

        <div>
          <h2 className="text-2xl font-bold">
            AI Health Insight
          </h2>

          <p className="mt-2 text-blue-100">
            Your heart rate and sleep pattern look healthy.
            Try drinking 500ml more water today to improve
            hydration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIInsightCard;