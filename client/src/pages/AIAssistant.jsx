import MainLayout from "../layouts/MainLayout";
import { FaRobot, FaUserCircle, FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAIInsights } from "../services/aiService";

function AIAssistant() {
  const [insights, setInsights] = useState("Loading AI insights...");
  useEffect(() => {
  const fetchInsights = async () => {
    try {
      const response = await getAIInsights();
      setInsights(response.insights);
    } catch (error) {
      console.error(error);
      setInsights("Failed to load AI insights.");
    }
  };

  fetchInsights();
}, []);
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            AI Health Assistant
          </h1>

          <p className="mt-2 text-gray-500">
            Ask health-related questions and receive AI-powered guidance.
          </p>
        </div>

        {/* Chat Card */}
        <div className="flex h-[600px] flex-col rounded-2xl bg-white shadow-lg">

          {/* Chat Header */}
          <div className="flex items-center gap-3 border-b p-5">
            <div className="rounded-full bg-blue-100 p-3">
              <FaRobot className="text-2xl text-blue-600" />
            </div>

            <div>
              <h2 className="font-bold">HealthLens AI</h2>
              <p className="text-sm text-green-600">
                ● Online
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 space-y-6 overflow-y-auto bg-slate-50 p-6">

            {/* AI Message */}
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <FaRobot className="text-blue-600" />
              </div>

              <div className="max-w-md rounded-2xl rounded-tl-none bg-white p-4 shadow">
                <p>
                  Hello 👋 I'm your HealthLens AI Assistant.
                  Ask me anything about your health, fitness,
                  nutrition, or wellness.
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  10:30 AM
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-md rounded-2xl rounded-br-none bg-blue-600 p-4 text-white shadow">
                <p>
                  How many calories should I eat daily?
                </p>

                <p className="mt-2 text-right text-xs text-blue-100">
                  10:31 AM
                </p>
              </div>

              <div className="ml-3 rounded-full bg-gray-200 p-2">
                <FaUserCircle className="text-gray-700" />
              </div>
            </div>

            {/* AI Reply */}
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <FaRobot className="text-blue-600" />
              </div>

              <div className="max-w-md rounded-2xl rounded-tl-none bg-white p-4 shadow">
                <p className="whitespace-pre-line">
                {insights}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  10:31 AM
                </p>
              </div>
            </div>

          </div>

          {/* Input */}
          <div className="border-t bg-white p-5">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Ask your health question..."
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                <FaPaperPlane />
                Send
              </button>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default AIAssistant;