"use client";

import React from "react";
import { ArrowRight, Clock } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface NextBestActionCardProps {
  title?: string;
  taskName: string;
  estimatedTime: string;
  required?: boolean;
  onActionClick?: () => void;
}

const NextBestActionCard: React.FC<NextBestActionCardProps> = ({
  title = "Your next step",
  taskName,
  estimatedTime,
  required = true,
  onActionClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative w-full h-50 border border-gray-200 bg-white shadow-sm px-6 py-9.5 overflow-hidden"
    >
      {/* Subtle focus glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-green-50 via-transparent to-transparent" />

      {/* Header */}
      <p className="relative text-xs font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </p>

      {/* Task */}
      <h2 className="relative mt-2 text-lg font-bold text-gray-900">
        {taskName}
      </h2>

      {/* Meta */}
      <div className="relative mt-3 flex items-center gap-4 text-sm text-gray-600">
        <span className="inline-flex items-center gap-1">
          <Clock size={14} />
          {estimatedTime}
        </span>

        {required && (
          <span className="text-xs font-semibold uppercase tracking-wide text-green-900 border border-green-900 px-2 py-0.5">
            Required
          </span>
        )}
      </div>

      {/* Action */}
      {/* <motion.button
        whileHover={{ x: 6 }}
        onClick={onActionClick}
        className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-900"
      >
        Start now
        <ArrowRight size={16} />
      </motion.button> */}
    </motion.div>
  );
};

export default NextBestActionCard;
