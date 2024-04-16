import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    }
  };

  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full px-10">
        <div>
          <div className="pt-10">
            <img
              className="w-28"
              src="https://www.shopelitepromo.com/content/v/vspfiles/assets/images/flexfit-logo.png"
              alt=""
            />
          </div>
          <div className="mt-10 flex flex-col">
            {menu.map((item, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(item.title)}
                className="flex flex-row items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={`${
                    activeTab === item.title ? "font-semibold" : ""
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline />
          <p className="ml-5">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
