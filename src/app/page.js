import Link from "next/link";
import image from "next/image"
import AboutPage from "../components/AboutPage"
import ProjectPage from "../components/ProjectPage"
import SkillPage from "../components/SkillPage"
import ContactPage from "../components/ContactPage"

export default function Home() {
  return (
    <>
    <section className="flex flex-col md:flex-row justify-between items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-center items-center w-full md:w-1/2 p-8">
        <img
          className="w-full md:max-w-lg h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="/Untitled.png"
          alt="Maryam Irshad"
        />
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 p-12 flex flex-col justify-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          MARYAM IRSHAD
        </h1>

        <div className="w-16 h-1 bg-gray-900 dark:bg-white my-4"></div>

        <p className="text-xl text-gray-500 dark:text-gray-300">
          Creative <span className="font-semibold">Developer</span>
        </p>

        <a
          href="#project"
          className="mt-8 px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-sm hover:bg-gray-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
    <AboutPage />
    <ProjectPage />
    <SkillPage />
    <ContactPage />
    </>
  );
}
