function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-xl font-bold">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {count === 0
          ? "No technologies selected yet."
          : count + " Technology" + (count === 1 ? "" : "s") + " Selected"}
      </p>

      {count === 0 ? (
        <div className="mt-4 rounded-xl border-2 border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-3">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <img src={tech.icon} alt={tech.name + " logo"} className="w-8 h-8" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech)}
                  className="rounded-md p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-red-200 bg-white py-2 text-sm font-bold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}

export default StackSidebar;