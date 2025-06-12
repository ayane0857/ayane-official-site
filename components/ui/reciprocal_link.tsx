import React from "react";

import { ExternalLink } from "lucide-react";

interface ReciprocalLinkProps {
  url: string;
  children: React.ReactNode;
}

export function ReciprocalLink({ url, children }: ReciprocalLinkProps) {
  return (
    <a
      href={url}
      className="group flex items-center justify-between p-3 rounded-lg text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <ExternalLink className="h-4 w-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:-translate-y-px group-hover:translate-x-px" />
    </a>
  );
}
