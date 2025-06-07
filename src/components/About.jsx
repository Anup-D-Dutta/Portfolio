import React from 'react'

const about = () => {
    return (
        // <section className="py-16 bg-black text-white" id="about">
        //     <div className="container mx-auto px-4">
        //         <div className="mb-8">
        //             <h2 className="text-4xl font-bold text-center">About Me</h2>
        //         </div>

        //         <div className="mb-10">
        //             <p className="text-lg leading-7">
        //                 I am a Front-End developer and I can build your website as you want. I can
        //                 customize plugin & WordPress theme. I have a strong command of programming
        //                 languages like C, C++, Java, JavaScript, and Python. I am a Web Developer
        //                 with two years of experience skilled in HTML, CSS, JavaScript, and Node.js.
        //                 I have hands-on experience with databases like MongoDB for efficient data
        //                 storage and retrieval. I have knowledge of working with Open APIs. With a
        //                 constant thirst for knowledge, I actively participate in hackathons and
        //                 workshops to enhance my skills.
        //             </p>
        //         </div>

        //         <div className="grid md:grid-cols-2 gap-6 mb-10">
        //             <div className="space-y-3">
        //                 <p><strong>Birthday:</strong> <span>14 Feb 2005</span></p>
        //                 <p><strong>Age:</strong> <span>19</span></p>
        //                 <p><strong>Email:</strong> <span>siddhgupta777@gmail.com</span></p>
        //                 <p><strong>Degree:</strong> <span>BCA</span></p>
        //                 <p><strong>Phone:</strong> <span>+91 6205828954</span></p>
        //                 <p><strong>City:</strong> <span>Dhanbad</span></p>
        //                 <p><strong>Freelance:</strong> <span>Available</span></p>
        //             </div>
        //         </div>

        //         <div className="flex gap-4 mb-10">
        //             <a href="#" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">Download CV</a>
        //             <a href="#contact" className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white">Hire Me</a>
        //         </div>

        //         <div className="mb-10">
        //             <h3 className="text-2xl font-semibold mb-4">About My Skills</h3>

        //             <div className="mb-6">
        //                 <h4 className="text-xl font-semibold mb-2">Programming Languages</h4>
        //                 <div className="flex flex-wrap gap-4">
        //                     <img src="C.png" alt="C" className="h-10" />
        //                     <img src="C++.png" alt="C++" className="h-10" />
        //                     <img src="java.png" alt="Java" className="h-10" />
        //                     <img src="python.png" alt="Python" className="h-10" />
        //                     <img src="javascript.png" alt="JavaScript" className="h-10" />
        //                     <img src="sql.png" alt="SQL" className="h-10" />
        //                 </div>
        //             </div>

        //             <div>
        //                 <h4 className="text-xl font-semibold mb-2">Front-End</h4>
        //                 <div className="flex flex-wrap gap-4">
        //                     <img src="html.png" alt="HTML" className="h-10" />
        //                     <img src="css.png" alt="CSS" className="h-10" />
        //                     <img src="javascript.png" alt="JavaScript" className="h-10" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
         <section id="about" className="about section py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap">
          <div className="about-content w-full mt-[-4rem] max-w-full">
            {/* Skills Navbar */}
            <div className="skills-navbar">
              <div className="row mb-6">
                <div className="skill-section">
                  <h2 className="text-white text-3xl font-bold">Skills</h2>
                </div>
              </div>

              <div className="icons-container flex flex-wrap gap-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                  alt="C"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                  title="Java"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  className="h-12 w-12"
                />
              </div>
            </div>

            {/* You can add more about-content children here for personal-info, skills, timeline etc,
                converting them similarly using Tailwind classes. */}

          </div>
        </div>
      </div>
    </section>
    );
}

export default about
