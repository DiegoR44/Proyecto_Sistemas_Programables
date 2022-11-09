import React from "react";

const Errores = ({ Terror }) => {
   

  return (
    <>
    
      <div className="w-full my-1 text-white bg-red-400 rounded-lg" >
        <div className="container flex items-center justify-between px-2 py-0 mx-auto">
          <div className="flex">
            <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
            </svg>
            <p className="mx-0">{Terror}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Errores;