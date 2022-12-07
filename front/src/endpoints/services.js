import http from "./create";

const crear = (data) => {
    return http.post("/new_register", data);
  };
  const AuthData=(data)=>{
    return http.post("/auth",data)
  }
  const InfoServices = {crear,AuthData}
  export default InfoServices;