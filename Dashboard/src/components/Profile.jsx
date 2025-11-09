import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleLogout = async () => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/logout",
      {},
      { withCredentials: true }
    );

    const { message } = data;
    if (message) {
      toast(message);
      setTimeout(() => {
        window.location.href = "http://localhost:5173/login";
      }, 1000); // wait for toast
    }
  } catch (err) {
    console.error(err);
    toast.error("Logout failed!");
  }
};

const Profile = ({ username, email = "" }) => {
  return (
    <>
      <ToastContainer />
      <div className="profile-box">
        <div>
          <h5>{username}</h5>
          <p>{email}</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Profile;
