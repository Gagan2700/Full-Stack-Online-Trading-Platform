import SignupButton from "./SignupButton"

const Create = ({title="Open a Zerodha account",para="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."}) => {
  return (
    <div className="w-[100%] lg:h-[60vh] h-[40vh] flex flex-col items-center pt-[5vh] text-center">
        <h1 className="text-[1.6rem] font-all mx-[4rem] text-gray-800 m-[1.2rem]">{title}</h1>
        <p className="font-all text-gray-500 mb-[2rem] text-[1.2rem]">{para}</p>
        <SignupButton className="mt-[3rem]"></SignupButton>
    </div>
  )
}

export default Create