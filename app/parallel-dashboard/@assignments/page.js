import wait from '@/lib/wait';

const AssignmentPage = async () => {
    await wait(1000);
    throw new Error('Failed to load assignments');

    return <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">ASSIGNMENTS</div>;
};

export default AssignmentPage;
