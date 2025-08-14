import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("blogDB");
    const blog = await db.collection("blogs").findOne({ _id: new ObjectId(params.id) });

    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch blog" }), { status: 500 });
  }
}
