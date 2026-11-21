import React from "react";

function Footer() {
  return (
    <div className=" p-16 flex justify-between font-black border-t border-text/10 bg-transparent">
      <div className=" text-blue/60 md:tracking-[0.3rem]">
        Copyright - <span className=" text-text/50">© 2026 Rawseal</span>
      </div>
      <div className=" text-red/30 md:tracking-[0.3rem]">
        Released : V<sub>0.1</sub>
      </div>
    </div>
  );
}

export default Footer;
