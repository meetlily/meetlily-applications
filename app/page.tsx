export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="mt-8 text-3xl tracking-tight font-extrabold text-white sm:mt-8 sm:text-4xl lg:mt-6 xl:text-5xl">
            <span className="block">Building the Future</span>
            <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
              AI and ML Development
            </span>
          </h1>
          <p className="text-base text-gray-300 sm:text-sm lg:text-md xl:text-lg">
            Leverage the power of artificial intelligence and machine learning
            to unlock valuable insights and drive intelligent decision-making in
            your business processes.
          </p>
        </div>
        <div className="flex gap-4"></div>
      </section>
    </>
  )
}
