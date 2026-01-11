"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  CaretDown,
  ChatCenteredText,
  MicrosoftTeamsLogo,
  CheckCircle,
} from "@phosphor-icons/react";

type Availability = "Available" | "Busy" | "Away";

interface Person {
  id: string;
  name: string;
  role: string;
  availability: Availability;
  email: string;
  teamsChatUrl: string;
}

const people: Person[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Engineering Manager",
    availability: "Available",
    email: "sarah.johnson@company.com",
    teamsChatUrl: "https://teams.microsoft.com/l/chat/0/0",
  },
  {
    id: "2",
    name: "Daniel Okafor",
    role: "Senior Engineer (Buddy)",
    availability: "Busy",
    email: "daniel.okafor@company.com",
    teamsChatUrl: "https://teams.microsoft.com/l/chat/0/0",
  },
  {
    id: "3",
    name: "Amaka Bello",
    role: "Product Designer",
    availability: "Available",
    email: "amaka.bello@company.com",
    teamsChatUrl: "https://teams.microsoft.com/l/chat/0/0",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default function SchedulerWithPeople() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSchedule = () => {
    if (!selectedPerson || !date || !time) return;

    const subject = encodeURIComponent(`Meeting with ${selectedPerson.name}`);
    const body = encodeURIComponent(
      `Hi ${selectedPerson.name},\n\nI’d like to schedule a meeting.\n\nProposed time:\n${date} at ${time}`
    );

    const outlookUrl = `https://outlook.office.com/calendar/0/deeplink/compose?subject=${subject}&body=${body}&to=${selectedPerson.email}`;

    window.open(outlookUrl, "_blank");
  };

  const availabilityColor = (status: Availability) => {
    switch (status) {
      case "Available":
        return "text-emerald-600";
      case "Busy":
        return "text-amber-600";
      case "Away":
        return "text-gray-400";
    }
  };

  return (
    <div className="border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-extrabold uppercase text-gray-900">
          Schedule a Meeting
        </h2>
        <p className="text-sm text-gray-500">
          Choose who to meet and book a time
        </p>
      </div>

      {/* Person Selector */}
      <div className="mb-6 relative">
        <label className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-700">
          <Users size={16} />
          Select person
        </label>

        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50"
        >
          {selectedPerson ? (
            <div className="flex flex-col text-left">
              <span className="font-medium text-gray-900">
                {selectedPerson.name}
              </span>
              <span className="text-xs text-gray-500">
                {selectedPerson.role}
              </span>
            </div>
          ) : (
            <span className="text-gray-500">Choose a team member</span>
          )}
          <CaretDown size={16} />
        </button>

        {showDropdown && (
          <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg">
            {people.map((person) => (
              <button
                key={person.id}
                onClick={() => {
                  setSelectedPerson(person);
                  setShowDropdown(false);
                }}
                className="flex w-full items-center justify-between px-4 py-3 text-sm hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium text-gray-900 text-left">{person.name}</p>
                  <p className="text-xs text-gray-500">{person.role}</p>
                </div>
                <span
                  className={`text-xs font-medium ${availabilityColor(
                    person.availability
                  )}`}
                >
                  {person.availability}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Buddy Chat */}
      {selectedPerson && (
        <div className="mb-6 flex items-center justify-between rounded-lg border bg-gray-50 px-4 py-3">
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-emerald-600" />
            <div>
              <p className="text-sm font-medium text-gray-900 text-left!">
                {selectedPerson.name}
              </p>
              <p className="text-sm text-gray-500">{selectedPerson.role}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <a
              href={selectedPerson.teamsChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-50"
            >
              <MicrosoftTeamsLogo size={16} />
              Teams
            </a>

            <button
              onClick={() => alert("Open in-app chat")}
              className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <ChatCenteredText size={16} />
              In-app
            </button>
          </div>
        </div>
      )}

      {/* Date */}
      <div className="mb-4">
        <label className="mb-1 flex items-center gap-1 text-sm font-medium text-gray-700">
          <Calendar size={16} />
          Select date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
        />
      </div>

      {/* Time */}
      <div className="mb-6">
        <label className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-700">
          <Clock size={16} />
          Select time
        </label>

        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setTime(slot)}
              className={`rounded-md border px-3 py-2 text-sm transition
                ${
                  time === slot
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Confirm */}
      <button
        onClick={handleSchedule}
        disabled={!selectedPerson || !date || !time}
        className={`flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition
          ${
            selectedPerson && date && time
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "cursor-not-allowed bg-gray-200 text-gray-500"
          }`}
      >
        Confirm meeting
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
