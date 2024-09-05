"use client";

import { Timeline } from "./ui/timeline";

export default function EducationTimeline() {
  const data = [
    {
      title: "Present",
      content: (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            B. Tech. in Computer Science Engineering
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Academy of Technology, Hooghly
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mt-2">
            GPA: <span className="font-bold">9.5/10</span>
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mt-2 grid grid-cols-2 gap-2">
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Data Structure and Algorithms
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Compiler Design
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Computer Networks
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Operating Systems
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Machine Learning
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Software Engineering
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="max-w-7xl mx-auto  px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Higher Secondary
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Methodist School Dankuni
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mt-2">
            Percentage: <span className="font-bold">96.75</span>
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mt-2 grid grid-cols-2 gap-2">
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Mathematics
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Physics
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Chemistry
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Computer Science
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              English
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="max-w-7xl mx-auto  px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Secondary
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Methodist School Dankuni
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mt-2">
            Percentage: <span className="font-bold">97.8</span>
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mt-2 grid grid-cols-2 gap-2">
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Science
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Mathematics
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Computer Applications
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              English
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
              Humanities
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
