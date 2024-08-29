import React from 'react';
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const ContactButton = () => {
    return (
        <div className="flex justify-center items-center -mt-2">
            <div className="rounded-full p-1">
                <div className="bg-blue-700 text-white flex items-center justify-center px-4 lg:px-6 py-2 rounded-full shadow-lg">
                    <LiaPhoneVolumeSolid className="text-yellow-300 animate-pulse my-1 text-2xl" />
                    <span className="hidden lg:flex font-semibold text-lg pl-2">+91-8884110075</span>
                </div>
            </div>
        </div>
    );
};

export default ContactButton;
