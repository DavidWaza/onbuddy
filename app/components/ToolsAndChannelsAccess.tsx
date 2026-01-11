"use client";

import {
  CheckCircle,
  Clock,
  ArrowSquareOut,
  MicrosoftTeamsLogo,
  GithubLogo,
  SlackLogo,
  FigmaLogo,
  Globe,
} from "@phosphor-icons/react";

type AccessStatus = "granted" | "pending";

interface AccessItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: AccessStatus;
  link?: string;
  category: "Tool" | "Channel";
}

export default function ToolsAndChannelsAccess() {
  const accessItems: AccessItem[] = [
    {
      id: "github",
      name: "GitHub",
      description: "Source code repositories",
      icon: <GithubLogo size={22} />,
      status: "granted",
      link: "https://github.com",
      category: "Tool",
    },
    {
      id: "figma",
      name: "Figma",
      description: "Design system & product files",
      icon: <FigmaLogo size={22} />,
      status: "granted",
      link: "https://figma.com",
      category: "Tool",
    },
    {
      id: "slack",
      name: "Slack",
      description: "#engineering · #product · #announcements",
      icon: <SlackLogo size={22} />,
      status: "pending",
      category: "Channel",
    },
    {
      id: "teams",
      name: "Microsoft Teams",
      description: "Company-wide collaboration",
      icon: <MicrosoftTeamsLogo size={22} />,
      status: "granted",
      link: "https://teams.microsoft.com",
      category: "Channel",
    },
    {
      id: "intranet",
      name: "Company Intranet",
      description: "Internal tools & documentation",
      icon: <Globe size={22} />,
      status: "granted",
      link: "https://intranet.company.com",
      category: "Tool",
    },
  ];

  return (
    <div className="px-10 pb-10">
      <div className="border border-gray-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-extrabold uppercase text-gray-900">
            Tools & Channels Access
          </h2>
          <p className="text-sm text-gray-500">
            Software and communication channels you’ve been granted access to
          </p>
        </div>

        {["Tool", "Channel"].map((group) => (
          <div key={group} className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-gray-700">
              {group === "Tool" ? "Software Tools" : "Communication Channels"}
            </h3>

            <ul className="space-y-3">
              {accessItems
                .filter((item) => item.category === group)
                .map((item) => {
                  const isGranted = item.status === "granted";

                  return (
                    <li
                      key={item.id}
                      className={`group flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200 ease-out
                        ${
                          isGranted
                            ? "bg-white hover:-translate-y-[1px] hover:shadow-md"
                            : "bg-gray-50"
                        }`}
                    >
                      {/* Left */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-md transition
                            ${
                              isGranted
                                ? "bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white"
                                : "bg-gray-200 text-gray-500"
                            }`}
                        >
                          {item.icon}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="flex items-center gap-3">
                        {isGranted ? (
                          <>
                            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                              <CheckCircle size={14} weight="fill" />
                              Access granted
                            </span>

                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-medium text-gray-700 opacity-0 transition-all duration-200 ease-out
                                  group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-gray-50"
                              >
                                Open
                                <ArrowSquareOut size={14} />
                              </a>
                            )}
                          </>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-medium text-amber-600">
                            <Clock size={14} />
                            Pending access
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
