import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'


const Contact = () => {

    const contactDetails = [
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: 'Email',
            info: 'codewithanup@gmail.com',
            action: 'Send Email',
            href: 'mailto:codewithanup@gmail.com',
        },
        {
            icon: <FaPhoneAlt className="text-2xl" />,
            title: 'Phone',
            info: '+91 6205828954',
            action: 'Call Now',
            href: 'tel:+916205828954',
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: 'Location',
            info: 'Jharkhand, India',
        },
    ]
    return (
        <div id="contact" className='lg:px-28 px-5  border-white'>
            <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-2">Contact Me</h2>
                    <p className="text-sm md:text-base py-3 text-gray-300">HAVE YOU ANY QUERY?</p>
                </div>

            <div className='flex flex-wrap py-10 gap-6 text-white  border-white'>
                {/* Left side */}
                <div className=' border-white w-full lg:flex-[0_0_58%]'>
                    <div className="flex flex-col gap-6">
                        {contactDetails.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 bg-[#2a2a2a] p-6 rounded-xl shadow-md"
                            >
                                <div className="bg-red-500 p-4 rounded-lg text-black">
                                    {item.icon}
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg">{item.title}</h2>
                                    <p className="text-gray-300">{item.info}</p>
                                    {item.href && (
                                        <a
                                            href={item.href}
                                            className="text-red-500 hover:underline text-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.action}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Right side */}
                <div className=' border-white w-full lg:flex-[0_0_40%]  md:w-[40%]'>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="bg-[#2a2a2a] p-6 sm:p-8 rounded-xl shadow-md"
                    >
                        <input
                            type="hidden"
                            name="access_key"
                            value="56a1dc94-393b-4544-bfb0-3ac99d24f164"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full rounded-full px-6 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full rounded-full px-6 py-3 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="5"
                                className="w-full rounded-3xl px-6 py-4 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                                required
                            ></textarea>
                        </div>

                        <div className="text-center mt-6">
                            <button
                                type="submit"
                                className="bg-red-500 text-black font-semibold py-3 px-10 rounded-full hover:bg-red-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
