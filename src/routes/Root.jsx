import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/dashboard/Admin";

const Root = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Admin />}></Route>
                <Route path="/rawat-jalan" element={<Admin />}></Route>
            </Routes>
        </>
    )
}

export default Root;