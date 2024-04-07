import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function ProfileTwo() {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxIndex) => {
    setSelectedBox(boxIndex);
  };

  const handleClick = () =>  {
    navigate("/mail");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 p-4 mb-8">Dribble</h1>
      <div className="bg-gray-100 flex justify-center items-start min-h-screen">
        <div className="max-w-4xl mx-auto"> 
          <h2 className="text-3xl font-bold mb-8">What brings you to Dribble?</h2>
          <p className="text-gray-600 mb-8">Select the options that better describe you. Don't worry, you can explore other options later.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div 
              className={`bg-white rounded-lg shadow-md p-2 flex flex-col items-center cursor-pointer ${selectedBox === 0 ? 'border-2 border-red-500' : ''}`}
              onClick={() => handleBoxClick(0)}
            >
              <img src="https://i.pinimg.com/736x/3a/94/7f/3a947f9238d4d843959a216bbb83a614.jpg" alt="Image 1" className="w-64 h-64 rounded-full mb-4" />
              <p className="text-lg p-1 font-bold">I'm a designer looking to share my work.</p>
              {selectedBox === 0 && <span className="text-red-900 text-3xl">&#9989;</span>}
            </div>
            <div 
              className={`bg-white rounded-lg shadow-md p-2  flex flex-col items-center cursor-pointer ${selectedBox === 1 ? 'border-2 border-red-500' : ''}`}
              onClick={() => handleBoxClick(1)}
            >
              <img src="https://cdn.dribbble.com/users/255/screenshots/7861779/media/5a6246e56604072b551ac01ad2ae675f.png?resize=400x300&vertical=center" alt="Image 2" className="w-64 h-64 rounded-full mb-4" />
              <p className="text-lg p-1 font-bold">I'm looking to hire a designer.</p>
              {selectedBox === 1 && <span className="text-red-900 font-extrabold text-3xl">&#9989;</span>}
            </div>
            <div 
              className={`bg-white rounded-lg shadow-md p-2 flex flex-col items-center cursor-pointer ${selectedBox === 2 ? 'border-2 border-red-500' : ''}`}
              onClick={() => handleBoxClick(2)}
            >
              <img src="https://cdn.dribbble.com/users/255/screenshots/7887117/media/c94f2a58d7da974404a5122872bb93b0.png" alt="Image 3" className="w-64 h-64 rounded-full mb-4" />
              <p className="text-lg p-1 font-bold">I'm looking for design inspiration.</p>
              {selectedBox === 2 && <span className="text-red-900 text-3xl">&#9989;</span>}
            </div>
          </div>

          <div className='flex justify-center'>
            <button onClick={handleClick} className="mt-8 bg-red-500 w-52 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300">Finish</button>
          </div>
          <div className='text-center'>
            <Link to={"/profile-one"} className='mt-12'>or Return</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileTwo;
