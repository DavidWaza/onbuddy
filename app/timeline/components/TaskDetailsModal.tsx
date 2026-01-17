'use client';

import Image from "next/image";
import { X } from "lucide-react";

interface TaskDetailsModalProps {
  open: boolean;
  onClose: () => void;
  task: {
    tag: string;
    title: string;
    description: string;
    assigned: string;
    avatarUrl?: string;
    completed?: boolean;
  };
}

const TaskDetailsModal = ({ open, onClose, task }: TaskDetailsModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            {task.tag}
          </span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            {task.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">{task.description}</p>

        {/* Assignee */}
        <div className="flex items-center gap-4">
          {task.avatarUrl ? (
            <Image
              src={task.avatarUrl}
              alt={task.assigned}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
              {task.assigned.charAt(0)}
            </div>
          )}

          <div>
            <p className="text-sm text-gray-500">Assigned to</p>
            <p className="font-semibold text-gray-900">{task.assigned}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
