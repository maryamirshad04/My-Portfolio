import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; 
const client = new MongoClient(uri);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 2;
    const skip = (page - 1) * limit;

    await client.connect();
    const database = client.db("blogDB");
    const blogsCollection = database.collection("blogs");

    const blogs = await blogsCollection.find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalBlogs = await blogsCollection.countDocuments();

    return new Response(JSON.stringify({
      blogs,
      totalPages: Math.ceil(totalBlogs / limit),
      currentPage: page
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await client.close();
  }
}
