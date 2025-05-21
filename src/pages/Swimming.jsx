import React from "react";

function Swimming() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-5 space-x-10 lg:px-36 justify-center items-center h-[100vh] lg:h-[72vh] pt-5 px-5 bg-[url(https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1200)] bg-center
    bg-cover bg-no-repeat"
    >
      <iframe
        className=" lg:p-0 w-full lg:w-[50%] h-[20rem] rounded-2xl shadow-2xl hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105  "
        src="https://www.youtube.com/embed/hzUEagQdkzo?si=H1QHYKHRgimuc1pS"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex flex-col lg:h-[20rem] px-10 lg:px-5 w-full lg:w-[50%] bg-white/90 rounded-2xl shadow-2xl  hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105   p-5">
        <h1 className="text-5xl font-bold text-green-600">Swimming</h1>
        <p className="text-2xl text-gray-800 mt-2">
          Swimming is a full-body workout sport practiced for fitness,
          competition, or fun. It boosts lung capacity, strength, and
          flexibility.
        </p>
      </div>
    </div>
  );
}

export default Swimming;
