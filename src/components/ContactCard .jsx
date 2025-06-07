import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactCard = () => {
    const contactDetails = [
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            info: "codewithanup@gmail.com",
            action: "Send Email",
            href: "mailto:codewithanup@gmail.com",
        },
        {
            icon: <FaPhoneAlt className="text-2xl" />,
            title: "Phone",
            info: "+91 6205828954",
            action: "Call Now",
            href: "tel:+916205828954",
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: "Location",
            info: "Jharkhand, India",
        },
    ];

    return (
        <div className="min-h-screen  text-white flex flex-col gap-6 items-center justify-center p-4">
            {contactDetails.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-center gap-4 bg-[#2a2a2a] p-6 rounded-xl shadow-md w-full max-w-lg"
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
    );
}

export default ContactCard 
