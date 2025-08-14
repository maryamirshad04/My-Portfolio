export default async function BlogView({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${params.id}`,
    { cache: "no-store" }
  );
  const blog = await res.json();

  if (blog.error) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <div className="w-full mx-auto py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Blog Image */}
        {blog.image && (
          <div className="flex justify-center mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-w-2xl h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 break-words text-center">
          {blog.title}
        </h1>

        {/* Author & Date */}
        <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>
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
