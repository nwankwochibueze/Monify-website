import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center pt-16 pb-16">
      <div className="flex flex-row justify-between items-center w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-4">
            <span className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">Privacy Policy</span>
          </div>
          <p className="text-sm text-slate-500">© 2025 Ocean Reform</p>
        </div>
        <div className="flex flex-row space-x-4 text-slate-600">
          <FaFacebookF className="hover:text-slate-900 cursor-pointer transition-colors" />
          <FaTwitter className="hover:text-slate-900 cursor-pointer transition-colors" />
          <FaLinkedinIn className="hover:text-slate-900 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
