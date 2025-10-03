import { headers, cookies } from "next/headers";

export async function GET(request) {
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    // Using the headers() function to get the headers in a server component. Next.js specific.
    const headerList = headers();
    console.log(headerList.get('Authorization'));
    
    console.log(request.cookies.get('theme'));

    cookies().set("page", "2");
    console.log(cookies().get('page'));

    return new Response('Profile API', {
        headers: {
            "Set-Cookie": "theme=dark"
        }
    });
}
