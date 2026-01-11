"use client";
interface QuickOverviewCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
}

export default function QuickOverviewCard({
  label,
  value,
  icon,
}: QuickOverviewCardProps) {
  return (
    <div className="flex items-center justify-between border border-gray-200 bg-white px-6 py-5 shadow-sm">
      {/* Left content */}
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          {label}
        </p>
        <p
          className={`text-3xl font-extrabold 0 ${
            label.includes("Completed")
              ? "text-emerald-900"
              : label.includes("Due")
              ? "text-amber-600"
              : label.includes("Key")
              ? "text-blue-900"
              : "text-purple-900"
          } text-2xl font-bold`}
        >
          {value}
        </p>
      </div>

      {/* Right icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-md shadow-xs ${
          label.includes("Completed")
            ? "bg-emerald-50"
            : label.includes("Due")
            ? "bg-amber-50"
            : label.includes("Key")
            ? "bg-blue-50"
            : "bg-purple-50"
        }`}
      >
        {icon}
      </div>
    </div>
  );
}
