import React from "react";

function Boxing() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-5 space-x-10 lg:px-36 justify-center items-center  h-[100vh] lg:h-[72vh] pt-5 px-5 bg-[url(https://images.pexels.com/photos/3531081/pexels-photo-3531081.jpeg?auto=compress&cs=tinysrgb&w=1200)] bg-center
    bg-cover bg-no-repeat"
    >
      <iframe
        className="lg:px-10 lg:p-0 w-full lg:w-[50%] h-[20rem] rounded-2xl shadow-2xl hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105  "
        src="https://www.youtube.com/embed/sYWwJNJ4vzM?si=FnvB_POypGiMcz2k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex flex-col lg:h-[20rem] px-10 lg:px-5 w-full lg:w-[50%] bg-white/90 rounded-2xl shadow-2xl  hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105   p-5">
        <h1 className="text-5xl font-bold text-green-600">Boxing</h1>
        <p className="text-2xl text-gray-800 mt-2">
          Boxing is a combat sport where two participants use their fists under
          strict rules. It builds strength, endurance, and mental discipline.
        </p>
      </div>
    </div>
  );
}

export default Boxing;
