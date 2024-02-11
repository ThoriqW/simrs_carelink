import React from "react";
import Sidebar from "../../../components/Sidebar";

const ManageData = () => {
    return (
        <>
            <div className="flex bg-background">
                <Sidebar />
                <div className="px-10 py-10 w-full">
                    <h1 className="font-bold text-2xl">Manajemen Data</h1>
                    <div className="bg-white shadow-md rounded-md p-5 mt-10">
                        <h1 className="font-bold">Menu</h1>
                        <hr className="border-t-2 border-background my-2" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageData;