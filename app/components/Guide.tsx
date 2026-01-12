import React from "react";
import PersonalGuide from "./PersonalGuide";
import NextBestActionCard from "./NextBestActionCard";

const Guide = () => {
  return (
    <div className="pb-10 px-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <PersonalGuide
            userName="Emediong"
            day={1}
            completedTasks={["Profile Setup"]}
            pendingTasks={["Security Setup", "Documentation Review"]}
          />
        </div>
        <div className="col-span-2">
          <NextBestActionCard
            taskName="Set up VS Code for Development"
            estimatedTime="15 mins"
            required
            // onActionClick={() => {
            //   console.log("Navigate to Security Training");
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
