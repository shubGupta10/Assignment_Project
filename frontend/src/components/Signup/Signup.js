import React from "react";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        <div
          className="md:flex-shrink-0"
          style={{ backgroundColor: "#f5d48e" }}
        >
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
          <div className="flex space-x-4 mb-4"></div>
          <hr className="border-black mb-4" />
          <form action="#" method="GET">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="fullname"
                    className="block text-xl font-bold text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    placeholder="Enter your fullname"
                    id="fullname"
                    className="rounded-md p-2 w-full my-2 border-black bg-slate-200"
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
                    className="rounded-md p-2 my-2 w-full border-black bg-slate-200 "
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="block text-xl font-bold text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="rounded-md p-2 w-60 my-2 border-black bg-slate-200"
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
                  className="rounded-md p-2 w-60 my-2 border-black bg-slate-200"
                />
              </div>
              <div className="flex items-center">
                <input
                  name="consent"
                  type="checkbox"
                  id="consent"
                  className="mr-2"
                />
                <p className="text-sm text-gray-700">
                  Creating an account means you're okay with our{" "}
                  <a href="#" className="text-blue-500">
                    Terms of Service
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>
                  , and our default{" "}
                  <a href="#" className="text-blue-500">
                    Notification Settings
                  </a>
                  .
                </p>
              </div>
              <button className="px-8 py-2 rounded font-bold cursor-pointer transition duration-150 ease-linear bg-red-500 text-white hover:bg-red-800">
                Create Account
              </button>
              <p className="text-sm text-gray-700">
              This site is protected by reCAPTCHA and the Google
              <a className="text-blue-500" > Privacy Policy  </a>  and <a className="text-blue-500" > Terms of Service </a> apply
              </p>
              <img className="hover: bg-yellow-400 caret-red-100"></img>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
