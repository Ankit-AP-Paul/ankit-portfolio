"use client";

import { FocusCards } from "./ui/focus-cards";
import development from "../public/development.jpg";

export default function SkillList() {
  const cards = [
    {
      title: "Web and App Development",
      src: "/development.jpg",
    },
    {
      title: "UI/UX Design",
      src: "/design.jpg",
    },
    {
      title: "AI and Machine Learning",
      src: "/ai.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
