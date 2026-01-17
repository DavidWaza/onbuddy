"use client";

import { CheckCircle, Clock, AlertCircle } from "lucide-react";
import { StatusPill } from "./StatusPill";
import { TimelineDate } from "./TimelineDate";
import { TaskCard } from "./TaskCard";

export default function OnboardingTimeline() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] px-12 py-10">
      {/* Title Section */}
      <section className="flex items-start justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 uppercase">
            Your Onboarding Journey
          </h1>
          <p className="text-gray-500 max-w-lg">
            Complete these tasks to get fully set up and integrated with your
            new team.
          </p>

          {/* Status Pills */}
          <div className="flex gap-3 mt-6">
            <StatusPill
              icon={<CheckCircle size={16} />}
              text="1 Completed"
              className="bg-green-100 text-green-600"
            />
            <StatusPill
              icon={<Clock size={16} />}
              text="2 In Progress"
              className="bg-blue-100 text-blue-600"
            />
            <StatusPill
              icon={<Clock size={16} />}
              text="2 Upcoming"
              className="bg-gray-200 text-gray-600"
            />
            <StatusPill
              icon={<AlertCircle size={16} />}
              text="1 Overdue"
              className="bg-red-100 text-red-600"
            />
          </div>
        </div>

        {/* Progress */}
        <div className="text-right">
          <p className="text-5xl font-extrabold text-gray-900">17%</p>
          <p className="text-sm text-gray-500">Complete</p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-0.75 w-full bg-orange-500 rounded-full mb-14" />

      {/* Timeline */}
          <p className="text-sm text-orange-500 mb-2 text-right pb-3">January 2025</p>

      <div className="grid grid-cols-[120px_1fr] gap-x-10 gap-y-12">
        {/* Item 1 */}
        <TimelineDate date="Jan 15" status="Done" color="green" />
        <TaskCard
          title="Design Review"
          description="Review the new onboarding flow."
          assigned="Sarah Chen"
          status="in-progress"
        />

        {/* Item 2 */}
        <TimelineDate date="Jan 17" status="Active" color="blue" />
        <TaskCard
          title="Final Approval"
          description="Approve production deployment."
          assigned="Michael Scott"
          status="completed"
          isLast
        />

        {/* Item 2 */}
        <TimelineDate date="Jan 23" status="Not Done" color="red" />
        <TaskCard
          title="QA Testing"
          description="Run regression tests."
          assigned="Alex Johnson"
          status="not-attempted"
        />
      </div>
    </div>
  );
}
