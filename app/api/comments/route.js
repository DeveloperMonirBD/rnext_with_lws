import comments from "@/app/data/comments";

// GET /api/comments
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    let filteredComments;

    if (query) {
        filteredComments = comments.filter(comment => comment.text.toLowerCase().includes(query.toLowerCase()));
        return Response.json(filteredComments);
    }

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