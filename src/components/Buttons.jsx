import React from "react";
import { useNavigate, useLocation } from "react-router";

const sports = [
  { name: "Sports", id: 1 },
  { name: "Football", id: 2 },
  { name: "Basketball", id: 3 },
  { name: "Tennis", id: 4 },
  { name: "Swimming", id: 5 },
  { name: "Boxing", id: 6 },
  { name: "Golf", id: 7 },
];

function Buttons() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-7 justify-items-center gap-1 space-y-5 pt-5 pb-1 bg-gray-950">
      {sports.map((sport) => {
        const path =
          sport.name === "Sports" ? "/sports" : `/${sport.name.toLowerCase()}`;
        const isActive = location.pathname === path;
        return (
          <div key={sport.id} className="w-[12rem] h-[10rem]">
            <button
              onClick={() => navigate(path)}
              className={`w-full h-full font-medium text-3xl rounded-2xl shadow-green-600 transition duration-300 ease-in-out transform cursor-pointer
                ${
                  isActive
                    ? "bg-green-800 text-white -translate-y-5 "
                    : "bg-green-600 hover:bg-green-800 text-white hover:shadow-2xl hover:scale-105 hover:-translate-y-5"
                }
              `}
            >
              {sport.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Buttons;
