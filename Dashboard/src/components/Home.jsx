import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    let hasRun = false;
    const verifyCookie = async () => {
      if (hasRun) return;
      hasRun = true;
      try {
        const { data } = await axios.post(
          "http://localhost:8080/",
          {},
          { withCredentials: true }
        );
        const { success, user } = data;
        if (success) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          toast.error("Session expired");
          window.location.href = "http://localhost:5173/login"
        }
      } catch (err) {
        console.error(err);
        toast.error("Server error");
      }
    };
    verifyCookie();
  }, [navigate, removeCookie]);



  const Logout = async () => {
    await axios.post("http://localhost:8080/logout", {}, { withCredentials: true });
    removeCookie("token");
    navigate("/login");
  };

  return (
    <>
      <ToastContainer />
      {/* <RefreshHandler /> */}
      <TopBar username={username || "Guest"} onLogout={Logout} />
      <Dashboard username={username || "Guest"} />
    </>
  );
};

export default Home;
