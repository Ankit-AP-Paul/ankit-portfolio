import EducationTimeline from "@/components/EducationTimeline";

export default function Education() {
  return (
    <div>
      <section className="relative w-full h-[40vh] md:h-[40vh] bg-dark flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          My <span className="text-yellow-400">Academic Journey</span>
        </h1>
        <p className="mt-4 text-gray-300 text-sm md:text-lg">
          Highlighting my education, subjects, GPA, and achievements.
        </p>

        <button className="mt-8 py-2 px-6 bg-yellow-400 text-dark font-bold rounded-lg hover:bg-yellow-300 transition duration-300">
          VIEW TIMELINE
        </button>
      </section>
      <EducationTimeline />
    </div>
  );
}
