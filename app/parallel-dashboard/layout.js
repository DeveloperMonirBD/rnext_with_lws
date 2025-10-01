import React from 'react';

const ParallelDashboardLayout = ({ children, assignments, notifications, quiz }) => {
    
    const isLoggedIn = true;

    // if (!isLoggedIn) {
    //     return <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">Please log in to view the dashboard.</div>;
    // }

    return (
        <>
            {children}
            <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
                {isLoggedIn &&  assignments}
                {notifications}
                {quiz}
            </div>
        </>
    );
};

export default ParallelDashboardLayout;