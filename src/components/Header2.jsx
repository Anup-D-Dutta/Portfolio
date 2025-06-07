import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';


const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    return (
        <div className="font-sans block lg:hidden">
            <div className="logo-n flex items-center justify-between fixed top-0 left-0 p-4 bg-[#1d1d1d] shadow w-full z-10  border-white">
                {/* Left - Logo */}
                <div className="sm:px-8 md:px-4 lg:px-24">
                    <a href="#" className="text-red-500 text-2xl font-bold">
                        MERN Developer
                    </a>
                </div>


                <div className="md:hidden pr-4 z-30">
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Transition */}
            <div
                className={`md:hidden fixed top-16 left-0 w-full bg-[#1d1d1d] flex flex-col items-center py-4 space-y-4 z-10 border-t border-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
                    }`}
            >
                <a href="#about" onClick={closeMenu} className="text-white hover:text-red-500 transition">About</a>
                <a href="#skills" onClick={closeMenu} className="text-white hover:text-red-500 transition">Skills</a>
                <a href="#projects" onClick={closeMenu} className="text-white hover:text-red-500 transition">Projects</a>
                <a href="#contact" onClick={closeMenu} className="text-white hover:text-red-500 transition">Contact</a>
            </div>
        </div>
    );
}

export default Header2
