"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  codeLink,
  projectLink,
}: {
  title: string;
  description: string;
  image: string;
  codeLink: string;
  projectLink: string;
}): React.JSX.Element {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="800"
            width="800"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-16">
          <CardItem
            translateZ={20}
            as={Link}
            href={codeLink}
            target="__blank"
            className="px-3 py-2 rounded-xl text-xs font-normal dark:text-white">
            Get Code
          </CardItem>
          <CardItem
            translateZ={20}
            href={projectLink}
            as={Link}
            className="px-3 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Visit Project
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
