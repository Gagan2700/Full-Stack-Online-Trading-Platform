import React from "react";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from "react";

useEffect(()=>{
  isLogin = async ()=>{
    let {data} = await axios.post(
      "http:localhost:8080/",
      {},
      {withCredentials:true},
    )
    let {success} = data;
    if(!success){
      toast.error("Session Expired!");
      window.location.href = "http://localhost:5173/login"
    }
  }
},[])

const Apps = () => {
  return (
      <>
        <ToastContainer></ToastContainer>
       < Home />
      </>
  );
};

export default Apps;