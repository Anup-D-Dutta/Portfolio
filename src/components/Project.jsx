import React from 'react'

import chat from '../assets/chat.png'
import Ecommerce from '../assets/E-commerce.png'
import gemini from '../assets/gemini.png'
import LiveDemoCodeBtn from './LiveDemoCodeBtn';

const projects = [
    {
        title: "TalkSynk",
        image: chat,
        description:
            "Real-time chat application built with React and Material UI, enabling seamless communication with features like instant messaging, real-time updates, and notification management using Redux Toolkit.",
        tech: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        ],
        liveDemo: "https://chat-app-frontend-git-master-anup-duttas-projects.vercel.app/login",
        code: "https://github.com/Anup-D-Dutta"


    },
    {
        title: "Trendora",
        image: Ecommerce,
        description:
            "Trendora is a eCommerce web application built with React and Tailwind CSS. features like product filtering, secure checkout, and user authentication. Designed for performance and responsiveness, Trendora integrates Redux Toolkit for efficient state management and provides admin tools for product management and order tracking.",
        tech: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            //   "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg"
        ],
        liveDemo: "https://e-commerce-frontend-3ce3z0mbu-anup-duttas-projects.vercel.app/",
        code: "https://github.com/Anup-D-Dutta"
    },
    {
        title: "Gemini",
        image: gemini,
        description:
            "An AI-powered chatbot built with React and Gemini API, capable of generating intelligent responses, assisting with tasks, and engaging in natural language conversations in real-time. Designed with an intuitive UI and responsive layout.",
        tech: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        ],
        liveDemo: "https://geminiii.netlify.app/",
        // code: "https://github.com/yourusername/trendora"
    },

];
const Project = () => {
    return (
        <section id="projects" className=" py-24 border-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* <h2 className="text-5xl font-bold mb-10 text-center text-red-700">Featured Projects</h2> */}
                {/* <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-1 bg-red-700" /> */}
                <div className="text-center mb-16 py-12 relative">
                    <h2 className="text-4xl font-bold inline-block relative text-red-500">
                        Featured Projects
                        {/* <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-1 bg-red-500" /> */}
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col h-full border bg-[#2a2a2a] p-6 border-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300 ease-in-out transition-transform">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-contain"
                            />
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-4 text-justify">{project.description}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {project.tech.map((tech, i) => (
                                        <img
                                            key={i}
                                            src={tech}
                                            alt="tech icon"
                                            className="w-6 h-6"
                                            title="Technology used"
                                        />
                                    ))}
                                </div>
                            </div>
                            <LiveDemoCodeBtn liveDemo={project.liveDemo} code={project.code} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project
