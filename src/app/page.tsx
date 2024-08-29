"use client";

import backgroundImage from "@/assets/background-img.png";
import InputWithIcons from "@/components/InputWithIcons";
import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

export default function Page() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen flex">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-900 p-8">
                <div className="w-full flex flex-col items-center">
                    <div>
                        <h1 className="text-3xl font-semibold text-white mb-4">
                            Hello,{" "}
                            <span className="text-blue-400">
                                Digital Fortress
                            </span>
                        </h1>
                        <p className="text-gray-400 mb-6">
                            Log in to platform to start creating magic.{" "}
                        </p>
                    </div>

                    <form className="w-full max-w-sm">
                        <div className="mb-4">
                            <InputWithIcons
                                inputProps={{
                                    type: "email",
                                    id: "email",
                                    className:
                                        "w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
                                    placeholder:
                                        "candidate.digitalfortress@gmail.com",
                                }}
                                LeftIcon={MdOutlineMail}
                                labelProps={{
                                    className: "block text-gray-400 mb-2",
                                    htmlFor: "email",
                                }}
                                labelText="Email"
                            />
                        </div>
                        <div className="mb-4">
                            <InputWithIcons
                                inputProps={{
                                    type: "password",
                                    id: "password",
                                    className:
                                        "w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
                                    placeholder: "Your password",
                                }}
                                LeftIcon={CiLock}
                                labelProps={{
                                    className: "block text-gray-400 mb-2",
                                    htmlFor: "password",
                                }}
                                labelText="Password"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-gray-400">
                                <input
                                    type="checkbox"
                                    className="form-checkbox bg-gray-700 text-blue-400 rounded"
                                />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <a href="#" className="text-[#B6F09C]">
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-[#B6F09C] text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                            onClick={handleLogin}
                        >
                            Log in
                        </button>
                    </form>
                    <p className="text-gray-400 mt-6 ">
                        Don’t have an account?{" "}
                        <a href="#" className="text-[#B6F09C]">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>

            <div
                className="hidden md:flex w-1/2 items-center justify-center bg-gray-800 p-8"
                style={{
                    backgroundImage: `url(${backgroundImage.src})`,
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                {/* <Image src={backgroundImage} alt="" className="absolute" /> */}
                <div className="text-center text-white max-w-md">
                    <p className="text-lg">
                        Digital Fortress has been a game-changer for our content
                        creation process.
                    </p>
                    <p className="text-gray-400 mt-4">
                        The AI-powered tools are incredibly user-friendly and
                        have saved us countless hours of work.
                    </p>
                    <p className="text-sm text-gray-500 mt-6">Lily Alisson</p>
                    <p className="text-sm text-gray-500">
                        CMO at Digital Fortress
                    </p>
                </div>
            </div>
        </div>
    );
}
