/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Programs from "./Programs";

const ProgramSection: React.FC = () => {
    return (
        <div
            className=" container mx-auto about-wrapper "
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="bg-white" >
                <div className="container nx-auto p-4 py-12">
                    <h2 className="text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase"> Management</h2>
                    <h3 className="text-center mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Management of Health products</h3>
                    <Programs />
                </div>
            </div>
        </div>
    );
};

export default ProgramSection;
