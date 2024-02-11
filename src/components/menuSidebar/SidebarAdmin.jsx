import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/link.svg"
import accountIcon from "../../assets/icons/account.svg"
import databaseIcon from "../../assets/icons/database.svg"

const Sidebar = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <div className="mb-4 flex">
                        <img className="w-6 mr-2" src={accountIcon} alt="icon-link" />
                        <Link className="font-bold" to="/">Akun</Link>
                    </div>
                    <div className="mb-4 flex">
                        <img className="w-6 mr-2" src={linkIcon} alt="icon-link" />
                        <Link className="font-bold" to="/">Referensi</Link>
                    </div>
                    <div className="mb-4 flex">
                        <img className="w-6 mr-2" src={databaseIcon} alt="icon-link" />
                        <Link className="font-bold" to="/">Database</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Sidebar;