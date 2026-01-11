"use client";
import QuickOverviewCard from "./QuickoverviewCard";
import {
  CheckCircle,
  ClockCountdown,
  AddressBookTabs,
  CalendarCheck,
} from "@phosphor-icons/react";

const QuickoverviewSection = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
        <QuickOverviewCard
          label="Completed Tasks"
          value={2}
          icon={
            <CheckCircle size={22} weight="fill" className="text-green-500" />
          }
        />
        <QuickOverviewCard
          label="Due Today"
          value={2}
          icon={
            <ClockCountdown
              size={22}
              weight="fill"
              className="text-amber-500"
            />
          }
        />
        <QuickOverviewCard
          label="Key Contacts"
          value={2}
          icon={
            <AddressBookTabs
              size={22}
              weight="fill"
              className="text-blue-500"
            />
          }
        />
        <QuickOverviewCard
          label="Meetings Today"
          value={2}
          icon={
            <CalendarCheck
              size={22}
              weight="fill"
              className="text-purple-500"
            />
          }
        />
      </div>
    </div>
  );
};

export default QuickoverviewSection;
