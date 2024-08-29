import React from "react";
import Sidebar from "./Sidebar";

type Props = Readonly<{
    children: React.ReactNode;
}>;

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <Sidebar />
            {children}
        </div>
    );
};

export default DashboardLayout;
