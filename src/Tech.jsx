import React from "react";
import { Database, AppWindow, Cpu } from "lucide-react";

function Tech() {
  const backend = [
    "python",
    "django",
    "drf",
    "sqlite",
    "postgresql",
    "Next/Express.js",
    "Jwt/sessions",
  ];
  const frontend = [
    "React",
    "Tailwind",
    "Html",
    "Javascript",
    "Css",
    "Typescript",
  ];
  const toolkit = ["Redis", "Nginx", "Docker", "Git&Github"];
  return (
    <>
      <div className=" w-full flex justify-center text-text text-[2rem] md:text-[4rem] font-black uppercase">
        <div className="bg-gradient-to-r from-text to-neonBlue bg-clip-text text-transparent">
          Tech Stack
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-between w-full p-16 text-text">
        <div className="relative w-full m-1 p-5 group font-black uppercase border border-border rounded-xl overflow-hidden hover:bg-cardBg transition-all duration-300 ease-in-out hover:scale-105 hover:border-neonBlue">
          <span className=" p-5 flex justify-center items-center transition duration-300 ease-in-out group-hover:scale-105 text-[1.2rem]">
            <Database
              size={16}
              className=" mx-2 group-hover:animate-pulse group-hover:text-neonBlue"
            />
            Backend
          </span>
          {backend.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex items-center m-2 text-text/30 group-hover:text-text/80"
              >
                <div className=" w-1 h-1 bg-blue/30 m-2 group-hover:bg-neonBlue group-hover:animate-pulse"></div>
                <span>{item}</span>
              </div>
            );
          })}
          <div className=" absolute inset-0 w-full h-0 bg-neonBlue/5 border-0 rounded-xl transition-all duration-300 group-hover:h-full"></div>
        </div>

        <div className=" relative w-full m-1 p-5 group font-black uppercase border border-border rounded-xl overflow-hidden hover:bg-cardBg transition-all duration-300 ease-in-out hover:scale-105 hover:border-neonBlue">
          <span className=" p-5 flex justify-center items-center transition duration-300 ease-in-out group-hover:scale-105 text-[1.2rem]">
            <AppWindow
              size={16}
              className=" mx-2 group-hover:animate-pulse group-hover:text-neonBlue"
            />
            Frontend
          </span>
          {frontend.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex items-center m-2 text-text/30 group-hover:text-text/80"
              >
                <div className=" w-1 h-1 bg-blue/30 m-2 group-hover:bg-neonBlue group-hover:animate-pulse "></div>
                <span>{item}</span>
              </div>
            );
          })}
          <div className=" absolute inset-0 w-full bg-neonBlue/5 scale-y-0 origin-bottom border-0 rounded-xl transition-all duration-300 group-hover:scale-y-100"></div>
        </div>

        <div className=" relative w-full m-1 p-5 group font-black uppercase border border-border rounded-xl overflow-hidden hover:bg-cardBg transition-all duration-300 ease-in-out hover:scale-105 hover:border-neonBlue">
          <span className=" p-5 flex justify-center items-center transition duration-300 ease-in-out group-hover:scale-105 text-[1.2rem]">
            <Cpu
              size={16}
              className=" mx-2 group-hover:animate-pulse group-hover:text-neonBlue"
            />
            Toolkit
          </span>
          {toolkit.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex items-center m-2 text-text/30 group-hover:text-text/80"
              >
                <div className=" w-1 h-1 bg-blue/30 m-2 group-hover:bg-neonBlue group-hover:animate-pulse"></div>
                <span>{item}</span>
              </div>
            );
          })}
          <div className=" absolute inset-0 w-full h-0 bg-neonBlue/5 border-0 rounded-xl transition-all duration-300 group-hover:h-full"></div>
        </div>
      </div>
    </>
  );
}

export default Tech;
