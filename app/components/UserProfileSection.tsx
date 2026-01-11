import React from "react";
import OnboardingProgressCard from "./OnboardingProgressCard";

const UserProfileSection = () => {
  return (
    <div className="p-10">
      <OnboardingProgressCard
        userName="Emediong"
        currentWeek={1}
        totalDaysLeft={29}
        completedTasks={8}
        totalTasks={24}
        currentStep={3}
        totalSteps={8}
        milestones={[
          "Week 1 Started",
          "Account Setup Complete",
          "Documentation Ready",
        ]}
      />
    </div>
  );
};

export default UserProfileSection;
