import React from "react";
import { NavLink } from "react-router-dom";
import linkIcon from "../../assets/icons/link.svg"
import accountIcon from "../../assets/icons/account.svg"
import databaseIcon from "../../assets/icons/database.svg"

const Setting = () => {

    return (
        <>
            <div className="flex flex-col">
                <NavLink to="/admin/account"  className="flex px-10 py-4 hover:bg-hover transition-all items-center">
                    <img className="w-8 mr-2" src={accountIcon} alt="icon-link" />
                    <p className="font-bold" to="/">Akun</p>
                </NavLink>
                <NavLink to="/admin/data" className="flex items-center px-10 py-4 hover:bg-hover transition-all">
                    <img className="w-8 mr-2" src={linkIcon} alt="icon-link" />
                    <p className="font-bold" to="/">Referensi</p>
                </NavLink>
                <NavLink to="/admin/database" className="flex items-center px-10 py-4 hover:bg-hover transition-all">
                    <img className="w-8 mr-2" src={databaseIcon} alt="icon-link" />
                    <p className="font-bold" to="/">Database</p>
                </NavLink>
            </div>
        </>
    )
}


export default Setting;