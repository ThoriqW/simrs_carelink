import React from "react";
import { NavLink } from "react-router-dom";
import registrasiIcon from "../../assets/icons/registrasi.svg"
import kasirIcon from "../../assets/icons/kasir.svg"
import rawarJalanIcon from "../../assets/icons/rawat-jalan.svg"
import rawatInapIcon from "../../assets/icons/rawat-inap.svg"
import igdIcon from "../../assets/icons/igd.svg"
import apotekIcon from "../../assets/icons/apotek.svg"

const MenuUser = () => {
    return (
        <>
            <div className="flex flex-col">
                <NavLink to="/registration"  className="flex px-10 py-4 hover:bg-hover transition-all items-center">
                    <img className="w-6 mr-2" src={registrasiIcon} alt="icon-link" />
                    <p className="font-bold" to="/">Registrasi</p>
                </NavLink>
                <NavLink to="/cashier" className="flex items-center px-10 py-4 hover:bg-hover transition-all">
                    <img className="w-6 mr-2" src={kasirIcon} alt="icon-link" />
                    <p className="font-bold" to="/">Kasir</p>
                </NavLink>
                <NavLink to="/outpatient" className="flex items-center px-10 py-4 hover:bg-hover transition-all">
                    <img className="w-6 mr-2" src={rawarJalanIcon} alt="icon-link" />
                    <p className="font-bold" to="/">Rawat Jalan</p>
                </NavLink>
                <NavLink to="/inpatient"  className="flex px-10 py-4 hover:bg-hover transition-all items-center">
                    <img className="w-6 mr-2" src={rawatInapIcon} alt="icon-link" />
                    <p className="font-bold" to="/">Rawat Inap</p>
                </NavLink>
                <NavLink to="/igd" className="flex items-center px-10 py-4 hover:bg-hover transition-all">
                    <img className="w-6 mr-2" src={igdIcon} alt="icon-link" />
                    <p className="font-bold" to="/">IGD</p>
                </NavLink>
                <NavLink to="/pharmacy" className="flex items-center px-10 py-4 hover:bg-hover transition-all">
                    <img className="w-6 mr-2" src={apotekIcon} alt="icon-link" />
                    <p className="font-bold" to="/">Apotik</p>
                </NavLink>
            </div>
        </>
    )
}

export default MenuUser;