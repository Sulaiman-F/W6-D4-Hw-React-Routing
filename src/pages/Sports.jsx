import React from "react";

function Sports() {
  return (
    <div
      className="flex  justify-center items-center h-[72vh] pt-5 bg-[url(https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=1200)] bg-center
    bg-cover bg-no-repeat"
    >
      <div className="flex flex-col h-[20rem] px-10 lg:px-5 w-10/12 gap-5  bg-white/90 rounded-2xl shadow-2xl  hover:shadow-black  transition duration-300 ease-in-out transform hover:scale-105   p-5">
        <h1 className="text-5xl font-bold text-green-600">Sport</h1>
        <p className="text-2xl text-gray-800 mt-2">
          Sport refers to physical activities or games, often competitive, that
          involve skill, strategy, and physical effort. It promotes health,
          teamwork, discipline, and mental focus. Whether played individually or
          in teams, sports bring people together, create passion among fans, and
          teach valuable life lessons. From football to swimming, sports are a
          universal language that inspire and unite people around the world.
        </p>
      </div>
    </div>
  );
}

export default Sports;
