"use client";

import React, { useState } from "react";
import DashboardLayout from "../dashboard/dashboardLayout";
import ProjectCard from "../components/ProjectCard";
import ProjectDesCard from "./components/ProjectDesCard";

type Project = {
  id: string;
  title: string;
  description?: string;
  status?: "ongoing" | "maintenance" | "completed";
  role: string;
  projectLead: string;
  repo: {name:string, link:string}[];
  documentation: {name:string, link:string}[];
  members?: { name: string; avatar?: string; initials: string }[];
};

const sampleProjects: Project[] = [
  {
    id: "p1",
    title: "Presidential Metering Solution (PriMes)",
    description: "A smart monitoring of meters from purchase to installation",
    status: "ongoing",
    projectLead: "David Waza",
    role: "Frontend Developer",
    members: [
      { name: "Sarah Chen", initials: "SC" },
      { name: "Alex Rivera", initials: "AR" },
      { name: "Maya Patel", initials: "MP" },
    ],
    repo: [
      {
        name: "nimmes-frontend-app",
        link: "/repo/nimmes-frontend.app",
      },
      {
        name: "nimmes-backend",
        link: "/repo/nimmes-backend.app",
      },
    ],
     documentation: [
      {
        name: "Primes postman docs",
        link: "/repo/nimmes-frontend.app",
      },
    ],
  },
  {
    id: "p2",
    title: "Nigerian Student Loan Initiative (SLAS)",
    description: "Loan management and disbursement workflow",
    projectLead: "Josephine Nwoye",
    role: "Backend Developer",
    status: "maintenance",
    members: [
      { name: "Tunde Adebayo", initials: "TA" },
      { name: "Chioma Okafor", initials: "CO" },
    ],
     repo: [
      {
        name: "student-loan-application-system-frontend",
        link: "/repo/nimmes-frontend.app",
      },
    ],
    documentation: [
      {
        name: "SLAS postman docs",
        link: "/repo/nimmes-frontend.app",
      },
    ],
  },
  {
    id: "p3",
    title: "Asterlio",
    description: "An inhouse CRM",
    projectLead: "Davies Okpeta",
    role: "Frontend Developer",
    status: "completed",
    members: [{ name: "Ifeoma Nwosu", initials: "IN" }],
     repo: [
      {
        name: "aterlio-crm-emailtemplates",
        link: "/repo/nimmes-frontend.app",
      },
      {
        name: "aterlio-crm-ticketclosed-emailtemplate",
        link: "/repo/nimmes-frontend.app",
      },
       {
        name: "aterlio-crm-emailverification-emailtemplate",
        link: "/repo/nimmes-frontend.app",
      },
    ],
    documentation: [
      {
        name: "Asterlio postman docs",
        link: "/repo/nimmes-frontend.app",
      },
    ],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(sampleProjects[0]);

  return (
    <DashboardLayout>
      <div className="px-10">
        <p className="font-extrabold uppercase py-10 text-gray-600">
          You have been assigned these projects
        </p>
        <div className="grid grid-cols-2 gap-10">
          <div className="pb-10 space-y-6">
            {sampleProjects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                status={p.status}
                isActive={selected?.id === p.id}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>

          <div>
            <ProjectDesCard project={selected} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
