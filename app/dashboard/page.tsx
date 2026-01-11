'use client";';
import DashboardLayout from "./dashboardLayout";
import UserProfileSection from "../components/UserProfileSection";
import QuickoverviewSection from "../components/QuickoverviewSection";
import UserComponents from "../components/UserComponents";
import Reminder from "../components/Reminder";
import RoleLearningPath from "../components/RoleLearningPath";
import OnboardingWelcomeVideo from "../components/WelcomeVideo";
import ToolsAndChannelsAccess from "../components/ToolsAndChannelsAccess";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Reminder />
      <UserProfileSection />
      <OnboardingWelcomeVideo
        title="FROm the CTO's Desk"
        description="A short message from our CTO to help you get started."
        videoUrl="/videos/welcome.mp4"
        poster="/images/welcome-poster.jpg"
      />
      <QuickoverviewSection />
      <UserComponents />
      <RoleLearningPath role="Software Engineer" />
      <ToolsAndChannelsAccess />
    </DashboardLayout>
  );
};

export default DashboardPage;
