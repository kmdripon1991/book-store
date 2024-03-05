import React from "react";

const About = () => {
  return (
    <div className="my-container">
      <div className="md:mx-auto max-w-lg lg:max-w-2xl text-center">
        <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:mx-auto ">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="70326c9b-4a0f-429b-9c76-792941e326d5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">A</span>
          </span>{" "}
          {""}
          reader lives a thousands lives before he dies
        </h2>
        <p className="text-center text-base text-gray-700 md:text-lg">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 lg:gap-16 my-16 ">
        <div>
          <div>
            <h2 className="text-xl font-semibold">
              Books are a uniquely portable magic.
            </h2>
            <p className="my-5 text-gray-700">
              Space, the final frontier. These are the voyages of the Starship
              Enterprise. Its five-year mission: to explore strange new worlds.
            </p>
            <p className="mb-5 text-gray-700">
              Many say exploration is part of our destiny, but it’s actually our
              duty to future generations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              The first mate and his Skipper too will do?
            </h2>
            <p className="my-5 text-gray-700">
              Well, the way they make shows is, they make one show. That show's
              called a pilot.
            </p>
            <p className="mb-5 text-gray-700">
              Then they show that show to the people who make shows, and on the
              strength of that one show they decide if they're going to make
              more shows. Some pilots get picked and become television
              programs.Some don't, become nothing. She starred in one of the
              ones that became nothing.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Is the Space Pope reptilian!?
            </h2>
            <p className="my-5 text-gray-700">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear. I didn't even know we were calling him Big
              Bear.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-semibold">
              How much money you got on you?
            </h2>
            <p className="my-5 text-gray-700">
              The first mate and his Skipper too will do their very best to make
              the others comfortable in their tropic island nest.
            </p>
            <p className="mb-5 text-gray-700">
              Michael Knight a young loner on a crusade to champion the cause of
              the innocent. The helpless. The powerless in a world of criminals
              who operate above the law. Here he comes Here comes Speed Racer.
              He's a demon on wheels.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Galaxies Orion's sword globular star cluster?
            </h2>
            <p className="my-5 text-gray-700">
              A business big enough that it could be listed on the NASDAQ goes
              belly up. Disappears!
            </p>
            <p className="mb-5 text-gray-700">
              It ceases to exist without me. No, you clearly don't know who
              you're talking to, so let me clue you in.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              When has justice ever been as simple as a rule book?
            </h2>
            <p className="my-5 text-gray-700">
              This is not about revenge. This is about justice. A lot of things
              can change in twelve years, Admiral. Well, that's certainly good
              to know. About four years. I got tired of hearing how young I
              looked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
