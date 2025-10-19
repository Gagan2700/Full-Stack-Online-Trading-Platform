import { GoArrowRight } from "react-icons/go";

const Anchor = ({text}) => {
  return (
    <p>
      <a href="" className="text-[1.1rem] text-blue-500 hover:text-black font-all flex items-center gap-2">{text}<GoArrowRight /></a>
    </p>
  )
}

export default Anchor