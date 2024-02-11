import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarAdmin from "./menuSidebar/SidebarAdmin"
import logoCareLink from "../assets/images/logo/logo-care-link.png"

const Sidebar = () => {

    const [menuActive, setMenuActive] = useState();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/"){
            setMenuActive(SidebarAdmin)
        }
    }, [])

    return (
        <>
            <aside className="h-screen sticky top-0 min-w-72 shadow-xl bg-white p-5">
                <div className="flex justify-center mb-20">
                    <img className="w-[100px]" src={logoCareLink} alt="logo-care-link" />
                </div>
                {menuActive}
            </aside>
        </>
    )
}

export default Sidebar;