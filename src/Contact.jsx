import React from "react";
import { Github, Mail } from "lucide-react";
function Contact() {
  return (
    <>
      <div>
        <div className=" flex justify-center text-text/30 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] uppercase font-black">
          Connection
        </div>
        <div className=" group p-16">
          <span className=" w-full flex justify-center uppercase font-black text-text text-[1.5rem] md:text-[2rem] lg:text-[4rem] group-hover:text-blue/70">
            rasil.t1999@gmail.com
          </span>
          <div className=" w-full flex">
            <div className=" w-full h-[1px] origin-right scale-x-0 bg-gradient-to-l from-orange to-red transition-all duration-500 ease-in-out group-hover:scale-x-100"></div>
            <div className=" w-full h-[1px] origin-left scale-x-0 bg-gradient-to-r from-orange to-red  transition-all duration-500 group-hover:scale-x-100"></div>
          </div>
        </div>

        <div className=" flex justify-center items-center p-16 text-text/30">
          <div className="  m-5 hover:text-text/80 transition-transform duration-300 hover:-translate-y-1">
            <button className="flex justify-center items-center p-2 m-2">
              <Github className=" m-2" />
              <span className=" font-black uppercase">Github</span>
            </button>
          </div>

          <div className="  m-5 hover:text-text/80 transition-transform duration-300 hover:-translate-y-1">
            <button className="flex justify-center items-center p-2 m-2">
              <Mail className=" m-2" />
              <span className=" font-black uppercase">Gmail</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
