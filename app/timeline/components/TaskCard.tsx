'use client';

import { useState } from "react";
import TaskDetailsModal from "./TaskDetailsModal";

type TaskStatus = "completed" | "in-progress" | "not-attempted";

const statusConfig: Record<
  TaskStatus,
  {
    node: string;
    border: string;
    tag: string;
    label: string;
  }
> = {
  completed: {
    node: "bg-green-500 border-green-500",
    border: "border-green-300",
    tag: "bg-green-100 text-green-600",
    label: "Completed",
  },
  "in-progress": {
    node: "bg-blue-500 border-blue-500",
    border: "border-blue-300",
    tag: "bg-blue-100 text-blue-600",
    label: "In Progress",
  },
  "not-attempted": {
    node: "bg-red-500 border-red-500",
    border: "border-red-300",
    tag: "bg-red-100 text-red-600",
    label: "Not Attempted",
  },
};

export const TaskCard = ({
  title,
  description,
  assigned,
  avatarUrl,
  status = "not-attempted",
  isLast,
}: {
  title: string;
  description: string;
  assigned: string;
  avatarUrl?: string;
  status?: TaskStatus;
  isLast?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const styles = statusConfig[status];

  return (
    <>
      <div className="relative flex gap-8">
        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {!isLast && (
            <div className="absolute top-0 bottom-0 w-px bg-gray-200" />
          )}

          {/* Node */}
          <div
            className={`
              relative z-10 h-4 w-4 rounded-full border-2 bg-white
              ${styles.node}
            `}
          />

          <div className="flex-1" />
        </div>

        {/* Card */}
        <div
          className={`
            flex-1 rounded-2xl p-6 bg-white border shadow-sm
            transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
            ${styles.border}
          `}
        >
          <div className="flex justify-between items-start mb-3">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${styles.tag}`}>
              {styles.label}
            </span>

            <div className="h-8 w-8 rounded-full bg-gray-200 text-xs flex items-center justify-center">
              <p className="text-gray-900 uppercase text-base font-medium">
                {assigned.charAt(0)}
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>

          <p className="text-gray-500 mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">{assigned}</span>
            <button
              onClick={() => setOpen(true)}
              className="text-orange-500 font-medium hover:underline"
            >
              View details →
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <TaskDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        task={{
          title,
          description,
          assigned,
          avatarUrl,
          tag: styles.label,
        }}
      />
    </>
  );
};
