// import React from 'react'

// const Skills = () => {
//     const skills = [
//         {
//             name: 'C',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
//         },
//         {
//             name: 'Java',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
//         },
//         {
//             name: 'HTML5',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
//         },
//         {
//             name: 'CSS3',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
//         },
//         {
//             name: 'JavaScript',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//         },
//         {
//             name: 'React',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//         },
//         {
//             name: 'MongoDB',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
//         },
//         {
//             name: 'Node.js',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
//         },
//         {
//             name: 'Git',
//             url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
//         },
//     ];
//     return (
//         <section id="about" className=" text-white  border-white">
//             <div className="max-w-5xl mx-auto px-4">
//                 <div className="text-center mb-16 py-12 relative">
//                     <h2 className="text-4xl font-bold inline-block relative text-red-500">
//                        Technical Skills
//                         <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-1 bg-red-500" />
//                     </h2>
//                 </div>

//                 <div className="flex flex-wrap justify-center gap-8 px-6">
//                     {skills.map((skill) => (
//                         <img
//                             key={skill.name}
//                             src={skill.url}
//                             alt={skill.name}
//                             title={skill.name}
//                             className="w-12 h-12 transition-transform duration-300 hover:scale-110"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Skills


import React from 'react'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 90 },
                { name: 'Js', level: 75 },
                { name: 'React.js', level: 70 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 80 },
            ],
        },
        {
            title: 'Database',
            skills: [
                { name: 'MongoDB', level: 80 },
                { name: 'MySQL', level: 60 },
            ],
        },
        {
            title: 'DevOps',
            skills: [
                { name: 'Vercel', level: 85 },
                { name: 'GitHub', level: 60 },
                { name: 'Render', level: 60 },

            ],
        },
    ];

    return (
        <section id="skills" className=" text-white lg:mt-37 px-4 border-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-red-500 relative inline-block">
                        Technology Stack
                        {/* <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-12 h-1 bg-red-500" /> */}

                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  border-white gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="bg-[#2a2a2a] p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 h-2 rounded-full">
                                        <div
                                            className="bg-red-500 h-2 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
