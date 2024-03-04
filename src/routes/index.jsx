import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Admin from "../pages/dashboard/admin/Index";
import ManageAccount from "../pages/dashboard/admin/ManageAccount";
import ManageData from "../pages/dashboard/admin/ManageData";
import ManageDatabase from "../pages/dashboard/admin/ManageDatabase";
import Outpatient from "../pages/dashboard/admin/Outpatient";

const Root = () => {
  return (
    <>
      <Routes>
        {/* Admin */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/account" element={<ManageAccount />}></Route>
        <Route path="/admin/data" element={<ManageData />}></Route>
        <Route path="/admin/database" element={<ManageDatabase />}></Route>
        <Route path="/admin/outpatient" element={<Outpatient />}></Route>
      </Routes>
    </>
  );
};

export default Root;
