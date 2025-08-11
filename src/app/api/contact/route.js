import clientPromise from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("first"); 

    const collection = db.collection("messages");
    await collection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Message stored successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("MongoDB insert error:", error);
    return new Response(JSON.stringify({ error: "Failed to store message" }), {
      status: 500,
    });
  }
}
