"use client";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <section
      id="project"
      className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 mb-8"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Explore Pakistan
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ExplorePakistan is a fully functional web application tailored for foreign travelers to Pakistan. It uses Node.js and Java for backend, JavaScript for frontend, and Firebase as its database.
          </p>
          <div className="mb-2">
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              React
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              Java
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              Springboot
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              Firebase
            </span>
          </div>
          <a
            href="https://github.com/maryamirshad04/ExplorePakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Click here
          </a>
        </div>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Peak Saver
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            PeakSaver is a C++ desktop application built with .NET WinForms to help users monitor and optimize household electricity usage based on district-specific peak hours. It generates personalized energy schedules, estimates bills, and provides a secure, user-friendly dashboard for smart energy planning.
          </p>
          <div className="mb-2">
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              Gimp
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              Sql
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              C++
            </span>
          </div>
          <a
            href="https://github.com/maryamirshad04/Peak-Saver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Click here
          </a>
        </div>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            AVWM
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            AVWM is a React web application for food ordering and reservations. It features full SQL database management to handle user data, orders, and booking efficiently.
          </p>
          <div className="mb-2">
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              React
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              Node.js
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              JavaScript
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200">
              Sql
            </span>
          </div>
          <a
            href="https://github.com/maryamirshad04/AVWM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Click here
          </a>
        </div>
      </div>
    </section>
  );
}
