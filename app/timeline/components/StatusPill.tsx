export const StatusPill = ({
  icon,
  text,
  className,
}: {
  icon: React.ReactNode;
  text: string;
  className: string;
}) => (
  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${className}`}>
    {icon}
    {text}
  </div>
);
