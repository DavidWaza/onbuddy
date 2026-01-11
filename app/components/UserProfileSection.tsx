import React from "react";
import FancyProgressBar from "./Progressbar";

const UserProfileSection = () => {
  return (
    <div className="p-10">
      <div className="w-full py-7 px-10 border border-gray-200 p-10 shadow-xs bg-white">
        <h1 className="font-extrabold tracking-tight uppercase text-2xl text-green-900">
          Welcome Onboard, Emediong
        </h1>
        <p className="text-gray-800 py-2 font-medium">
          You&apos;re in{" "}
          <span className="font-bold uppercase text-green-900">Week 1</span> of
          your onboarding Journey
        </p>
        <p className="text-gray-800 pb-2 font-medium">
          Days Left:{" "}
          <span className="font-bold uppercase text-green-900"> 29 Days</span>
        </p>
        <FancyProgressBar value={25} />
        <p className="text-gray-800 py-2 font-medium">
          <span className="font-bold uppercase text-green-900"> 8 of 24 </span>
          tasks completed
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default UserProfileSection;
