"use client"
import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "@heroicons/react/20/solid";

const ThemeSwitch = () => {
    const {systemTheme, theme, setTheme} = useTheme();

    const [mounted, setMounted] = useState<Boolean>(false);

    useEffect(() => {
        setMounted(true);
        document.documentElement.setAttribute("data-theme", theme!)
    }, [theme]);

    const changeTheme = () => {
        if (!mounted) {
            return null;
        }
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (<SunIcon className={"w-6 h-6 text-yellow-600"} role={"button"} onClick={() => setTheme("light")}/>)
        } else {
            return (<MoonIcon className={"w-6 h-6 text-gray-900"} role={"button"} onClick={() => setTheme("dark")}/>)
        }
    }
    return (
        <div className={"mx-2"}>
            {changeTheme()}
        </div>
    );
};

export default ThemeSwitch;