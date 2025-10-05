import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
    title: 'PhotoFeed',
    description: 'A Photo Feed App built with Next.js'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth" background="bg-white">
            <body className="font-roboto bg-white text-black dark:bg-black dark:text-white">
                <Navbar />
                <div className="container my-4 lg:my-8 mx-auto">{children}</div>
            </body>
        </html>
    );
}
