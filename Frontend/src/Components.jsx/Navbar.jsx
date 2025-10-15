import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const btntog = () => setToggle(!toggle);

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <>
      <div className="lg:fixed lg:t-0 flex w-[100vw] items-center justify-between py-3 px-[2rem] lg:px-[13rem] border border-b border-gray-300 bg-white">
        <div>
          <img src="/zerodha-logo.jpg" alt="Logo" className="w-[9rem]" />
        </div>

        <div className="hidden lg:flex items-center gap-10 text-gray-500 font-all">
          <a href="#" className="hover:text-blue-400 transition-colors">Signup</a>
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Products</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
        </div>

        <button
          onClick={btntog}
          className="lg:hidden text-2xl text-black z-20 transition-all cursor-pointer"
        >
          {toggle ? <RxCross2 className="z-50"/> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {
        toggle&&
        <div
          className={`fixed top-0 w-full flex bg-white  flex-col items-center gap-10 py-10 text-gray-500 font-all transition-all duration-300 lg:hidden z-10`}>
          <a href="#" className="hover:text-blue-400 transition-colors">Signup</a>
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Products</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
        </div>
      }
    </>
  );
};

export default Navbar;
