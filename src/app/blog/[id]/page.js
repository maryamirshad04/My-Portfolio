export default async function BlogView({ params }) {
  // Detect the correct base URL
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}` // Production on Vercel
      : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Local dev

  // Fetch the blog post
  const res = await fetch(`${baseUrl}/api/blog/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p className="text-center mt-10">Blog not found</p>;
  }

  const blog = await res.json();

  return (
    <div className="w-full mx-auto py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-10 px-4 bg-gray-50 dark:bg-gray-900">
        {/* Blog Image */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="mx-auto w-full max-h-[500px] object-cover rounded-lg shadow-md mb-6"
          />
        )}

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 break-words">
          {blog.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span className="mr-4">
            By <span className="font-medium">{blog.author || "Unknown"}</span>
          </span>
          <span>
            {blog.date
              ? new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No date available"}
          </span>
        </div>

        {/* Content */}
        <div className="prose max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
