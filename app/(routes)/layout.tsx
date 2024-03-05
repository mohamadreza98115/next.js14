import React, {PropsWithChildren} from 'react';
import Sidebar from "@/app/Sidebar";
import Navbar from "@/app/Navbar";

const Layout = ({children}: PropsWithChildren) => {
    return (
        <div className="flex flex-row">

            <Sidebar/>

            <div className="flex w-full flex-col">
                <Navbar/>
                <div className="">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default Layout;