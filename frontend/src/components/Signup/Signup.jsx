import React from 'react';

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        <div className="md:flex-shrink-1">
        <img src="https://cdn.dribbble.com/users/76454/screenshots/6596459/drbbb_4x.png" alt="Dribbble Logo" className="h-96 w-full object-cover md:w-96" />
        </div>
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sign up for our Site</h2>
          <div className="flex space-x-4 mb-4">
          </div>
          <hr className="border-gray-400 mb-4" />
          <form action="#" method="GET">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="fullname" className="block text-xl text-gray-700">Full Name</label>
                  <input name="fullname" type="text" id="fullname" className="rounded-md p-2 w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="username" className="block text-xl text-gray-700">Username</label>
                  <input name="username" type="text" id="username" className="rounded-md p-2 w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="block text-xl text-gray-700">Email Address</label>
                <input name="email" type="email" id="email" className="rounded-md p-2 w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="block text-xl text-gray-700">Password</label>
                <input name="password" type="password" id="password" className="rounded-md p-2 w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" />
              </div>
              <div className="flex items-center">
                <input name="consent" type="checkbox" id="consent" className="mr-2" />
                <p className="text-sm text-gray-700">Creating an account means you're okay with our <a href="#" className="text-blue-500">Terms of Service</a>, <a href="#" className="text-blue-500">Privacy Policy</a>, and our default <a href="#" className="text-blue-500">Notification Settings</a>.</p>
              </div>
              <button className="px-8 py-2 rounded font-bold cursor-pointer transition duration-150 ease-linear bg-pink-500 text-white hover:bg-yellow-500">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
