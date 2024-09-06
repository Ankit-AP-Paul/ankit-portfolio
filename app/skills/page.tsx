import SkillList from "@/components/SkillList";

export default function Skills() {
  return (
    <div className="pb-20">
      <section className="relative w-full h-[40vh] md:h-[40vh] bg-dark flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Unique Ideas For{" "}
          <span className="text-purple-700">Your Business.</span>
        </h1>
        <p className="mt-4 text-gray-300 text-sm md:text-lg">
          I focus on helping your brand grow and move forward.
        </p>

        <button className="mt-8 py-2 px-6 bg-purple-700 text-dark font-bold rounded-lg hover:bg-purple-900 transition duration-300">
          WHAT I DO?
        </button>
      </section>
      <SkillList />
    </div>
  );
}
