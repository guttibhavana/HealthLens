import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

function HealthLogTable() {
  const logs = [
    {
      date: "11 Jul 2026",
      heartRate: 78,
      sleep: "7.8 hrs",
      water: "2.3 L",
      steps: 8450,
    },
    {
      date: "10 Jul 2026",
      heartRate: 76,
      sleep: "8 hrs",
      water: "2.5 L",
      steps: 9200,
    },
    {
      date: "09 Jul 2026",
      heartRate: 80,
      sleep: "7 hrs",
      water: "2.0 L",
      steps: 7900,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-slate-800">
          Health Logs
        </h1>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          <FaPlus />
          Add New Log
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-96">
        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search health logs..."
          className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Heart Rate</th>
              <th className="px-6 py-4 text-left">Sleep</th>
              <th className="px-6 py-4 text-left">Water</th>
              <th className="px-6 py-4 text-left">Steps</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log, index) => (
              <tr
                key={index}
                className="border-b transition hover:bg-slate-50"
              >
                <td className="px-6 py-4">{log.date}</td>

                <td className="px-6 py-4">
                  ❤️ {log.heartRate} BPM
                </td>

                <td className="px-6 py-4">
                  😴 {log.sleep}
                </td>

                <td className="px-6 py-4">
                  💧 {log.water}
                </td>

                <td className="px-6 py-4">
                  👣 {log.steps}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>

                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HealthLogTable;