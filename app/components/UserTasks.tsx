"use client";

import { useState } from "react";
import {
  CheckCircle,
  Circle,
  PlayCircle,
  Code,
  ClockCountdown,
  ArrowSquareOut,
  Users,
} from "@phosphor-icons/react";

type TaskType = "video" | "setup" | "meeting";

interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  category: string;
  due: string;
  completed: boolean;
  videoUrl?: string;
  meetingUrl?: string;
}

export default function UserTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Welcome & Onboarding",
      description: "Watch the welcome video from the CTO",
      type: "video",
      category: "Onboarding",
      due: "Today · 4:00 PM",
      completed: false,
      videoUrl: "https://example.com/cto-welcome-video",
    },
    {
      id: "2",
      title: "Set up VS Code",
      description: "Install VS Code and recommended extensions",
      type: "setup",
      category: "Tools",
      due: "Today · 6:00 PM",
      completed: false,
    },
    {
      id: "3",
      title: "Meet Your Team Lead",
      description:
        "Introductory sync to align expectations, goals, and next steps",
      type: "meeting",
      category: "People",
      due: "Tomorrow · 10:00 AM",
      completed: false,
      meetingUrl: "https://teams.microsoft.com/l/meeting/new",
    },
     {
      id: "4",
      title: "Complete VS Code Setup",
      description: "Finalize your development environment setup",
      type: "setup",
      category: "Tools",
      due: "Today · 8:00 PM",
      completed: false,
    },
  ]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderIcon = (type: TaskType) => {
    switch (type) {
      case "video":
        return <PlayCircle size={22} className="text-emerald-600" />;
      case "setup":
        return <Code size={22} className="text-indigo-600" />;
      case "meeting":
        return <Users size={22} className="text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="border border-gray-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-extrabold text-gray-900 uppercase">
            Your Tasks
          </h2>
          <p className="text-sm text-gray-500">
            Complete these tasks to finish your onboarding
          </p>
        </div>

        {/* Tasks */}
        <ul className="space-y-4">
          {tasks.map((task) => {
            const isDone = task.completed;

            return (
              <li
                key={task.id}
                className={`flex items-start justify-between rounded-lg border px-4 py-3 transition
                  ${
                    isDone
                      ? "border-gray-200 bg-gray-50 opacity-60"
                      : "border-gray-200 bg-white hover:bg-gray-50"
                  }`}
              >
                {/* Left */}
                <div className="flex gap-3">
                  {/* Icon */}
                  <div className="mt-0.5">
                    {renderIcon(task.type)}
                  </div>

                  {/* Content */}
                  <div className="space-y-1">
                    {/* Title + Category */}
                    <div className="flex flex-wrap items-center gap-2">
                      <p
                        className={`font-medium ${
                          isDone
                            ? "line-through text-gray-500"
                            : "text-gray-900"
                        }`}
                      >
                        {task.title}
                      </p>

                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium
                          ${
                            isDone
                              ? "bg-gray-200 text-gray-500"
                              : "bg-gray-100 text-gray-700"
                          }`}
                      >
                        {task.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500">
                      {task.description}
                    </p>

                    {/* Video link */}
                    {task.type === "video" && task.videoUrl && (
                      <a
                        href={task.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-sm font-medium
                          ${
                            isDone
                              ? "pointer-events-none text-gray-400"
                              : "text-emerald-700 hover:underline"
                          }`}
                      >
                        Watch video
                        <ArrowSquareOut size={14} />
                      </a>
                    )}

                    {/* Meeting link */}
                    {task.type === "meeting" && task.meetingUrl && (
                      <a
                        href={task.meetingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-sm font-medium
                          ${
                            isDone
                              ? "pointer-events-none text-gray-400"
                              : "text-blue-700 hover:underline"
                          }`}
                      >
                        Schedule meeting
                        <ArrowSquareOut size={14} />
                      </a>
                    )}

                    {/* Due time */}
                    <div className="flex items-center gap-1 text-xs text-amber-600">
                      <ClockCountdown size={14} />
                      <span>{task.due}</span>
                    </div>
                  </div>
                </div>

                {/* Completion toggle */}
                <button
                  onClick={() => toggleTask(task.id)}
                  disabled={isDone}
                  className="mt-1"
                  aria-label="Mark task as complete"
                >
                  {isDone ? (
                    <CheckCircle
                      size={22}
                      weight="fill"
                      className="text-emerald-600"
                    />
                  ) : (
                    <Circle
                      size={22}
                      className="text-gray-400 hover:text-gray-600"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
