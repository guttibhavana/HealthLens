function RecentLogs() {
  const logs = [
    {
      date: "11 Jul",
      activity: "Morning Walk",
      status: "Completed",
    },
    {
      date: "10 Jul",
      activity: "Water Goal",
      status: "Completed",
    },
    {
      date: "10 Jul",
      activity: "Sleep Tracking",
      status: "Good",
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-xl font-bold">
        Recent Health Logs
      </h2>

      <div className="space-y-4">
        {logs.map((log, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <h3 className="font-semibold">
                {log.activity}
              </h3>

              <p className="text-sm text-gray-500">
                {log.date}
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
              {log.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentLogs;