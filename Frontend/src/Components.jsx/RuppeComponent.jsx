import logo from "/zero.png"

const RuppeComponent = ({logo,text}) => {
  return (
    <div className='flex justify-center items-center gap-5 h-[100%]'>
      <img src={logo} alt="" className="w-[10rem] h-[7rem]"/>
      <p className="text-gray-500 text-[0.7rem] text-pretty md:text-balance self-end">{text}</p>
    </div>
  )
}

export default RuppeComponent