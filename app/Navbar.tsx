import React from 'react';
import Image from "next/image";
import ProfileImage from "@/public/profileImage.jpg";
import ThemeSwitch from "@/app/ui/ThemeSwitch";

const Navbar = () => {
    return (
        <div className="navbar shadow-md rounded-lg">
            <div className="navbar-start">
                <label htmlFor="sidebar-mobile-fixed"
                       className=" btn bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"/>
                    </svg>
                </label>
            </div>
            <div className="navbar-end">
                <ThemeSwitch/>
                <div className="avatar">
                    <div className="dropdown-container">
                        <div className="dropdown">
                            <label className="btn btn-ghost flex cursor-pointer px-0" tabIndex={0}>
                                <Image className={"h-5 w-5"}
                                       src={ProfileImage} alt="avatar"/>
                            </label>
                            <div className="dropdown-menu dropdown-menu-bottom-left">
                                <a className="dropdown-item text-sm">Profile</a>
                                <a tabIndex={-1} className="dropdown-item text-sm">Account settings</a>
                                <a tabIndex={-1} className="dropdown-item text-sm hover:text-red-500">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;