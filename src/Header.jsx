import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` fixed top-0 px-16 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${scrolled > 50 ? "bg-black/80 backdrop-blur-xl border-white/10" : "py-5"}`}
    >
      <header className=" flex py-2 justify-center md:justify-between md:items-center">
        {/* Logo */}
        <div className=" flex justify-center items-center p-2">
          <div
            className=" group w-10 h-10 flex items-center justify-center border border-blue text-text  font-black text-sm bg-blue/10 shadow-[0_0_15px_rgba(84,170,209,1)]
  transition duration-300 ease-in-out origin-center hover:rotate-45 hover:shadow-[0_0_25px_rgba(0,242,255,0.9)] hover:bg-neonBlue hover:border-text hover:animate-pulse cursor-pointer"
          >
            <span className="inline-block origin-center transition duration-300 ease-in-out group-hover:-rotate-45">
              RT.
            </span>
          </div>

          <span className=" text-text text-[10px] tracking-[0.3em] opacity-50 hidden md:block uppercase px-2 mx-2">
            RawSeal
            <br />
            <span className=" font-none lowercase text-[10px]">/rɑːˈsiːl/</span>
          </span>
        </div>
        {/* Nav */}
        <div className=" hidden md:block text-text text-[10px] font-black uppercase tracking-[0.4em]">
          <ul className=" flex">
            <li className=" mx-3 p-1 hover:text-blue relative group cursor-pointer">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue transition-all duration-200 ease-out group-hover:w-full"></span>
            </li>
            <li className=" mx-3 p-1 hover:text-red relative group cursor-pointer">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red transition-all duration-200 ease-out group-hover:w-full"></span>
            </li>
            <li className=" mx-3 p-1 hover:text-purple relative group cursor-pointer">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple transition-all duration-200 ease-out group-hover:w-full"></span>
            </li>
            <li className=" mx-3 p-1 hover:text-orange relative group cursor-pointer">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange transition-all duration-200 ease-out group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
