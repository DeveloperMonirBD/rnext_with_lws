import wait from '@/lib/wait';

const QuizPage = async () => {
    await wait(2000);

    return <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">QUIZ</div>;
};

export default QuizPage;
