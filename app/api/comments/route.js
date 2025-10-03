import comments from "@/app/data/comments";

// GET /api/comments
export async function GET() {
    return Response.json(comments);
}

// POST /api/comments
export async function POST(request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    }
    comments.push(newComment);
    // return Response.json(newComment, { status: 201 });
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-type": "application/json",
        },
        status: 201,
    })
}