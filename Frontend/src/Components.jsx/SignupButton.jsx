import { useNavigate } from "react-router-dom"


const SignupButton = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate("/signup");
  }

  return (
    <div>
        <button className='bg-[#387ED1] hover:bg-black  text-white py-[.5rem] px-[2.5rem] cursor-pointer font-all text-[1.2rem]' onClick={handleClick}>Sign up for free</button>
    </div>
  )
}

export default SignupButton