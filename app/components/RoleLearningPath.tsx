"use client";

import { useState } from "react";
import {
  CheckCircle,
  Circle,
  BookOpen,
  ClockCountdown,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";

type Role = "Software Engineer" | "Designer";

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  role: Role;
  duration: string;
  deadline: string;
  completed: boolean;
  topics: string[];
}

export default function RoleLearningPath({
  role = "Software Engineer",
}: {
  role?: Role;
}) {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "course-1",
      title: "Company Engineering Foundations",
      description:
        "Understand our architecture, engineering culture, and expectations.",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      role: "Software Engineer",
      duration: "3 hrs",
      deadline: "Complete within 7 days",
      completed: false,
      topics: [
        "Engineering principles",
        "Code standards & reviews",
        "Branching strategy",
        "Release workflow",
      ],
    },
    {
      id: "course-2",
      title: "Frontend Stack Deep Dive",
      description:
        "Learn how we build production-ready UIs at scale.",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      role: "Software Engineer",
      duration: "4 hrs",
      deadline: "Complete within 14 days",
      completed: false,
      topics: [
        "Next.js architecture",
        "Design system usage",
        "State management",
        "Performance & accessibility",
      ],
    },
  ]);

  const toggleCourseCompletion = (id: string) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id
          ? { ...course, completed: !course.completed }
          : course
      )
    );
  };

  const filteredCourses = courses.filter(
    (course) => course.role === role
  );

  return (
    <div className="pb-10 px-10">
        <div className="border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-extrabold text-gray-900 uppercase">
          Your Learning Path
        </h2>
        <p className="text-sm text-gray-500">
          Required courses for your role as a {role}
        </p>
      </div>

      {/* Courses */}
      <ul className="space-y-5">
        {filteredCourses.map((course) => {
          const isExpanded = expandedCourse === course.id;
          const isDone = course.completed;

          return (
            <li
              key={course.id}
              className={`rounded-lg border transition
                ${
                  isDone
                    ? "border-gray-200 bg-gray-50 opacity-70"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
            >
              {/* Course Header */}
              <div className="flex gap-4 p-4">
                {/* Thumbnail */}
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-20 w-28 rounded-md object-cover"
                />

                {/* Info */}
                <div className="flex flex-1 justify-between gap-4">
                  <div>
                    <h3
                      className={`font-semibold ${
                        isDone
                          ? "line-through text-gray-500"
                          : "text-gray-900"
                      }`}
                    >
                      {course.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        {course.duration}
                      </div>

                      <div className="flex items-center gap-1 text-amber-600">
                        <ClockCountdown size={14} />
                        {course.deadline}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() =>
                        setExpandedCourse(
                          isExpanded ? null : course.id
                        )
                      }
                      className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                      Learning path
                      {isExpanded ? (
                        <CaretUp size={16} />
                      ) : (
                        <CaretDown size={16} />
                      )}
                    </button>

                    <button
                      onClick={() => toggleCourseCompletion(course.id)}
                      disabled={isDone}
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
                  </div>
                </div>
              </div>

              {/* Topics / Learning Path */}
              {isExpanded && (
                <div className="border-t bg-gray-50 px-6 py-4">
                  <p className="mb-3 text-sm font-medium text-gray-700">
                    What you’ll learn
                  </p>
                  <ul className="space-y-2">
                    {course.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
    </div>
    
  );
}
