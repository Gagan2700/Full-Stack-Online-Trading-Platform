import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Acronynm = ({ icon, title, items, id }) => {
  const [toOpen, setToOpen] = useState([]);

  const toggle = (id) => {
    if (toOpen.includes(id)) {
      // remove it
      setToOpen(toOpen.filter((el) => el !== id));
    } else {
      // add it
      setToOpen([...toOpen, id]);
    }
  };

  const isOpen = toOpen.includes(id);

  return (
    <div className="overflow-hidden border border-gray-200 my-[2rem]">
      <div
        className={`flex items-center justify-between cursor-pointer h-[4rem] 
        hover:-translate-y-[2px] hover:shadow-md hover:bg-[#F9FBFF] 
        transition-all duration-300 pr-5`}
        onClick={() => toggle(id)}
      >
        <div className="flex items-center h-[100%] gap-2">
          <button className="h-[100%] w-[3.5rem] flex justify-center items-center bg-[#F7FBFE] text-blue-500 text-[1.35rem]">
            <span>{icon}</span>
          </button>
          <h1 className="text-nowrap text-[1.15rem] text-gray-800 font-all">
            {title}
          </h1>
        </div>
        <FaAngleDown
          className={`text-[1.1rem] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="px-[4rem] py-[1.2rem]">
          <ul className="sup flex flex-col gap-1">
            {items.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Acronynm;
