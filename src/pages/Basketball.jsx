import React from "react";
function Basketball() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-5 space-x-10 lg:px-36 justify-center items-center h-[72vh] pt-5 bg-[url(https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=1200)] bg-center
    bg-cover bg-no-repeat"
    >
      <iframe
        className="px-10 lg:p-0 w-full lg:w-[50%] h-[20rem] rounded-2xl shadow-2xl hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105  "
        src="https://www.youtube.com/embed/aIY_vQCaIto?si=c5IMz4M19QR4ezIO"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex flex-col h-[20rem] px-10 lg:px-5 w-full lg:w-[50%] bg-white/90 rounded-2xl shadow-2xl  hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105   p-5">
        <h1 className="text-5xl font-bold text-green-600">Basketball</h1>
        <p className="text-2xl text-gray-800 mt-2">
          Basketball is a fast-paced game where two teams aim to score by
          shooting a ball through a hoop. It improves coordination, agility, and
          teamwork.
        </p>
      </div>
    </div>
  );
}

export default Basketball;
