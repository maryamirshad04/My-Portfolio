import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET(req, context) {
  try {
    const { params } = await context; 
    const client = await clientPromise;
    const db = client.db("blogDB");

    if (!ObjectId.isValid(params.id)) {
      return new Response(
        JSON.stringify({ error: "Invalid blog ID" }),
        { status: 400 }
      );
    }

    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(params.id) });

    if (!blog) {
      return new Response(
        JSON.stringify({ error: "Blog not found" }),
        { status: 404 }
      );
    }

    blog._id = blog._id.toString();

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch blog" }),
      { status: 500 }
    );
  }
}
