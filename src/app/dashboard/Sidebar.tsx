"use client";

import { useState } from "react";
import {
    MdAssignment,
    MdDashboard,
    MdOutlineCalendarMonth,
} from "react-icons/md";
import { RiExpandRightFill } from "react-icons/ri";
import { RiExpandLeftFill } from "react-icons/ri";

type Props = {};

const Sidebar = (props: Props) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    function handleSidebarExpanded() {
        setIsSidebarExpanded((currentState) => !currentState);
    }

    return (
        <div
            className={`${
                isSidebarExpanded ? "w-64" : "w-20"
            } bg-[##0D0F10] p-4`}
        >
            <div className="flex justify-between items-center mb-4">
                <div
                    className={`text-lg font-bold text-pink-500 mb-8 mt-[9px] ${
                        !isSidebarExpanded && "hidden"
                    }`}
                >
                    Digital Fortress
                </div>
                <button
                    onClick={handleSidebarExpanded}
                    className="self-start bg-slate-800 p-2"
                >
                    {isSidebarExpanded ? (
                        <RiExpandLeftFill className="text-[28px] bg-red" />
                    ) : (
                        <RiExpandRightFill className="text-[28px] bg-red" />
                    )}
                </button>
            </div>
            <ul>
                <li className="mb-4">
                    <a
                        href="#"
                        className="flex items-center p-2 bg-[#B6F09C] rounded-lg text-gray-900 font-bold"
                    >
                        <MdDashboard className="text-2xl" />
                        <span
                            className={`ml-4 ${!isSidebarExpanded && "hidden"}`}
                        >
                            Dashboard
                        </span>
                    </a>
                </li>
                <li className="mb-4">
                    <a
                        href="#"
                        className="flex items-center p-2 text-gray-400 hover:bg-gray-700 rounded-lg"
                    >
                        <MdAssignment className="text-2xl" />
                        <span
                            className={`ml-4 ${!isSidebarExpanded && "hidden"}`}
                        >
                            Task
                        </span>
                    </a>
                </li>
                <li className="mb-4">
                    <a
                        href="#"
                        className="flex items-center p-2 text-gray-400 hover:bg-gray-700 rounded-lg"
                    >
                        <MdDashboard className="text-2xl" />
                        <span
                            className={`ml-4 ${!isSidebarExpanded && "hidden"}`}
                        >
                            Projects
                        </span>
                    </a>
                </li>
                <li className="mb-4 flex justify-between items-center relative">
                    <a
                        href="#"
                        className="flex items-center p-2 text-gray-400 hover:bg-gray-700 rounded-lg"
                    >
                        <MdOutlineCalendarMonth className="text-2xl" />
                        <span
                            className={`ml-4 ${!isSidebarExpanded && "hidden"}`}
                        >
                            Schedule
                        </span>
                    </a>
                    <span
                        className={`bg-[#B6F09C] text-gray-900 text-sm font-semibold px-2 py-0.5 rounded-full ${
                            !isSidebarExpanded &&
                            "absolute -right-[2px] -bottom-[2px]"
                        }`}
                    >
                        2
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
