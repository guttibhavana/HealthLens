import MainLayout from "../layouts/MainLayout";
import ChartCard from "../components/common/ChartCard";

function Analytics() {
  return (
    <MainLayout>
      <h1 className="mb-8 text-3xl font-bold text-slate-800">
        Health Analytics
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Heart Rate Trend" />
        <ChartCard title="Sleep Analysis" />
        <ChartCard title="Water Intake" />
        <ChartCard title="Weekly Steps" />
      </div>
    </MainLayout>
  );
}

export default Analytics;