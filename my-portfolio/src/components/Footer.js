import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Maryam Irshad
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Navigation
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">About</Link>
                </li>
                <li className="mb-4">
                  <Link href="/project" className="hover:underline">Projects</Link>
                </li>
                <li className="mb-4">
                  <Link href="/skills" className="hover:underline">Skills</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/maryamirshad04" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/maryam-irshad-a72333374/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Maryam Irshad
            </Link>. All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/maryamirshad04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 
                     0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169
                     a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6
                     a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823
                     c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9
                     A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623
                     s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0
                     c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623
                     a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889
                     a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72
                     0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/maryam-irshad-a72333374?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
                         2.76 2.24 5 5 5h14c2.76 0 5-2.24 
                         5-5v-14c0-2.76-2.24-5-5-5zm-11 
                         19h-3v-10h3v10zm-1.5-11.27c-.97 
                         0-1.75-.79-1.75-1.76s.78-1.76 
                         1.75-1.76 1.75.79 1.75 
                         1.76-.78 1.76-1.75 1.76zm13.5 
                         11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                         0-2.15 1.46-2.15 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 
                         1.38-1.54 2.84-1.54 3.04 0 3.6 
                         2 3.6 4.6v5.6z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
