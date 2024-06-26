import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext.js";

function Signup() {
  const { setEmail } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post(
        "https://localhost:5000/api/users/signup",
        formData , {withCredentials: true}
      );
      const { email } = response.data;
      setEmail(email); 
      sendThankYouEmail(email); 
      navigate("/profile-one");
      toast.success("Account created successfully!", {
        autoClose: 3000, 
        position: toast.POSITION.TOP_RIGHT, 
        hideProgressBar: true, 
      });
    } catch (error) {
      console.log(error);
      toast.error("Error creating account. Please try again...");
    } finally {
      setLoading(false); 
    }
  };

  const sendThankYouEmail = async (email) => {
    try {
      await axios.post("backend/send-thank-you-email-endpoint", { email });
      console.log("Thank you email sent successfully!");
    } catch (error) {
      console.error("Error sending thank you email:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        <div className="md:flex-shrink-0" style={{ backgroundColor: "#f5d48e" }}>
          <h1 className="text-2xl p-4 font-bold" style={{ color: "#a47f3a" }}>
            Dribble
          </h1>
          <h3
            className="font-bold p-2 md:text-3xl"
            style={{
              whiteSpace: "wrap",
              color: "#835f17",
              fontSize: "18px",
              wordWrap: "break-word",
            }}
          >
            Discover the world's top Designers and <br /> Creatives
          </h3>
          <img
            src="https://cdn.dribbble.com/users/76454/screenshots/6596459/drbbb_4x.png"
            alt="Dribbble Logo"
            className="h-96 w-full object-full md:w-96"
          />
        </div>
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sign up to Dribble
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-xl font-bold text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your fullname"
                    id="name"
                    className="rounded-md p-2 w-full my-2 border-black bg-slate-200"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="username"
                    className="block text-xl font-bold text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className="rounded-md p-2 my-2 w-full border-black bg-slate-200"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block text-xl font-bold text-gray-700"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="rounded-md p-2 w-60 my-2 border-black bg-slate-200"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-xl font-bold text-gray-700"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="6+ characters"
                  className="rounded-md p-2 w-62 my-2 border-black bg-slate-200"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-2 rounded font-bold cursor-pointer transition duration-150 ease-linear bg-red-500 text-white hover:bg-red-800"
                disabled={loading} // Disable button when loading is true
              >
                {loading ? "Setting Up Your Account..." : "Create Account"} 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
