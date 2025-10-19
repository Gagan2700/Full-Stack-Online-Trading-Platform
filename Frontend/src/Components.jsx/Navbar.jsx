import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import {NavLink, useNavigate} from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const btntog = () => setToggle(!toggle);

  function handleClick(){
    navigate('/');
  }

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <>
      <div className="lg:fixed lg:top-0 flex w-[100%] items-center justify-between py-3 mainpad border border-b border-gray-300 bg-white">
        <div>
          <img src="/zerodha-logo.jpg" alt="Logo" className="w-[9rem] cursor-pointer" onClick={handleClick}/>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-gray-500 font-all">
          <NavLink to="/signup" className="hover:text-blue-400 transition-colors" style={({ isActive }) => ({color: isActive ? '#6DA2FF' : '',})} >Signup</NavLink>
          <NavLink to="/about" className="hover:text-blue-400 transition-colors" style={({ isActive }) => ({color: isActive ? '#6DA2FF' : '',})}>About</NavLink>
          <NavLink to="/products" className="hover:text-blue-400 transition-colors" style={({ isActive }) => ({color: isActive ? '#6DA2FF' : '',})}>Products</NavLink>
          <NavLink to="/pricing" className="hover:text-blue-400 transition-colors" style={({ isActive }) => ({color: isActive ? '#6DA2FF' : '',})}>Pricing</NavLink>
          <NavLink to="/support" className="hover:text-blue-400 transition-colors" style={({ isActive }) => ({color: isActive ? '#6DA2FF' : '',})}>Support</NavLink>
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
          <NavLink to="/signup" className="hover:text-blue-400 transition-colors">Signup</NavLink>
          <NavLink to="/about" className="hover:text-blue-400 transition-colors">About</NavLink>
          <NavLink to="/products" className="hover:text-blue-400 transition-colors">Products</NavLink>
          <NavLink to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</NavLink>
          <NavLink to="/support" className="hover:text-blue-400 transition-colors">Support</NavLink>
        </div>
      }
    </>
  );
};

export default Navbar;
