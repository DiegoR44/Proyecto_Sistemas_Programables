import React, { useForm} from "react-hook-form";
import Botones from "../Botones";
import {  useEffect} from "react";
import "react-toastify/dist/ReactToastify.css";
import Labels from "../Inputs";
import Error from "../Errores";

const Alta_Cliente = (props) => {
  
  const {titulo,PostDatos}=props
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ Cliente_pin: "", Nombre: "" });
    }
  });
  
  const validatePassword = (value) => {
    if (value.length > 9) {
      return "Numero de control invalido ";
    }
    if (!/[A-Z]*[0-9]{8}/g.test(value)) {
      return "Formato incorrecto";
    }
    return true;
  };
  return (
    <div className="relative p-3 flex-auto">
      <div>
        <div>
          <form
            className="max-w-[400px] w-full mx-auto bg-white p-4"
            onSubmit={handleSubmit((data) => {
              PostDatos(data);
            })}
          >
            <h2 className="text-blue-900 text-4xl font-bold text-center py-1">
              {titulo}
            </h2>
            <div className="flex flex-col py-2">
              <Labels titulo="Nombre prestador" />
              <input
                className="border p-2 text-md block px-3 py-2 rounded-lg w-full  bg-white  border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500
                  focus:bg-white 
                    focus:border-gray-600  
                  focus:outline-none"
                aria-required="true"
                type="text"
                name="Nombre"
                placeholder="Nombre"
                autoComplete="off"
                {...register("Nombre", {
                  required: true,
                })}
              />

              {errors.Nombre && errors.Nombre.type === "required" && (
                <Error Terror="Nombre requerido." />
              )}
              <Labels titulo="Numero de control" />
              <input
                className="border p-2 text-md block px-3 py-2 rounded-lg w-full bg-white  border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500
                focus:bg-white 
                  focus:border-gray-600  
                  focus:outline-none"
                type="text"
                name="Cliente_pin"
                placeholder="Control"
                {...register("Cliente_pin", {
                  required: "numero de control requerido.",
                  validate: validatePassword,
                })}
                aria-required="true"
              />
              {errors.Cliente_pin && (
                <Error Terror={errors.Cliente_pin.message} />
              )}
            </div>

            <Botones nombreB="Confirmar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Alta_Cliente ;
