import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  const activeColor = "#4F7441"; // Green color for active state
  const inactiveColor = "#555"; // Default color

  return (
    <div className="w-full h-[90vh] bg-[#F5F5F5] shadow-md overflow-y-scroll sticky top-0 left-0 z-10">
      {/* Single item */}
      {[
        { to: "/dashboard", icon: <RxDashboard />, label: "Dashboard", id: 1 },
        {
          to: "/dashboard-orders",
          icon: <FiShoppingBag />,
          label: "All Orders",
          id: 2,
        },
        {
          to: "/dashboard-products",
          icon: <FiPackage />,
          label: "All Products",
          id: 3,
        },
        {
          to: "/dashboard-create-product",
          icon: <AiOutlineGift />,
          label: "Create Product",
          id: 4,
        },
        {
          to: "/dashboard-events",
          icon: <MdOutlineLocalOffer />,
          label: "All Events",
          id: 5,
        },
        {
          to: "/dashboard-create-event",
          icon: <VscNewFile />,
          label: "Create Event",
          id: 6,
        },
        {
          to: "/dashboard-withdraw-money",
          icon: <CiMoneyBill />,
          label: "Withdraw Money",
          id: 7,
        },
        {
          to: "/dashboard-messages",
          icon: <BiMessageSquareDetail />,
          label: "Shop Inbox",
          id: 8,
        },
        {
          to: "/dashboard-coupouns",
          icon: <AiOutlineGift />,
          label: "Discount Codes",
          id: 9,
        },
        {
          to: "/dashboard-refunds",
          icon: <HiOutlineReceiptRefund />,
          label: "Refunds",
          id: 10,
        },
        { to: "/settings", icon: <CiSettings />, label: "Settings", id: 11 },
      ].map((item) => (
        <div className="w-full flex items-center p-4" key={item.id}>
          <Link to={item.to} className="w-full flex items-center">
            {React.cloneElement(item.icon, {
              size: 30,
              color: active === item.id ? activeColor : inactiveColor,
            })}
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[500] ${
                active === item.id
                  ? `text-[${activeColor}]`
                  : `text-[${inactiveColor}]`
              } transition-colors duration-300`}
            >
              {item.label}
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DashboardSideBar;
