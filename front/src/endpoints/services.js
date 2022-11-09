import http from "./create";

const crear = (data) => {
    return http.post("/new_register", data);
  };
  
  const InfoServices = {crear}
  export default InfoServices;