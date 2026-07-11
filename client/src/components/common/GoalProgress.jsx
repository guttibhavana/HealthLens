function GoalProgress() {
  const progress = 75;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">
        Daily Goal
      </h2>

      <div className="mb-3 flex justify-between">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>

      <div className="h-4 w-full rounded-full bg-gray-200">
        <div
          className="h-4 rounded-full bg-green-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        You're almost there! Keep going 💪
      </p>
    </div>
  );
}

export default GoalProgress;