import React from "react";

const Botones = ({ nombreB, evento }) => {
  return (
    <>
      <button
        className="border  py-2 bg-blue-900 hover:bg-indigo-500 text-white rounded-lg w-full "
        type={evento}
      >
        {" "}
        {nombreB}{" "}
      </button>
    </>
  );
};
export default Botones;
