"use client";

import { IconCode, IconWorldWww } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { BriefcaseBusiness, GraduationCap, House } from "lucide-react";

export default function BottomNav() {
  const links = [
    {
      title: "Home",
      href: "/",
      icon: (
        <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Education",
      href: "/education",
      icon: (
        <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },

    {
      title: "Skills & Experience",
      href: "/skills",
      icon: (
        <BriefcaseBusiness className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Projects",
      href: "/projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Contats",
      href: "/contacts",
      icon: (
        <IconWorldWww className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];
  return (
    <div className="flex items-center justify-center fixed bottom-0 w-full">
      <FloatingDock items={links} />
    </div>
  );
}
