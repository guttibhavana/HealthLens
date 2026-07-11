import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";
import toast from "react-hot-toast";
import MainLayout from "../layouts/MainLayout";
import HealthCard from "../components/common/HealthCard";
import ChartCard from "../components/common/ChartCard";
import AIInsightCard from "../components/common/AIInsightCard";
import RecentLogs from "../components/common/RecentLogs";
import GoalProgress from "../components/common/GoalProgress";
import HealthTip from "../components/common/HealthTip";

import {
  FaHeartbeat,
  FaWalking,
  FaTint,
  FaBed,
} from "react-icons/fa";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const today = new Date().toLocaleDateString("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
}
);
useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();
      setDashboardData(data);
    } catch (error) {
      toast.error("Failed to load dashboard");
      console.error(error);
    }
  };

  fetchDashboard();
}, []);

if (!dashboardData) {
  return (
    <MainLayout>
      <h2 className="text-xl font-semibold">
        Loading Dashboard...
      </h2>
    </MainLayout>
  );
}
  return (
  <MainLayout>
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-800">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-gray-500">{today}</p>
    </div>

   <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <HealthCard
    title="Average Weight"
    value={dashboardData.summary.averageWeight}
    unit="kg"
    icon={<FaHeartbeat />}
    color="bg-red-500"
  />

  <HealthCard
    title="Average Sleep"
    value={dashboardData.summary.averageSleep}
    unit="hrs"
    icon={<FaBed />}
    color="bg-indigo-500"
  />

  <HealthCard
    title="Water Intake"
    value={dashboardData.summary.averageWater}
    unit="L"
    icon={<FaTint />}
    color="bg-cyan-500"
  />

  <HealthCard
    title="Exercise"
    value={dashboardData.summary.averageExercise}
    unit="min"
    icon={<FaWalking />}
    color="bg-green-500"
  />

</div>
<div className="mt-6 rounded-xl bg-white p-5 shadow">
  <h3 className="text-lg font-semibold text-slate-800">
    Latest Mood
  </h3>

  <p className="mt-2 text-2xl">
    😊 {dashboardData.summary.latestMood}
  </p>
</div>
    <ChartCard data={dashboardData.weightTrend} />
     <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <AIInsightCard />
      <RecentLogs />
    </div>
   <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <GoalProgress />
      <HealthTip />
    </div>
  </MainLayout>
);
}

export default Dashboard;