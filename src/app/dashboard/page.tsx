"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdCheck, MdDelete, MdEdit } from "react-icons/md";
import { FaMinusSquare } from "react-icons/fa";

const fakeProjects: any[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: "Sisyphus",
    domainUrl: "Sisyphus.com",
    lastAssessed: "22 Jan 2022",
    licenseUse: "Active",
    checked: false,
}));

const Dashboard = () => {
    const [projects, setProjects] = useState<any[]>(fakeProjects);

    const isCheckAll =
        projects.filter((item) => item.checked).length === projects.length;

    function handleProjectChecked(e: any, projectId: string) {
        console.log("data:", e.target.checked);
        setProjects(
            projects.map((item) => {
                if (item.id === projectId) {
                    return {
                        ...item,
                        checked: e.target.checked,
                    };
                }
                return item;
            })
        );
    }

    function handleCheckAll() {
        setProjects(
            projects.map((item) => {
                return {
                    ...item,
                    checked: !isCheckAll,
                };
            })
        );
    }

    return (
        <div className="w-full">
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center p-4 bg-[#0D0F10]">
                    <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
                        <BiSearch className="text-xl text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search anything"
                            className="bg-gray-700 text-white ml-2 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaBell className="text-xl text-gray-400" />
                        <FaUserCircle className="text-2xl text-gray-400" />
                    </div>
                </div>

                <main className="p-4 bg-[#0D0F10]">
                    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-[#0D0F10] rounded-lg">
                            <thead>
                                <tr className="bg-gray-700">
                                    <th className="px-4 py-2 text-left">
                                        <div className={`flex items-center`}>
                                            <FaMinusSquare
                                                className={`${
                                                    isCheckAll
                                                        ? "text-[#46E8A5]"
                                                        : "text-gray-400"
                                                }`}
                                                onClick={handleCheckAll}
                                            />
                                            <span className="ml-2">
                                                Project
                                            </span>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        Last assessed
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        License use
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((proj, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-700"
                                    >
                                        <td className="flex items-center px-4 py-2">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only"
                                                    onChange={(e) =>
                                                        handleProjectChecked(
                                                            e,
                                                            proj.id
                                                        )
                                                    }
                                                />
                                                <div
                                                    className={`w-6 h-6 rounded-md flex items-center justify-center ${
                                                        proj.checked
                                                            ? "bg-green-300"
                                                            : "bg-gray-700"
                                                    }`}
                                                >
                                                    {proj.checked && (
                                                        <MdCheck className="text-black text-lg" />
                                                    )}
                                                </div>
                                            </label>
                                            <div className="ml-4">
                                                <p className="font-semibold">
                                                    Sisyphus
                                                </p>
                                                <p className="text-sm text-gray-400">
                                                    sisyphus.com
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            22 Jan 2022
                                        </td>
                                        <td className="px-4 py-2">
                                            <span className="bg-[#46E8A5] text-white text-sm font-semibold px-2 py-0.5 rounded-lg mr-2">
                                                Active
                                            </span>
                                            <span className="bg-[#FFD666] text-white text-sm font-semibold px-2 py-0.5 rounded-lg mr-2">
                                                Customer data
                                            </span>
                                            <span className="bg-[#FFAC82] text-white text-sm font-semibold px-2 py-0.5 rounded-lg">
                                                Admin
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 flex space-x-2">
                                            <button>
                                                <MdEdit className="text-gray-400 hover:text-green-500" />
                                            </button>
                                            <button>
                                                <MdDelete className="text-gray-400 hover:text-red-500" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                            Previous
                        </button>
                        <span>Page 1 of 10</span>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                            Next
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
