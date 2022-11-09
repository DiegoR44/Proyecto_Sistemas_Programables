import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";


const Modal_AltaEdit = ({ tituloModal, ComponenteBody }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                <div className="rounded-md shadow ">
                    <button

                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base 
                            font-medium rounded-md text-white bg-blue-900  hover:bg-blue-700 md:py-4 md:text-lg 
                            md:px-10"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        {tituloModal}
                    </button>

                </div>

            </div>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-10 mx-auto max-w-3xl">
                            {/*content*/}

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                {ComponenteBody}

                                {/*footer*/}
                                <div className="flex items-center justify-end p-3 py-0 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </>
    );
};


export default Modal_AltaEdit;