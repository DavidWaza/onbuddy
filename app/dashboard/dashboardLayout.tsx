import type { Metadata } from "next";

// import "./globals.css";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "OnBuddy",
  description: "Your one time Onboarding Buddy",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen h-screen flex bg-zinc-50 dark:bg-black font-sans antialiased">
      <Sidebar user={{ name: "Emediong", email: "emediong@onbuddy.app" }} />
      <main className="flex-1 overflow-auto bg-[#f5f5f5]">
        <DashboardHeader />
        <div className="max-w-360 mx-auto">

        {children}
        </div>
        {/* <Footer /> */}
      </main>
    </div>
  );
}
