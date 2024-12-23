import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex" key={index}>
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#f8f8f8] font-bold border border-white rounded-full flex items-center justify-center px-4 py-1"
                  : "text-[#e0e0e0] font-normal 800px:text-[#e0e0e0]"
              } pb-[30px] 800px:pb-0 px-6 cursor-pointer`}
              style={{
                transition: "all 0.8s ease-in-out", // Smooth transition
                height: "40px", // Consistent height
                lineHeight: "1.5", // Adjust text line height
              }}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
