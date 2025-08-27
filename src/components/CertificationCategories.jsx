import React from "react";
import { FaClipboardList, FaCheckCircle, FaRegListAlt, FaWrench, FaRegStar } from "react-icons/fa";

const certifications = [
    {
        id: 1,
        category: "Construction Standards",
        title: "NASC",
        sub: "National Access and Scaffolding Confederation",
        description: "Leading trade association for the access and scaffolding industry, ensuring safety and professional standards.",
        icon: <FaClipboardList className="h-8 w-8 text-blue-500" />,
    },
    {
        id: 2,
        category: "Safety & Health",
        title: "CHAS",
        sub: "Contractors Health and Safety Assessment Scheme",
        description: "Health and safety pre-qualification scheme for contractors, demonstrating compliance with health and safety standards.",
        icon: <FaCheckCircle className="h-8 w-8 text-blue-500" />,
    },
    {
        id: 3,
        category: "Quality Management",
        title: "SMAS",
        sub: "Safety Management Advisory Services",
        description: "Health and safety assessment scheme providing assurance of contractor competence and compliance.",
        icon: <FaRegListAlt className="h-8 w-8 text-blue-500" />,
    },
    {
        id: 4,
        category: "Professional Standards",
        title: "Builders Profile",
        sub: "Builders Profile Certification",
        description: "Verified contractor profile ensuring financial stability and professional competence.",
        icon: <FaRegStar className="h-8 w-8 text-blue-500" />,
    },
    {
        id: 5,
        category: "Industry Registration",
        title: "Construction Line",
        sub: "Construction Line Registration",
        description: "Pre-qualification service for construction contractors, ensuring compliance and capability.",
        icon: <FaWrench className="h-8 w-8 text-blue-500" />,
    },
    {
        id: 6,
        category: "Quality Assurance",
        title: "ISO 9001",
        sub: "ISO 9001:2015 Quality Management",
        description: "International standard for quality management systems, ensuring consistent service delivery.",
        icon: <FaWrench className="h-8 w-8 text-blue-500" />,
    },
];

const CertificationCategories = () => {
    return (
        <section className="py-12 px-6 bg-gray-50">
            <div className="container mx-auto text-black text-center">
                <h2 className="text-3xl font-semibold mb-4">Certification Categories</h2>
                <div className="flex justify-center space-x-5 mb-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Construction Standards</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Safety & Health</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Quality Management</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Professional Standards</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Industry Registration</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Quality Assurance</button>
                </div>
            </div>
            <div className="container mx-auto text-center max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((certification) => (
                        <div
                            key={certification.id}
                            className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-xl hover:z-60 transition-all duration-300 relative"
                        >
                            <div className="flex">
                                <div className="bg-blue-100 p-3 rounded-full mb-4">{certification.icon}</div>
                                <div className="mt-3 ml-2 "><p className="text-sm text-gray-500 bg-gray-200 p-1 rounded-lg">{certification.category}</p></div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>

                            <p className="text-gray-700">{certification.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationCategories;
