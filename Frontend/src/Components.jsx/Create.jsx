import SignupButton from "./SignupButton"

const Create = () => {
  return (
    <div className="w-[100%] h-[60vh] flex flex-col items-center pt-[20vh]">
        <h1 className="text-[1.6rem] font-all mx-[4rem] text-gray-800 m-[1.5rem]">Open a Zerodha account</h1>
        <p className="font-all text-gray-500 mb-[2rem] text-[1.1rem]">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <SignupButton className="mt-[3rem]"></SignupButton>
    </div>
  )
}

export default Create