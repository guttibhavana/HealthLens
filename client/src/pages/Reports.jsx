import MainLayout from "../layouts/MainLayout";
import {
  FaFilePdf,
  FaCalendarWeek,
  FaCalendarAlt,
  FaCalendar,
  FaDownload,
} from "react-icons/fa";

function Reports() {
  const reports = [
    {
      title: "Weekly Health Report",
      period: "Last 7 Days",
      icon: <FaCalendarWeek className="text-4xl text-blue-600" />,
    },
    {
      title: "Monthly Health Report",
      period: "July 2026",
      icon: <FaCalendarAlt className="text-4xl text-green-600" />,
    },
    {
      title: "Yearly Health Report",
      period: "2026",
      icon: <FaCalendar className="text-4xl text-purple-600" />,
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Health Reports
          </h1>

          <p className="mt-2 text-gray-500">
            Download and manage your health reports.
          </p>
        </div>

        {/* Report Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reports.map((report, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex justify-center">
                {report.icon}
              </div>

              <h2 className="text-center text-xl font-bold">
                {report.title}
              </h2>

              <p className="mt-2 text-center text-gray-500">
                {report.period}
              </p>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                <FaDownload />
                Download PDF
              </button>
            </div>
          ))}
        </div>

        {/* Summary Card */}
<div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-lg">
  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

    <div className="flex items-center gap-4">
      <FaFilePdf className="text-5xl" />

      <div>
        <h2 className="text-2xl font-bold">
          Complete Health Report
        </h2>

        <p className="mt-2 text-blue-100">
          Download your complete medical summary including heart rate,
          sleep, water intake, activity and AI insights.
        </p>
      </div>
    </div>

    <button
  className="inline-flex w-fit items-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
>
  <FaDownload className="mr-2" />
  Download Complete Report
</button>

  </div>
</div>
      </div>
    </MainLayout>
  );
}

export default Reports;