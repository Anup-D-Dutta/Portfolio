import React from 'react';

const Home = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = 'ANUP CV.pdf'; // Replace with actual file path
        link.download = 'Anup_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="h-fit lg:px-28 md:px-1 py-18 flex flex-col md:flex-row text-white  border-white">
            <div className="container mx-auto p-4 lg:p-0 flex flex-wrap items-center">

                {/* Info */}
                <div className="w-full lg:flex-[0_0_60%]  border-white">
                    <h3 className="text-2xl my-9">
                        Hello, i'm{' '}

                    </h3>
                    <span
                        className="font-cursive text-5xl font-bold  text-skinColor"

                    >
                        Anup Dutta
                    </span>
                    <h3 className="text-3xl my-4">
                        {/* i'm a <span className="text-skinColor typing"></span> */}
                    </h3>
                    <p className="mb-16 text-lg">
                        I am a passionate developer with a keen interest in creating dynamic and user-friendly applications.
                        I enjoy solving complex problems and turning ideas into functional designs. My experience includes
                        working with modern technologies like React, Redux, and Material UI to build responsive web applications.
                        I also have experience in real-time systems, such as chat applications, and enjoy tackling challenges
                        like optimizing user experiences. I believe in continuous learning and improving my skills to deliver
                        high-quality work. In my free time, I explore new tools and techniques to stay updated with the latest
                        trends in technology.
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-col-2 sm:flex-row gap-4">
                        <button
                            onClick={downloadCV}
                            className="btn bg-red-500 hover:bg-red-600 px-6 py-2 rounded-3xl"
                        >
                            Hire Me
                        </button>
                        <a
                            href="#projects"
                            className="btn hire-me border border-red-500 rounded-3xl px-6 py-2 text-center"
                        >
                            View Projects
                        </a>
                    </div>
                    <div>
                        <div className="flex mt-15 gap-4">
                            <a
                                href="https://github.com/Anup-D-Dutta" // Replace with your GitHub
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg"
                                    alt="GitHub"
                                    className="w-8 h-8 invert"
                                />

                            </a>
                            <a
                                href="https://www.linkedin.com/in/anup-dutta-36b40230a/" // Replace with your LinkedIn
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                    alt="LinkedIn"
                                    className="w-8 h-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>


                {/* Image */}
                <div className="w-full lg:flex-[0_0_40%] md:w-[40%] flex items-center justify-center h-fit md:mt-8 px-4 md:px-0">
                    <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-[18rem] lg:h-[18rem] rounded-full border border-[#2a2a2a] text-red-500 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                        AD
                    </div>
                </div>


                {/* Optional Image */}
                {/* <div className="relative flex-[0_0_40%] max-w-[40%] p-4 text-center">
                    <img
                        src="img.jpg"
                        alt="Anup Dutta"
                        className="mx-auto rounded-lg w-[70%] h-full object-cover relative z-10"
                    />
                </div> */}
            </div>
        </section>
    );
};

export default Home;
