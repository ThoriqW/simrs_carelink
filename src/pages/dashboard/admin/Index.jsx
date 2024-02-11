import React from "react";
import Sidebar from "../../../components/Sidebar";
import settingIcon from "../../../assets/icons/administration.svg"

const Admin = () => {
    return (
        <> 
            <div className="flex bg-background">
                <Sidebar />
                <div className="px-10 py-10 w-full">
                    <h1 className="font-bold text-2xl">Selamat Datang, <span className="text-button">Admin</span></h1>
                    <div className="flex justify-center mt-10 mb-10">
                        <div className="flex items-center">
                            <img className="w-6 mr-2" src={settingIcon} alt="setting-icon" />
                            <h1 className="text-2xl font-bold">Manajemen</h1>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-5">
                        <h1 className="font-bold">Dokter</h1>
                        <hr className="border-t-2 border-background my-2" />
                    </div>
                    <div className="flex flex-row gap-4 mt-10">
                        <div className="flex-auto bg-white shadow-md rounded-md p-5">
                            <h1 className="font-bold">Petugas</h1>
                        <hr className="border-t-2 border-background my-2" />
                        </div>
                        <div className="flex-auto bg-white shadow-md rounded-md p-5">
                            <h1 className="font-bold">Perawat</h1>
                        <hr className="border-t-2 border-background my-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;