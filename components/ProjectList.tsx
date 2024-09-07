"use client";

import ProjectCard from "./ProjectCards";
import { Tabs } from "./ui/tabs";

export function ProjectList() {
  const tabs = [
    {
      title: "Web",
      value: "web",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web Dev Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Ankit's Portfolio"
              description="My personal portfolio website"
              image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              codeLink="https://x.com/mannupaaji"
              projectLink="https://x.com/mannupaaji"
            />
            <ProjectCard
              title="Axon"
              description="Decentralized AI training powered by resource-driven computing and secure data sharing."
              image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              codeLink="https://x.com/mannupaaji"
              projectLink="https://x.com/mannupaaji"
            />
            <ProjectCard
              title="The Urban Spoon"
              description="Restaurant Finder and Reservation App"
              image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              codeLink="https://x.com/mannupaaji"
              projectLink="https://x.com/mannupaaji"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Flutter",
      value: "flutter",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Flutter Projects</p>
        </div>
      ),
    },
    {
      title: "Python",
      value: "python",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Python Projects</p>
        </div>
      ),
    },
    {
      title: "Java",
      value: "java",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Java Projects</p>
        </div>
      ),
    },
    {
      title: "Misc",
      value: "misc",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Other</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[84rem] md:h-[70rem] lg:h-[42rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
