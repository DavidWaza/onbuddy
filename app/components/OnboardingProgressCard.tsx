"use client";

import React from "react";
import FancyProgressBar from "./Progressbar";

interface OnboardingProgressCardProps {
  userName: string;
  currentWeek: number;
  totalDaysLeft: number;
  completedTasks: number;
  totalTasks: number;
  currentStep: number;
  totalSteps: number;
  milestones?: string[];
}

const OnboardingProgressCard: React.FC<OnboardingProgressCardProps> = ({
  userName,
  currentWeek,
  totalDaysLeft,
  completedTasks,
  totalTasks,
  currentStep,
  totalSteps,
  milestones = [],
}) => {
  const progressPercentage = Math.round(
    (completedTasks / totalTasks) * 100
  );

  return (
    <div className="w-full bg-white border border-gray-200 shadow-xs p-10 space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-extrabold tracking-tight uppercase text-2xl text-green-900">
          Welcome Onboard, {userName}
        </h1>
        <p className="text-gray-800 font-medium mt-2">
          You&apos;re in{" "}
          <span className="font-bold uppercase text-green-900">
            Week {currentWeek}
          </span>{" "}
          of your onboarding journey
        </p>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-700">
        <div>
          Days Left:{" "}
          <span className="font-bold text-green-900">
            {totalDaysLeft} Days
          </span>
        </div>
        <div>
          Step{" "}
          <span className="font-bold text-green-900">
            {currentStep}
          </span>{" "}
          of {totalSteps}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <FancyProgressBar value={progressPercentage} />
        <p className="text-gray-800 font-medium">
          <span className="font-bold uppercase text-green-900">
            {completedTasks} of {totalTasks}
          </span>{" "}
          tasks completed
        </p>
      </div>

      {/* Milestones */}
      {milestones.length > 0 && (
        <div className="pt-4">
          <p className="text-sm font-semibold uppercase text-gray-600 mb-3">
            Milestones Achieved
          </p>
          <div className="flex flex-wrap gap-3">
            {milestones.map((milestone, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold border border-green-900 text-green-900 bg-green-50"
              >
                {milestone}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Momentum Message */}
      {progressPercentage >= 50 && (
        <div className="mt-4 p-4 border border-green-200 bg-green-50">
          <p className="font-semibold text-green-900">
            You’re halfway there! Keep the momentum going 🚀
          </p>
        </div>
      )}
    </div>
  );
};

export default OnboardingProgressCard;
