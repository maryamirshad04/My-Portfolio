"use client";
import Link from "next/link";

export default function ProjectPage() { return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 mb-8"></div>
      </div>
      <div className="w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
  <div className="text-center mb-6">
    <h5 className="text-2xl font-bold text-gray-900 dark:text-white">Technical and Soft Skills Overview</h5>
  </div>
  <div className="grid grid-cols-2 gap-4 text-center">
    <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-4">
      <dt className="text-blue-600 dark:text-blue-300 text-lg font-semibold">Frontend</dt>
      <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">JavaScript, React, Next Js</dd>
    </div>
    <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-4">
      <dt className="text-green-600 dark:text-green-300 text-lg font-semibold">Backend</dt>
      <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">Node.js, Express, MongoDB, Sql, Springboot</dd>
    </div>
    <div className="bg-yellow-50 dark:bg-gray-700 rounded-lg p-4">
      <dt className="text-yellow-600 dark:text-yellow-300 text-lg font-semibold">Tools</dt>
      <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">GitHub, VSCode, Figma, Gimp</dd>
    </div>
    <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-4">
      <dt className="text-purple-600 dark:text-purple-300 text-lg font-semibold">Logistics</dt>
      <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">DSA, Logical Thinking</dd>
    </div>
    <div className="bg-pink-50 dark:bg-gray-700 rounded-lg p-4 col-span-2">
      <dt className="text-pink-600 dark:text-pink-300 text-lg font-semibold">Communication</dt>
      <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">Teamwork, Public Speaking</dd>
    </div>
  </div>
</div>
      </section>
  )}