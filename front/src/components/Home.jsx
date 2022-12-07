/* This example requires Tailwind CSS v2.0+ */
import React, { useContext } from "react";
import { DataContext } from "../Context";
import { Popover } from "@headlessui/react";
import img from "../assets/home.png";
import Register from "./registers/new_register"
import Modal from "./registers/Modal";
import AuthData from "./registers/auth";
import { ToastContainer } from "react-toastify";
var currentTime = new Date();
var year = currentTime.getFullYear();
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

export default function HomeComponent() {

 const  {PostDatos,Auth}=useContext(DataContext);

  return (
    <div className="relative bg-white overflow-hidden sm::rounded-md  sm:p-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="max-w-7xl mx-auto">
        <div className="relative z-20 pb-8  bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-36 ">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          </Popover>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-6xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-8xl">
                <span className=" md:text-7xl block text-blue-900  xl:inline ">
                  Bienvenidos{" "}
                </span>
                <span className=" md:text-8xl block xl:inline">
                  Sistemas Progr. {year}{" "}
                </span>{" "}
              </h1>
              <p className="mt-3 text-base text-blue-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <span>
                  {" "}
                  Instituto Tecnologico de Hermosillo {"\n"}
                  <hr></hr>
                </span>

                <span>Fecha: {hoy.toDateString()}.</span>
              </p>
              <hr></hr>
        
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow ">
                <Modal
                tituloModal="Registro"
                ComponenteBody={
                  <Register titulo={"Nuevo Registro"} 
                  PostDatos={PostDatos} />
                }
              />
               
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                
                <Modal
                tituloModal="Verificación"
                ComponenteBody={
                 <AuthData titulo={"Match"}
                 AuthData={Auth}
                 />
                }
              />
                  
                </div>
                
                
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute  lg:inset-y-0   lg:right-0 lg:w-1/2 ">
        <img
          className="  w-full object-cover sm:shadow-md sm::rounded-md lg:w-full lg:h-full  sm:p-6 "
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}