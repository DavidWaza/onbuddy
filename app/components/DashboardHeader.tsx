"use client";
import { Calendar, Clock } from "lucide-react";

const DashboardHeader = () => {
  const now = new Date();

  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const dayName = now.toLocaleDateString("en-US", { weekday: "long" }); // Saturday
  const day = now.getDate();
  const month = now.toLocaleDateString("en-US", { month: "long" });
  const year = now.getFullYear();
  const formattedDate = `${dayName}, ${day}${getOrdinal(day)} ${month}, ${year}`;
  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div className="border-b border-gray-100 bg-white px-10 py-5">
      <div className="flex items-center justify-between">
        {/* Greeting */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-sm font-semibold text-green-700">
            E
          </span>

          <div>
            <h1 className="flex items-center gap-2 text-lg font-bold text-gray-700">
              Hi, <span>Emediong</span>
              <span className="font-normal text-sm text-gray-500">(Software Engineer / Frontend)</span>
            </h1>
            <p className="text-base font-semibold text-gray-500">Omniswift</p>
          </div>
        </div>

        {/* Date display on the far right */}
        <div className="ml-6">
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-3 py-2 rounded-lg">
            <Calendar className="h-6 w-6 text-orange-500" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-800">{formattedDate}</span>
              <span className="text-xs text-gray-500 flex items-center gap-2">
                <Clock className="h-3 w-3" /> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
