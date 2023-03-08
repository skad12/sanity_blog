function Banner() {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-5xl">SKAD's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome{" "}
          <span className="underline decoration-4 decoration-sky-500">
            {" "}
            Every Developers{" "}
          </span>
          favourite blog in the Devosphere
        </h2>
      </div>

      <p className="mt-5 text-gray-400 md:mt-2 max-w-s">
        New product features | The latest technology | the Weekly debugging
        nightmares & more!
      </p>
    </div>
  );
}

export default Banner;
