import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* desktop menu */}
      <div className="bg-black text-zinc-200 hidden md:flex">
        {/* wrapper */}
        <div className=" w-[98%]  lg:w-[90%]  xl:w-[80%] 2xl:w-[70%] m-auto flex justify-between items-center py-[9px]">
          <div className="flex items-center gap-[30px]">
            <Link to="/">
              <p>
                <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                  B
                </span>
                <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                  B
                </span>
                <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                  C
                </span>
              </p>
            </Link>
            <div className="flex items-center gap-[10px] hover:border-b-2 border-blue-600 w-[100%] cursor-pointer">
              <BsFillPersonFill className="text-3xl" />
              <p className="hidden lg:flex">Sign in</p>
            </div>
          </div>
          <div>
            <ul className="flex gap-[20px]">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/news">
                <li>News</li>
              </Link>
              <Link to="/sports">
                <li>Sports</li>
              </Link>
              <Link to="/reel">
                <li>Reel</li>
              </Link>
              <Link to="/travel">
                <li>Travel</li>
              </Link>
              <Link to="/culture">
                <li>Culture</li>
              </Link>
              <Link to="fashion">
                <li>Fashion</li>
              </Link>
            </ul>
          </div>
          <Link to="/search">
            <div className="flex gap-3 items-center bg-zinc-800 hover:bg-zinc-700 p-[8px] cursor-pointer">
              <AiOutlineSearch className="text-xl" />
              <input
                type="text"
                placeholder="Search BBC"
                className="bg-transparent outline-none border-none hidden lg:flex"
              />
            </div>
          </Link>
        </div>
        {/*  */}
      </div>

      {/* mobile menu */}
      <div className="flex md:hidden">
        {/* wrapper */}
        {showMenu ? (
          <div className="fixed top-0 left-0 z-[999] bg-black text-zinc-200 w-full h-[100vh]">
            <div className="flex  justify-between p-[20px]">
              <Link to="/" onClick={() => setShowMenu(false)}>
                <p>
                  <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                    B
                  </span>
                  <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                    B
                  </span>
                  <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                    C
                  </span>
                </p>
              </Link>
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={() => setShowMenu(false)}
              />
            </div>
            <div className="flex justify-around mt-[10%]">
              <ul className="flex flex-col gap-[40px] font-bold">
                <Link to="/" onClick={() => setShowMenu(false)}>
                  <li>Home</li>
                </Link>
                <Link to="/news" onClick={() => setShowMenu(false)}>
                  <li>News</li>
                </Link>
                <Link to="/sports" onClick={() => setShowMenu(false)}>
                  <li>Sports</li>
                </Link>
                <Link to="/reel" onClick={() => setShowMenu(false)}>
                  <li>Reel</li>
                </Link>
              </ul>
              <ul className="flex flex-col gap-[40px] font-bold">
                <Link to="/travel" onClick={() => setShowMenu(false)}>
                  <li>Travel</li>
                </Link>
                <Link to="/culture" onClick={() => setShowMenu(false)}>
                  <li>Culture</li>
                </Link>
                <Link to="fashion" onClick={() => setShowMenu(false)}>
                  <li>Fashion</li>
                </Link>
                <Link to="/" onClick={() => setShowMenu(false)}>
                  <li>Cup</li>
                </Link>
              </ul>
              <ul className="flex flex-col gap-[40px] font-bold">
                <Link to="/" onClick={() => setShowMenu(false)}>
                  <li>Reels</li>
                </Link>
                <Link to="/" onClick={() => setShowMenu(false)}>
                  <li>Design</li>
                </Link>
                <Link to="/" onClick={() => setShowMenu(false)}>
                  <li>Movies</li>
                </Link>
              </ul>
              <ul className="flex flex-col gap-[40px] font-bold">
                <Link to="/" onClick={() => setShowMenu(false)}>
                  <li>Reels</li>
                </Link>
                <Link to="/" onClick={() => setShowMenu(false)}>
                  <li>Design</li>
                </Link>
                <Link to="/" onClick={() => setShowMenu(false)}>
                  <li>Movies</li>
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex justify-between p-[10px] bg-black text-zinc-200 w-full items-center ">
            <Link to="/login">
              <div>
                <BsFillPersonFill className="text-4xl" />
              </div>
            </Link>
            <div>
              <Link to="/" onClick={() => setShowMenu(false)}>
                <p>
                  <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                    B
                  </span>
                  <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                    B
                  </span>
                  <span className="bg-white text-black px-[9px] py-[2px] font-bold text-2xl mr-2">
                    C
                  </span>
                </p>
              </Link>
            </div>
            <div className="flex gap-[12px] items-center">
              <AiOutlineMenu
                onClick={() => setShowMenu(true)}
                className="text-3xl cursor-pointer mt-[10px] mr-[10px]"
              />
              <Link to="/search">
                <AiOutlineSearch className="text-3xl mt-[10px]" />
              </Link>
            </div>
          </div>
        )}
      </div>
      {/*  */}
    </div>
  );
};

export default Navbar;
