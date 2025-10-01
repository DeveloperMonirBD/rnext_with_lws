import Link from "next/link";

const NotificationPage = async () => {

    return (
        <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex gap-5 items-center justify-center">
            <span>ALL NOTIFICATIONS</span>
            <div>
                <Link href="/parallel-dashboard/seen" className="text-blue-400">SEEN</Link>
            </div>
        </div>
    );
};

export default NotificationPage;
