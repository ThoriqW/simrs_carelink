import React from "react";
import { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "./menu/MenuAdmin";
import MenuUser from "./menu/MenuUser";
import logoCareLink from "../assets/images/logo/logo-care-link.png"
import accountIcon from "../assets/icons/account.svg"

const Sidebar = () => {

    const [menuActive, setMenuActive] = useState();
    const user = "Admin"

    useEffect(() => {
        user === "Admin" ? setMenuActive(MenuAdmin) : setMenuActive(MenuUser);
    }, [])

    return (
        <>
            <aside className="h-screen sticky top-0 min-w-72 shadow-xl bg-white">
                <div className="flex justify-center py-10 mb-10">
                    <img className="w-[100px]" src={logoCareLink} alt="logo-care-link" />
                </div>
                {menuActive}
                <div className="absolute bottom-0 left-0 flex justify-center items-center w-full py-4 text-white bg-button">
                    <img className="w-6 mr-2" src={accountIcon} alt="icon-user" />
                    <Link className="font-bold">User</Link>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;