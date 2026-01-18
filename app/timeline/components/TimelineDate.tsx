export const TimelineDate = ({
  date,
  status,
  color,
}: {
  date: string;
  status: string;
  color: "green" | "blue" | "red";
}) => {
  const colorMap: Record<"green" | "blue" | "red", string> = {
    green: "text-green-600",
    blue: "text-blue-600",
    red: "text-red-600",
  };

  return (
    <div className="relative flex flex-col items-end pr-4">
      <p className="font-medium text-gray-900">{date}</p>
      <p className={`text-sm ${colorMap[color]}`}>{status}</p>
      {/* <span
        className={`absolute right-[-11px] top-2 h-3 w-3 rounded-full bg-${color}-500`}
      /> */}
    </div>
  );
};
