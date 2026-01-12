"use client";

import React from "react";
import { motion } from "framer-motion";

interface MomentumStreakProps {
  streakDays: number;
  benchmarkDay?: number;
}

const MomentumStreak: React.FC<MomentumStreakProps> = ({
  streakDays,
  benchmarkDay = 5,
}) => {
  const isAboveBenchmark = streakDays > benchmarkDay;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative w-full max-w-md flex items-center gap-4 rounded-xl bg-white px-5 py-4"
    >
      {/* 🔥 STREAK ICON */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: isAboveBenchmark ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white text-xl shadow-md"
      >
        🔥
        <span className="absolute -bottom-1 -right-1 text-[11px] font-bold bg-white text-gray-900 px-1.5 py-0.5 rounded-md shadow">
          {streakDays}
        </span>
      </motion.div>

      {/* COPY */}
      <div className="space-y-1">
        <p className="text-sm font-semibold text-gray-900">
          You’re on a{" "}
          <span className="text-orange-600">
            {streakDays}-day streak
          </span>
        </p>

        {isAboveBenchmark ? (
          <p className="text-xs font-medium text-gray-600">
            Most people slow down after Day {benchmarkDay} —{" "}
            <span className="font-bold text-gray-900">
              you’re still going 
            </span>
          </p>
        ) : (
          <p className="text-xs text-gray-600">
            Keep this up — consistency now pays off later ✨
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default MomentumStreak;
