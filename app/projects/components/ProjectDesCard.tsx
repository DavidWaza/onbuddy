import { ExternalLink, FileText, GitBranch } from "lucide-react";
import Link from "next/link";
import React from "react";

type Project = {
  id?: string;
  title?: string;
  description?: string;
  status?: "ongoing" | "maintenance" | "completed";
  projectLead: string;
  role: string;
  repo: { name: string; link: string }[];
  documentation: {name:string; link:string}[]
  members?: { name: string; avatar?: string; initials: string }[];
};

const ProjectDesCard: React.FC<{ project: Project | null }> = ({ project }) => {
  if (!project) {
    return (
      <div className="border border-green-800 bg-white p-6">
        <p className="text-sm text-gray-500">Select a project to see details</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-extrabold text-gray-900 uppercase">
            {project.title}
          </h2>
        </div>
        <div>
          <span className="text-xs text-gray-500">Status</span>
          <div className="mt-1">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-md ${
                project.status === "ongoing"
                  ? "bg-amber-100 text-amber-800"
                  : project.status === "maintenance"
                    ? "bg-gray-100 text-gray-700"
                    : "bg-emerald-100 text-emerald-800"
              }`}
            >
              {project.status ?? "unknown"}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h3 className="text-sm font-medium text-gray-700">Project overview</h3>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="">
          <p className="text-base text-gray-500 font-medium">Project Lead</p>
          <p className="text-sm text-gray-600 mt-2 font-medium">
            {project.projectLead}{" "}
            <span className="text-xs text-gray-400">{project.role}</span>
          </p>
        </div>
        <div className="rounded-md bg-gray-50 p-3 border border-gray-200">
          <p className="text-base text-gray-500 font-medium">Contributors</p>
          <div className="mt-3 space-y-3">
            {(project.members ?? []).map((m) => (
              <div key={m.name} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                  {m.avatar ? (
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <span>{m.initials}</span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{m.name}</p>
                  <p className="text-xs text-gray-500">Contributor</p>
                </div>
              </div>
            ))}
            {!(project.members && project.members.length) && (
              <p className="text-sm text-gray-500">No contributors assigned</p>
            )}
          </div>
        </div>
      </div>

      {/* Repositories */}
      <div className="space-y-3">
        <p className="font-extrabold text-sm uppercase text-gray-500 pt-5">
          Repositories
        </p>
        {(project.repo ?? []).map((r) => (
          <div
            className="px-5 py-3 border border-gray-100 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all ease-in-out duration-300"
            key={r.name}
          >
            <Link href={"#"} className="cursor-pointer">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <GitBranch className="text-xl text-gray-400" />
                  <p className="text-gray-500 font-medium">
                    <p className="text-gray-500 font-medium">{r.name}</p>
                  </p>
                </div>
                <div>
                  <ExternalLink className="text-gray-400" size={20} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* documentation */}
      <div className="space-y-3">
        <p className="font-extrabold text-sm uppercase text-gray-500 pt-5">
          documentation
        </p>
        {(project.documentation ?? []).map((d) => (
          <div
            className="px-5 py-3 border border-gray-100 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all ease-in-out duration-300"
            key={d.name}
          >
            <Link href={"#"} className="cursor-pointer">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <FileText className="text-xl text-gray-400" />
                  <p className="text-gray-500 font-medium">
                    <p className="text-gray-500 font-medium">{d.name}</p>
                  </p>
                </div>
                <div>
                  <ExternalLink className="text-gray-400" size={20} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDesCard;
