import React from "react";
import closeIcon from "../assets/icons/close.svg";

const AddAccount = ({ toggleButton }) => {
  return (
    <>
      <div className="add-account shadow-xl hidden rounded-md fixed inset-0 justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded-md">
          <h1 className="font-bold text-2xl my-5 text-center">Tambah Akun</h1>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-md font-medium mb-2" htmlFor="name">
                Nama Lengkap
              </label>
              <input
                className="py-2 px-4 rounded-md bg-background w-full"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label className="text-md font-medium mb-2" htmlFor="account">
                  Nama Akun
                </label>
                <input
                  className="py-2 px-4 rounded-md bg-background"
                  type="text"
                  name="account"
                  id="account"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-md font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="py-2 px-4 rounded-md bg-background"
                  type="text"
                  name="password"
                  id="password"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label className="text-md font-medium mb-2" htmlFor="peran">
                  Peran
                </label>
                <select
                  className="py-2 px-4 rounded-md bg-background"
                  type="text"
                  name="peran"
                  id="peran"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-md font-medium mb-2" htmlFor="bidang">
                  Bidang
                </label>
                <select
                  className="py-2 px-4 rounded-md bg-background"
                  type="text"
                  name="bidang"
                  id="bidang"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label className="text-md font-medium mb-2" htmlFor="poliklinik">
                  Poliklinik
                </label>
                <select
                  className="py-2 px-4 rounded-md bg-background"
                  type="text"
                  name="peran"
                  id="peran"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-md font-medium mb-2" htmlFor="status">
                  Status
                </label>
                <select
                  className="py-2 px-4 rounded-md bg-background"
                  type="text"
                  name="status"
                  id="status"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-10">
              <button className="py-2 px-6 bg-red-600 text-white rounded-md w-full" onClick={toggleButton}>
                Batal
              </button>
              <button className="py-2 px-6 bg-button text-white rounded-md w-full" onClick={toggleButton}>
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAccount;
