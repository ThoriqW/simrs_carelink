import React from "react";
import Sidebar from "../../../components/Sidebar";

const ManageAccount = () => {
    return (
        <>
            <div className="flex bg-background">
                <Sidebar />
                <div className="px-10 py-10 w-full">
                    <h1 className="font-bold text-2xl">Manajemen Akun</h1>
                    <div className="flex justify-center mt-10 mb-10">
                        <button className="py-2 px-6 bg-button text-white rounded-md">Tambah Akun</button>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-5">
                        <h1 className="font-bold">User</h1>
                        <hr className="border-t-2 border-background my-2" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageAccount;