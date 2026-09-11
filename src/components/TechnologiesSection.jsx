import { use } from "react";

function TechnologiesSection({ technologiesPromise, stack }) {
  const technologies = use(technologiesPromise);

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 pb-20">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Explore the <span className="bg-brand bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      <p className="py-24 text-center text-slate-400">
        {technologies.length} technologies loaded - cards come in the next part.
      </p>
    </section>
  );
}

export default TechnologiesSection;