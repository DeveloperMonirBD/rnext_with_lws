import { NextResponse } from 'next/server';

export function middleware(request, event) {
    //    if(request.url.includes('dashboard')) return NextResponse.redirect(new URL('/dashboard', request.url))
    //     return NextResponse.next();
    // return NextResponse.rewrite(new URL('/', request.url));

    event.waitUntil(
        setTimeout(() => {
            console.log('Done!');
        }, 3000)
    );
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    // matcher: ['/dashboard', '/about']
    matcher: ["/"]
};
