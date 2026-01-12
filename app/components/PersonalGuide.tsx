"use client";

import React from "react";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

type GuideState = "welcome" | "recommendation" | "behind" | "completed";

interface PersonalGuideProps {
  userName: string;
  day: number;
  completedTasks: string[];
  pendingTasks: string[];
  onActionClick?: () => void;
}

const PersonalGuide: React.FC<PersonalGuideProps> = ({
  userName,
  day,
  completedTasks,
  pendingTasks,
  onActionClick,
}) => {
  const getGuideState = (): {
    state: GuideState;
    message: string;
    actionLabel?: string;
  } => {
    if (day === 1 && completedTasks.length === 0) {
      return {
        state: "welcome",
        message: `Hi ${userName}. I’ll guide you through the essentials to get started smoothly.`,
        actionLabel: "Begin onboarding",
      };
    }

    if (pendingTasks.includes("Security Setup") && day <= 3) {
      return {
        state: "recommendation",
        message: `Most new hires complete Security Setup before Day 3. Completing it now keeps you on track.`,
        actionLabel: "Complete Security Setup",
      };
    }

    if (day > 3 && pendingTasks.length > 3) {
      return {
        state: "behind",
        message: `You’re slightly behind the expected pace. Let’s prioritize the highest-impact task.`,
        actionLabel: "View priority tasks",
      };
    }

    return {
      state: "completed",
      message: `Your onboarding progress is healthy. I’ll step in if anything needs attention.`,
    };
  };

  const guide = getGuideState();

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full h-50 max-w-md border border-gray-200 bg-white shadow-sm p-6 space-y-5 overflow-hidden"
      >
        {/* Ambient Intelligence Glow */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-green-50 via-transparent to-transparent" />

        {/* Header */}
        <div className="relative flex items-center gap-4">
          {/* Animated AI Avatar */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-12 w-12 rounded-full border border-green-900 flex items-center justify-center"
          >
            {/* Rotating orbital ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-green-900/30"
            />

            {/* Pulsing core */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex items-center justify-center"
            >
              <Sparkle size={18} className="text-green-900" />
            </motion.div>
          </motion.div>

          {/* Identity */}
          <div>
            <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              OnBuddy Guide
              <span className="text-[10px] uppercase tracking-wider text-green-900 border border-green-900 px-1.5 py-0.5">
                Active
              </span>
            </p>
            <p className="text-xs text-gray-500">
              Context-aware onboarding assistant
            </p>
          </div>
        </div>

        {/* Message */}
        <motion.p
          key={guide.message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="relative text-sm text-gray-800 leading-relaxed"
        >
          {guide.message}
        </motion.p>

        {/* Action */}
        {guide.actionLabel && (
          <motion.button
            whileHover={{ x: 4 }}
            onClick={onActionClick}
            className="relative inline-flex items-center gap-2 text-sm font-semibold text-green-900"
          >
            {guide.actionLabel}
            <ArrowRight size={16} />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default PersonalGuide;
