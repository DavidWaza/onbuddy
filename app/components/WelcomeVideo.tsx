"use client";

import { useRef, useState } from "react";
import {
  Play,
  Pause,
  SpeakerHigh,
  SpeakerSlash,
  CheckCircle,
} from "@phosphor-icons/react";

interface OnboardingWelcomeVideoProps {
  title?: string;
  description?: string;
  videoUrl: string;
  poster?: string;
  onComplete?: () => void;
}

export default function OnboardingWelcomeVideo({
  title = "Welcome to the Team",
  description = "A short message from our CTO to help you get started.",
  videoUrl,
  poster,
  onComplete,
}: OnboardingWelcomeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCompleted(true);
    onComplete?.();
  };

  return (
    <div className="pb-10 px-10">
      <div className="border border-gray-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-extrabold text-gray-900 uppercase">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        {/* Video Container */}
        <div className="relative overflow-hidden rounded-lg bg-black">
          <video
            ref={videoRef}
            src={videoUrl}
            poster={poster}
            className="w-full rounded-lg"
            onEnded={handleEnded}
            controls={false}
          />

          {/* Overlay Controls */}
          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 transition hover:bg-white"
              >
                <Play size={26} weight="fill" className="text-gray-900" />
              </button>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
            <button
              onClick={togglePlay}
              className="flex items-center gap-1 text-white"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              <span className="text-sm">{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <button onClick={toggleMute} className="text-white">
              {isMuted ? <SpeakerSlash size={18} /> : <SpeakerHigh size={18} />}
            </button>
          </div>
        </div>

        {/* Completion State */}
        {completed && (
          <div className="mt-4 flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <CheckCircle size={18} weight="fill" />
            Welcome video completed
          </div>
        )}
      </div>
    </div>
  );
}
