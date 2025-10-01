import Link from 'next/link';
import React from 'react';

const Folder1 = () => {
    return (
        <div className="p-20">
            <h1>Folder 1</h1>
            <Link href="/folder1/folder2" className="text-blue-400">
                Folder 2
            </Link>
        </div>
    );
};

export default Folder1;