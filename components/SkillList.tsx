"use client";

import { FocusCards } from "./ui/focus-cards";
import development from "../public/development.jpg";

export default function SkillList() {
  const cards = [
    {
      title: "Web and App Development",
      description: "Next.js MERN Flutter Django SQL Docker",
      src: "/development.jpg",
    },
    {
      title: "UI/UX Design",
      description: "Figma AdobeXD",
      src: "/design.jpg",
    },
    {
      title: "AI and Machine Learning",
      description: "Python Scikit-Learn TensorFlow OpenCV PyTorch",
      src: "/ai.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
