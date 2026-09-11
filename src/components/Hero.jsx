import bannerStack from "../../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4">
      <div className="grid gap-10 items-center py-16 md:grid-cols-2 md:py-24">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="bg-brand bg-clip-text text-transparent">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto md:mx-0 text-slate-500 md:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side,
            and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#technologies"
              className="rounded-lg bg-brand-btn px-6 py-3 text-center text-sm font-semibold text-white shadow-md hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#technologies"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={bannerStack}
            alt="Layers of a development stack"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;