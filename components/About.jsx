export default function About() {
    return (
    <div className=" px-5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-center">About Ideaflow</h2>
        
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-400 sm:text-2xl sm:leading-9">
              <p>
                “IdeaFlow stands at the forefront of innovation as the leading Intelligence Amplification Company, 
                dedicated to unleashing boundless human potential through cutting-edge technology and visionary solutions. 
                Our mission is to empower individuals and organizations by amplifying intelligence, 
                fostering creativity, and driving unprecedented advancements in the digital age.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="/assets/marty.webp"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">Marty Weiner</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-400">Ideaflow Advisor</div>
              </div>
            </figcaption>
          </figure>
        </div>
        </div>
    )
  }
  