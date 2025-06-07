import React, { useState, useEffect } from 'react';
import { FaHome, FaTools, FaBriefcase, FaComments } from 'react-icons/fa';

const NavBar = () => {
    const [active, setActive] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['#home', '#about', '#projects', '#contact'];
            const offsets = sections.map((id) => {
                const el = document.querySelector(id);
                return {
                    id,
                    offset: el ? el.offsetTop : 0,
                };
            });

            const scrollPos = window.scrollY + window.innerHeight / 2;
            const current = offsets.reverse().find(({ offset }) => scrollPos >= offset);
            if (current) setActive(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: '#home', icon: <FaHome />, title: 'Home' },
        { id: '#about', icon: <FaTools />, title: 'Skills' },
        { id: '#projects', icon: <FaBriefcase />, title: 'Projects' },
        { id: '#contact', icon: <FaComments />, title: 'Contact' },
    ];

    return (
        <div className="fixed top-1/2 left-5 transform -translate-y-1/2 bg-neutral-900 rounded-full p-2 shadow-md z-[1000] flex flex-col items-center gap-2">
            {navItems.map(({ id, icon, title }) => (
                <a
                    key={id}
                    href={id}
                    title={title}
                    className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 text-white text-xl ${active === id ? 'bg-orange-600' : 'hover:bg-white/10'
                        }`}
                    onClick={() => setActive(id)}
                >
                    {icon}
                </a>
            ))}
        </div>
    )
}

export default NavBar
