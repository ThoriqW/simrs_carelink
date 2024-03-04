import React from "react";
import { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import Admin from "./menu/Admin";
import logoCareLink from "../assets/images/logo/logo-care-link.png"
import settingIcon from "../assets/icons/setting.svg"

const Sidebar = () => {

    const [menuActive, setMenuActive] = useState();
    const user = "Admin"

    useEffect(() => {
        user === "Admin" ? setMenuActive(Admin) : setMenuActive(Admin);
    }, [])

    return (
        <>
            <aside className="h-screen sticky top-0 min-w-72 shadow-xl bg-white">
                <div className="flex justify-center py-10">
                    <img className="w-[100px]" src={logoCareLink} alt="logo-care-link" />
                </div>
                <div className="overflow-y-auto h-[80%]">
                    {menuActive}
                </div>
                <div className="absolute bottom-0 left-0 flex justify-center items-center w-full py-4 text-white bg-button">
                    <img className="w-6 mr-2" src={settingIcon} alt="icon-user" />
                    <Link className="font-bold">Setting</Link>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;