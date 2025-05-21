import React from "react";

function Tennis() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-5 space-x-10 lg:px-36 justify-center items-center  h-[100vh] lg:h-[72vh] pt-5 px-5 bg-[url(https://images.pexels.com/photos/66323/tennis-ball-sport-yellow-66323.jpeg?auto=compress&cs=tinysrgb&w=1200)] bg-center
    bg-cover bg-no-repeat"
    >
      <iframe
        className="lg:p-0 w-full lg:w-[50%] h-[20rem] rounded-2xl shadow-2xl hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105  "
        src="https://www.youtube.com/embed/foXEGjGmaL4?si=WsHM16MdKea6gidI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex flex-col lg:h-[20rem] px-10 lg:px-5 w-full lg:w-[50%] bg-white/90 rounded-2xl shadow-2xl  hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105   p-5">
        <h1 className="text-5xl font-bold text-green-600">Tennis</h1>
        <p className="text-2xl text-gray-800 mt-2">
          Tennis is a racquet sport played individually or in pairs. Players hit
          a ball over a net to win points. It requires speed, precision, and
          stamina.
        </p>
      </div>
    </div>
  );
}

export default Tennis;
