"use client";

import React from "react";
import { TbMessages } from "react-icons/tb";
import SidebarBtn from "./SidebarBtn";
import { CiLogout } from "react-icons/ci";
import { GrRobot } from "react-icons/gr";
import { logout } from "@/app/api/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function Sidebar() {
  const router = useRouter();
  const [active, setActive] = React.useState("All");

  const handleAllClick = () => {
    setActive("All");
    console.log("All clicked");
  };

  const handleBotClick = () => {
    setActive("Bot");
    console.log("Bot clicked");
  };

  const handleLogoutClick = () => {
    logout();
    Cookies.remove("username");
    router.push("/");
  };

  const mainButtons = [
    {
      title: "All",
      icon: <TbMessages />,
      onClick: handleAllClick,
    },
    {
      title: "Bot",
      icon: <GrRobot />,
      onClick: handleBotClick,
    },
  ];

  return (
    <div className="bg-black w-[18rem] h-screen flex flex-col justify-between">
      <div className="flex flex-col space-y-10 items-center pt-5">
        {mainButtons.map((btn, index) => (
          <div
            key={index}
            onClick={btn.onClick}
            className={`pl-4 flex items-center w-[12rem] h-[4rem] text-base cursor-pointer rounded-3xl
              ${active === btn.title
                ? "bg-yellow-200 text-black"
                : "text-gray-400 "}`}
          >
            <SidebarBtn title={btn.title} icon={btn.icon} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center pb-5">
        <div
          onClick={handleLogoutClick}
          className="pl-4 flex items-center w-[12rem] h-[4rem] text-gray-400 text-base hover:bg-red-400 cursor-pointer rounded-3xl hover:text-white"
        >
          <SidebarBtn title="Logout" icon={<CiLogout />} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
