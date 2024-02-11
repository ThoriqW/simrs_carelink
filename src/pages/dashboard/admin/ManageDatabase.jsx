import React from "react";
import Sidebar from "../../../components/Sidebar";

const ManageDatabase = () => {
    return (
        <>
            <div className="flex bg-background">
                <Sidebar />
                <div className="px-10 py-10 w-full">
                    <h1 className="font-bold text-2xl">Manajemen Database</h1>
                    <div className="bg-white shadow-md rounded-md p-5 mt-10">
                        <a className="w-full bg-button flex p-3 text-white rounded-md mb-10 cursor-pointer">
                            <div className="flex justify-between w-full">
                                <p className="font-bold">Backup Database</p>
                                <a className="font-thin italic cursor-pointer">Klik disini untuk panduan backup</a>
                            </div>
                        </a>
                        <a className="w-full bg-button flex p-3 text-white rounded-md mb-10 cursor-pointer">
                            <div className="flex justify-between w-full">
                                <p className="font-bold">Restore Database</p>
                                <a className="font-thin italic cursor-pointer">Klik disini untuk panduan backup</a>
                            </div>
                        </a>
                        <a className="w-full bg-button flex p-3 text-white rounded-md cursor-pointer">
                            <div className="flex justify-between w-full">
                                <p className="font-bold">Import Database</p>
                                <a className="font-thin italic cursor-pointer">Klik disini untuk panduan backup</a>
                            </div>
                        </a>
                        <input className="mt-5" type="file" name="import-database" id="import-database" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageDatabase;