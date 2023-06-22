import "./navbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* wrapper */}
      <div className="navbar__wrapper">
        <div className="navbar__start">
          <p>
            <span id="logoItem">B</span>
            <span id="logoItem">B</span>
            <span id="logoItem">C</span>
          </p>
          <div
            className="flex items-center gap-[6px] hover:border-b-2
          hover:border-blue-500"
          >
            <BsFillPersonFill />
            <p style={{ fontSize: "10px" }} className="hidden sm:flex">
              Sign In
            </p>
          </div>
        </div>
        {/* links */}
        <div>
          <div className="navbar__links hidden sm:flex">
            <ul>
              <li>Home</li>
              <li>Sports</li>
              <li>Reel</li>
              <li>Worklife</li>
              <li>Travel</li>
              <li>Future</li>
            </ul>
          </div>
        </div>
        {/* search */}
        <div className="navbar__search  sm:bg-zinc-800">
          <AiOutlineSearch />
          <p className="search">Search BBC</p>
        </div>
        <div className="sm:hidden">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </div>
      {/* mobile links */}
      <div className="">
        {showMenu && (
          <div className=" sm:hidden fixed top-0 left-0 z-[999] bg-zinc-950 w-full min-h-[50vh] text-white p-[20px]">
            <div className="flex justify-between mb-[2em]">
              <div>
                <p>
                  <span id="logoItem">B</span>
                  <span id="logoItem">B</span>
                  <span id="logoItem">C</span>
                </p>
              </div>
              <AiOutlineClose
                className="text-2xl cursor-pointer"
                onClick={() => setShowMenu(false)}
              />
            </div>
            <ul className=" mobile__ul flex gap-[60px]">
              <div
                className="flex flex-col gap-[20px]"
                style={{ fontWeight: 700 }}
              >
                <li>Home</li>
                <li>Sports</li>
                <li>Reel</li>
                <li>Weather</li>
                <li>Culture</li>
              </div>
              <div
                className="flex flex-col gap-[20px]"
                style={{ fontWeight: 700 }}
              >
                <li>Worklife</li>
                <li>Travel</li>
                <li>Future</li>
                <li>TV</li>
                <li>Sounds</li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
