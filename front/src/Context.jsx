import React, { createContext, useState} from "react";
import services from "./endpoints/services"
import { toast } from "react-toastify";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [Registro, SetRegistro] = useState([]);
  const [user,setuser]=useState([]);
  const PostDatos = (data) => {
    services.crear(data)
      .then((res) => {
        SetRegistro(res.data);
        toast.success("Registro Hecho", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch( (error)=> {
        toast.error(error.message, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });


      });
  };
  const Auth = (data) => {
    services.AuthData(data)

      .then((res) => {
        setuser(res.data);
        console.log(user)
        toast.success("Registro  Encontrado", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch( (error)=> {
        toast.error("No existe este usuario", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });


      });
  };
  return (
    <DataContext.Provider
      value={{
        PostDatos,
        Auth,
        user,
        Registro,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};