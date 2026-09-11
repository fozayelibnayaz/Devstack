const categoryColors = {
  Frontend: "bg-sky-50",
  Backend: "bg-lime-50",
  Database: "bg-blue-50",
  Language: "bg-amber-50",
  Styling: "bg-cyan-50",
  DevOps: "bg-indigo-50",
  Tools: "bg-slate-100",
};

const badgeColors = {
  Popular: "bg-sky-100 text-sky-700",
  Versatile: "bg-emerald-100 text-emerald-700",
  Fast: "bg-orange-100 text-orange-700",
  "SSR / Edge": "bg-violet-100 text-violet-700",
  Standard: "bg-green-100 text-green-700",
  "Top SQL": "bg-blue-100 text-blue-700",
  Cache: "bg-red-100 text-red-600",
  Ubiquitous: "bg-amber-100 text-amber-700",
  Essential: "bg-sky-100 text-sky-700",
  Robust: "bg-indigo-100 text-indigo-700",
  Modern: "bg-cyan-100 text-cyan-700",
  Containers: "bg-blue-100 text-blue-700",
};

function TechnologyCard({ tech, isInStack, onAdd }) {
  const tile = categoryColors[tech.category] || "bg-slate-100";
  const badge = badgeColors[tech.badge] || "bg-slate-100 text-slate-600";

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${tile}`}>
          <img src={tech.icon} alt={tech.name + " logo"} className="w-7 h-7" />
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${badge}`}>{tech.badge}</span>
      </div>

      <h3 className="mt-4 text-xl font-bold">{tech.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{tech.description}</p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-slate-400">{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-semibold text-amber-500">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isInStack}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
          isInStack
            ? "cursor-not-allowed border border-emerald-200 bg-emerald-50 text-emerald-600"
            : "bg-slate-900 text-white hover:bg-slate-700"
        }`}
      >
        {isInStack ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;