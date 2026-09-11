import { use } from "react";
import TechnologyCard from "./TechnologyCard";

function TechnologiesSection({ technologiesPromise, stack, onAdd }) {
  const technologies = use(technologiesPromise);

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 pb-20">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Explore the <span className="bg-brand bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:col-span-3">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isInStack={stack.some((item) => item.id === tech.id)}
              onAdd={onAdd}
            />
          ))}
        </div>

        <div className="lg:col-span-1"></div>
      </div>
    </section>
  );
}

export default TechnologiesSection;