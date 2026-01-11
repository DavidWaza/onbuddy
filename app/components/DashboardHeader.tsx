"use client";
const DashboardHeader = () => {
  return (
    <div className="border-b border-gray-100 bg-white px-10 py-5">
      {/* Greeting */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-sm font-semibold text-green-700">
          E
        </span>

        <div>
          <h1 className="flex items-center gap-2 text-lg font-bold text-gray-700">
            Hi, <span>Emediong</span><span className="font-normal">(Software Engineer / Frontend)</span>
          </h1>
          <p className="text-base font-semibold text-gray-500">
            Welcome back
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
