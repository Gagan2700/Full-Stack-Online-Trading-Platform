  import axios from "axios";
  import { useState } from "react";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  

  const Login = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });


    const { email, password } = formData;


    const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
    const handleSuccess = (msg) =>
      toast.success(msg, {
        position: "bottom-right",
    });


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (!email || !password) {
          handleError("Email and password are required");
          return;
        }

        console.log(formData);

        const { data } = await axios.post(
          "http://localhost:8080/login",
          {
            email,
            password,
          },
          { withCredentials: true } 
        );

        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            window.location.href="http://localhost:5174"
          }, 1000);
        } else {
          handleError(message);
        }

        // Reset form
        setFormData({ email: "", password: "" });
      } catch (err) {
        handleError(err.response?.data?.message || "Login failed");
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-sm">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password" 
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-5">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <ToastContainer />
      </div>
    );
  };

  export default Login;
