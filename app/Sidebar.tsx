import React from 'react';
import Link from "next/link";
import {HomeIcon, ShoppingBagIcon, UserIcon, UsersIcon} from "@heroicons/react/24/outline";
import NextjsLogo from '@/public/next.svg'
import Image from "next/image";

const sidebarLinks = [
    {name: "Home", icon: <HomeIcon className={"h-5 w-5 dark:text-gray-300"}/>, href: "/"},
    {name: "Customers", icon: <UsersIcon className={"h-5 w-5 dark:text-gray-300"}/>, href: "/customers"},
    {name: "Products", icon: <ShoppingBagIcon className={"h-5 w-5 dark:text-gray-300"}/>, href: "/products"},
]

const Sidebar = () => {
    return (
        <div className="sm:w-full sm:max-w-[18rem]">
            <input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state"/>
            <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
            <aside
                className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
                <section className="sidebar-title items-center p-4">
                    <Image className={"h-12 w-16 px-2"} src={NextjsLogo} alt={"next.js logo"}/>
                    {/*<div className="flex flex-col">*/}
                    {/*    <span>E-commerce</span>*/}
                    {/*    <span className="text-xs font-normal text-content2">Next.js 14</span>*/}
                    {/*</div>*/}
                </section>
                <section className="sidebar-content">
                    <nav className="menu rounded-md">
                        <section className="menu-section px-4">
                            <span className="menu-title">Main menu</span>
                            <ul className="menu-items">
                                {
                                    sidebarLinks.map(link => <Link key={link.name} className={"menu-item"}
                                                                   href={link.href}>
                                        <li className={"flex gap-2"}>
                                            {link.icon}
                                            <span>
                                            {link.name}
                                            </span>
                                        </li>
                                    </Link>)
                                }
                                <li>
                                    <input type="checkbox" id="menu-1" className="menu-toggle"/>
                                    <label className="menu-item justify-between" htmlFor="menu-1">
                                        <div className="flex gap-2">
                                            <UserIcon className={"h-5 w-5 dark:text-gray-300"}/>
                                            <span>Account</span>
                                        </div>

                                        <span className="menu-icon">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                             fill="currentColor">
											<path fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
										</svg>
									</span>
                                    </label>

                                    <div className="menu-item-collapse">
                                        <div className="min-h-0">
                                            <label className="menu-item menu-item-disabled ml-6">Change
                                                Email</label>
                                            <label className="menu-item ml-6">Profile</label>
                                            <label className="menu-item ml-6">Change Password</label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </nav>
                </section>
                <section className="sidebar-footer justify-end bg-gray-2 pt-2">

                </section>
            </aside>
        </div>
    );
};

export default Sidebar;