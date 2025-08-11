import Link from "next/link";

export default function Home() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Me</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 mb-8"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a passionate web developer and designer currently pursuing Software Engineering at FAST-NUCES, with a flair for crafting creative, responsive, and immersive digital experiences. Skilled in a wide range of technologies, I merge technical precision with a keen design eye. I enjoy translating ideas into interactive, user-friendly frontends that leave a lasting impression. 
          </p> 
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently interning at Pursue Today, I continue to grow through hands-on experience and collaboration, building projects that balance practicality with creativity. Outside of code, I channel my imagination into painting, sketching, and reading, often writing in my free time, hobbies that keep my storytelling and design instincts sharp. My vision is to specialize in UI/UX design and animation, crafting digital experiences that are as intuitive as they are beautiful.
          </p>
        </div>

        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Education</h5>

          <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <div className="mb-10 relative">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-4 top-1.5"></div>
              <p className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-md inline-block mb-1 dark:bg-gray-700 dark:text-white">
                2023 - Present
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                FAST-NUCES
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bachelor of Science in Software Engineering
              </p>
            </div>

            <div className="mb-10 relative">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-4 top-1.5"></div>
              <p className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-md inline-block mb-1 dark:bg-gray-700 dark:text-white">
                2020 - 2022
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Divisional Public School and College
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                FSc Pre-Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
