import React from "react";

function Football() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-5 space-x-10 lg:px-36 justify-center items-center h-[72vh] pt-5 bg-[url(https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1200)] bg-center
    bg-cover bg-no-repeat"
    >
      <iframe
        className="px-10 lg:p-0 w-full lg:w-[50%] h-[20rem] rounded-2xl shadow-2xl hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105  "
        src="https://www.youtube.com/embed/zJDl8sHwEkE?si=eMojob997k8MxUZW"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex flex-col h-[20rem] px-10 lg:px-5 w-full lg:w-[50%] bg-white/90 rounded-2xl shadow-2xl  hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105   p-5">
        <h1 className="text-5xl font-bold text-green-600">Football</h1>
        <p className="text-2xl text-gray-800 mt-2">
          Football is the world's most popular sport, played by two teams trying
          to score goals by getting the ball into the opponent's net. Teams like
          <span className="font-bold text-green-600"> Al Hilal</span>, known for
          their skill and championships, represent the spirit of competition and
          excellence. The sport builds teamwork, strategy, and physical
          endurance.
        </p>
      </div>
    </div>
  );
}

export default Football;
