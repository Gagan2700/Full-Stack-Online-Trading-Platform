import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [input,setInput] = useState({
    Email:"",
    Username:"",
    Password:""
  })

  const {Email,Username,Password} = input;
  const handleChange = (e)=>{
    let { placeholder, value } = e.target;
    setInput({
      ...input,
      [placeholder]:value
    })
  }

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
  });

  const handleSubmit =async (e)=>{
    e.preventDefault();
    if(!Password ||!Username || !Email){
      handleSuccess("Username ,email and Password is required!");
      return;
    }
    try{
        let{data}=await axios.post(
          "http://localhost:8080/signup",
          {
            username:Username,
            email:Email,
            password:Password,
          },
          {
            withCredentials: true,
          }
        )
        console.log(data);
        let {success,message} = data;
        if(success){
          handleSuccess(message);
            setTimeout(() => {
              window.location.href="http://localhost:5174"
            }, 1000);
        }
        else{
          handleError(message);
        }
        setInput({
          Email:"",
          Username:"",
          Password:""
      })
    }catch(error){
      console.error(error);
      handleError(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    }

  }

  return (
    <div className='flex flex-col items-center justify-center gap-[5rem] main-pad mt-[20vh]'>
      <div className='text-center'>
        <h1 className='text-[2rem] text-gray-800 font-all'>Open a free demat and trading account online</h1>       
        <h3 className='text-[1.3rem] text-gray-600 font-all'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>
      </div>


      <form onSubmit={handleSubmit}
        className='flex flex-col gap-4 bg-white shadow-md p-6 rounded-xl w-full max-w-md  mb-[10rem] items-center mt-[2rem] focus-within:border-gray-100 focus-within:border-2 focus-within:shadow-2xl transition-all transition-delay-100'>
        <h1 className='text-[2rem] text-gray-800 font-all'>Signup</h1>
        <input 
          onChange={handleChange} 
          placeholder="Email"
          value={Email}
          className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 font-all w-[100%]'
          
          >
          </input>
        <input 
          onChange={handleChange} 
          placeholder="Username"
          value={Username} 
          className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 font-all w-[100%]'
          >
        </input>
        <input 
          onChange={handleChange} 
          placeholder="Password"
          value={Password} 
          className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 font-all w-[100%]'
          >
        </input>
        <button className='px-[1.8rem] py-[0.5rem] bg-blue-500 text-white rounded-md cursor-pointer mt-5'>Sign Up</button>
        <p className="text-sm text-gray-600 text-center mt-5">
          Have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Signup;