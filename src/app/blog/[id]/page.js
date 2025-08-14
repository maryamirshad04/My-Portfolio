import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

export default async function BlogView({ params }) {
  try {
    const { id } = await params;
    
    const client = await clientPromise;
    const db = client.db("blogDB");

    if (!ObjectId.isValid(id)) {
      return <p className="text-center mt-10">Invalid blog ID</p>;
    }

    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return <p className="text-center mt-10">Blog not found</p>;
    }

    blog._id = blog._id.toString();

    return (
      <div className="w-full mx-auto py-10 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto py-10 px-4 bg-gray-50 dark:bg-gray-900">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="mx-auto w-full max-h-[500px] object-cover rounded-lg shadow-md mb-6"
            />
          )}

          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 break-words">
            {blog.title}
          </h1>

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

          <div className="prose max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {blog.content}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return <p className="text-center mt-10">Error loading blog</p>;
  }
}