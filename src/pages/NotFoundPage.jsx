import React from "react";

function NotFoundPage() {
  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      

        <div className="mt-20">
          <h1 className="text-6xl">404 Error</h1>
          <p className="text-4xl italic  ">Page Not Found</p>
        </div>
<div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2417/2417865.png"
          className="flex justify-center items-center mx-auto "
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
