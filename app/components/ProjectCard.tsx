"use client";

import React from "react";
import { FolderMinus, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  status?: "ongoing" | "maintenance" | "completed";
  isActive?: boolean;
}

const statusMap: Record<
  "ongoing" | "maintenance" | "completed",
  { label: string; className: string }
> = {
  ongoing: { label: "Ongoing", className: "bg-amber-100 text-amber-800" },
  maintenance: { label: "Maintenance", className: "bg-gray-100 text-gray-700" },
  completed: {
    label: "Completed",
    className: "bg-emerald-100 text-emerald-800",
  },
};

export default function ProjectCard({
  title,
  description,
  href,
  onClick,
  status,
  isActive,
}: ProjectCardProps) {
  const Wrapper: React.ElementType = href ? "a" : "button";
  const statusData = status ? statusMap[status] : null;
  const activeBorder = isActive ? "border-green-800 shadow-md ring-1 ring-green-800" : "border-gray-200";

  return (
    <Wrapper
      href={href}
      onClick={onClick}
      className={`group relative flex items-center gap-4  ${activeBorder} bg-white p-6 hover:shadow-md transition-all duration-150 text-left w-full cursor-pointer`}
    >
      <div className="shrink-0">
        <div className="h-12 w-12 rounded-md bg-gray-100 group-hover:bg-green-100 flex items-center justify-center text-gray-700">
          <FolderMinus className="h-6 w-6 text-green-800" />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-extrabold uppercase text-gray-900 truncate">
              {title}
            </h3>
            {statusData && (
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-md ${statusData.className}`}
              >
                {statusData.label}
              </span>
            )}
          </div>

          {/* caret that appears on hover */}
          <div className="ml-3 opacity-0 transform translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150">
            <div className="h-8 w-8 rounded-md bg-transparent flex items-center justify-center text-green-800">
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        {description && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Wrapper>
  );
}
