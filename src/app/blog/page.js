"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"; 

export default function BlogListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = Number(searchParams.get("page")) || 1; 
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage); 
  const [totalPages, setTotalPages] = useState(1);
  const [firstLoad, setFirstLoad] = useState(true);

  const fetchBlogs = async (page) => {
    const res = await fetch(`/api/blog?page=${page}&limit=2`, { cache: "no-store" });
    const data = await res.json();
    setBlogs(data.blogs || []);
    setTotalPages(data.totalPages || 1);
    setFirstLoad(false);
  };

  useEffect(() => {
    fetchBlogs(currentPage);
    router.replace(`/blog?page=${currentPage}`); 
  }, [currentPage]); 

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full mx-auto py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Blog</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 mb-8"></div>
      </div>

      {!firstLoad && blogs.length > 0 && (
        <div className="flex flex-col gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
            >
              <Link href={`/blog/${blog._id}`} className="sm:w-1/3">
                <img
                  className="p-4 w-full h-80 object-cover"
                  src={blog.image}
                  alt={blog.title}
                />
              </Link>

              <div className="p-5 flex flex-col sm:w-2/3 space-y-3">
                <Link href={`/blog/${blog._id}`}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                  </h5>
                </Link>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {blog.summary}
                </p>
                <Link
                  href={`/blog/${blog._id.toString()}`}
                  className="inline-flex items-center w-fit px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {!firstLoad && blogs.length === 0 && <p>No blogs yet.</p>}

      <div className="mt-6 flex justify-center items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
