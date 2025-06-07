const LiveDemoCodeBtn = ({ liveDemo, code }) => {
    return (
        <div className="flex flex-col-2 sm:flex-row gap-4 mt-4">
            <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer btn bg-red-500 hover:bg-red-600 px-3 text-white py-1 rounded-2xl w-fit h-fit text-md"
            >
                Live Demo
            </a>
            <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn hire-me border border-red-500 hover:bg-red-500 text-white rounded-3xl px-3 py-1 text-center"
            >
                Code
            </a>
        </div>
    );
};

export default LiveDemoCodeBtn;
