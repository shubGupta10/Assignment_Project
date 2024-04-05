import React from 'react';

function Profile() {
  return (
    <>
      <h1 className="text-3xl font-bold italic text-red-500 py-4 mb-8">Dribble</h1>
      <div className="bg-gray-100 ">
        <div className="max-w-xl mx-auto px-3 py-12">
          <h2 className="text-3xl font-bold mb-8">Welcome! Let's create your profile</h2>
          <p className="text-gray-600 mb-8">Let others get to know you better! You can do these later.</p>

          <div className="mb-8 flex items-start">
            <div className="flex flex-col items-center mr-4">
              <h3 className="text-xl font-bold mb-6">Add an avatar</h3>
              <div className="w-32 h-32 rounded-full mb-8 bg-gray-200 flex justify-center items-center ">
                <p className="text-gray-500">Avatar</p>
              </div>
              
            </div>
            <button className="bg-white text-black border-gray-300 focus:outline-none focus:border-black px-4 my-16 ml-16 py-2 rounded hover:border-gray-900 transition duration-300">Choose image</button>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Add your location</h3>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button className="w-60 bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition duration-300">Next</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
