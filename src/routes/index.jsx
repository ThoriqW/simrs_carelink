import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/dashboard/admin/Index";
import ManageAccount from "../pages/dashboard/admin/ManageAccount";
import ManageData from "../pages/dashboard/admin/ManageData";
import ManageDatabase from "../pages/dashboard/admin/ManageDatabase";

const Root = () => {
    return (
        <>
            <Routes>
                {/* Admin */}
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/admin/account" element={<ManageAccount />}></Route>
                <Route path="/admin/data" element={<ManageData />}></Route>
                <Route path="/admin/database" element={<ManageDatabase />}></Route>
            </Routes>
        </>
    )
}

export default Root;