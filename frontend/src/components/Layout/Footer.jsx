import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#4F7441] text-white">
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div style={{ filter: "brightness(0) invert(1)" }}>
          <h1 className="text-[35px] font-[600]">MediReach</h1>
        </div>

        <p className="mt-5">
        Natural Ayurvedic raw materials for your wellness
        </p>

        <div className="flex items-center mt-5">
          <AiFillFacebook size={25} className="cursor-pointer" />
          <AiFillInstagram size={25} className="ml-5 cursor-pointer" />
          <AiFillYoutube size={25} className="ml-5 cursor-pointer" />
        </div>
      </div>

      <div className="text-center pt-1 text-gray-400 text-sm pb-8">
        <span>© 2024 MediReach. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
