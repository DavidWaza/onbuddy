"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Code2 } from "lucide-react";
import { Envelope, LockKey } from "@phosphor-icons/react";
import Image from "next/image";

type FormData = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Login attempt:", data);
    await new Promise((r) => setTimeout(r, 600));
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white/90">
      <div className="w-100">
        {/* Logo and Header */}
        <div className="text-center mb-5">
          <div className="">
            <Image
              src="/Assets/onbuddy-logo-1.png"
              alt="OnBuddy Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-center object-contain"
            />
          </div>
          <p className="text-gray-400 text-base -mt-20 font-medium">Your Smart Onboarding Platform</p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-gray-200 p-8">
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-black mb-1 uppercase">Welcome back</h2>
            <p className="text-gray-600 text-sm">Sign in to your account</p>
          </div>

          <div className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Work Email
              </label>
              <div className="relative">
                <Envelope size={32} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="you@company.com"
                  className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-600 mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <LockKey className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 4, message: "Minimum 4 characters" },
                  })}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-600 mt-1.5">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-2 focus:ring-black cursor-pointer"
                  {...register("remember")}
                />
                <span className="ml-2 text-gray-700">
                  Remember me
                </span>
              </label>
              <a className="text-black hover:underline font-medium" href="#">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full py-2.5 bg-black hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </div>
        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-8">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}