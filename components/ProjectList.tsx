"use client";

import { Tabs } from "./ui/tabs";

export function ProjectList() {
  const tabs = [
    {
      title: "Web",
      value: "web",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web Dev Projects</p>
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
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
