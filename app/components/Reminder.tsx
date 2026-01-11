'use client'

import { ArrowRight, ClockCountdown } from "@phosphor-icons/react";

const Reminder = () => {
interface MeetingReminder {
  title: string;
  time: string;
  with: string;
  meetingUrl: string;
  isToday: boolean;
}
  const meetingReminder: MeetingReminder | null = {
    title: "Onboarding Sync",
    time: "02:00 PM",
    with: "Daniel Okafor (Senior Engineer)",
    meetingUrl: "https://teams.microsoft.com/l/meetup-join/xyz",
    isToday: true,
  };
  return (
    <div className="px-10 pt-10">
      {/* Meeting Reminder */}
      {meetingReminder?.isToday && (
        <div className="flex items-center justify-between border border-amber-200 bg-amber-50 px-4 py-3">
          <div className="flex items-center gap-3">
            <ClockCountdown
              size={22}
              className="text-amber-700"
              weight="fill"
            />

            <div>
              <p className="text-sm font-semibold text-gray-800">
                You have a meeting today
              </p>
              <p className="text-sm text-gray-600">
                {meetingReminder.title} with{" "}
                <span className="font-medium">
                  {meetingReminder.with}
                </span>{" "}
                at{" "}
                <span className="font-medium">
                  {meetingReminder.time}
                </span>
              </p>
            </div>
          </div>

          <a
            href={meetingReminder.meetingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700"
          >
            Join meeting
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </div>
  )
}

export default Reminder