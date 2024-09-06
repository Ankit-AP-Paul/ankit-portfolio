import { ProjectList } from "@/components/ProjectList";

export default function Projects() {
  return (
    <div className="pb-20">
      <section className="relative w-full h-[40vh] md:h-[40vh] bg-dark flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Discover My{" "}
          <span className="text-purple-700"> Personal Projects</span>
        </h1>
        <p className="mt-4 text-gray-300 text-sm md:text-lg">
          A collection of projects that showcase my skills, creativity, and
          passion for new technology.
        </p>

        <button className="mt-8 py-2 px-6 bg-purple-700 text-dark font-bold rounded-lg hover:bg-purple-900 transition duration-300">
          EXPLORE PROJECTS
        </button>
      </section>
      <ProjectList />
    </div>
  );
}
