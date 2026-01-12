import React from "react";

interface ProgressBarProps {
  value: number; // 0 - 100
  label?: string;
}

const FancyProgressBar: React.FC<ProgressBarProps> = ({ value, label }) => {
  return (
    <div className="w-full">
      {/* Label + Percentage */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {label ?? ""}
        </span>
        <span className="text-xs font-semibold text-gray-800">
          {value}%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-3 w-full bg-gray-200 overflow-hidden">
        {/* Subtle depth layer */}
        <div
          className="absolute inset-y-0 left-0 opacity-40"
          style={{
            width: `${value}%`,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0))",
          }}
        />

        {/* Main progress */}
        <div
          className="relative h-full transition-all duration-700 ease-out"
          style={{
            width: `${value}%`,
            background:
              "linear-gradient(90deg, #15803d, #16a34a, #22c55e)",
          }}
        >
          {/* Controlled sheen */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-[sheen_2.5s_linear_infinite]" />
        </div>

        {/* Progress marker */}
        <div
          className="absolute top-0 h-full w-0.5 bg-gray-900 transition-all duration-700"
          style={{ left: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default FancyProgressBar;
