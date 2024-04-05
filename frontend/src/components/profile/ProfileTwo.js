import React from 'react';

function ProfileTwo() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 p-4 mb-8">Dribbble</h1>
      <div className="bg-gray-100 flex justify-center items-start min-h-screen">
        <div className="max-w-xl mx-auto"> {/* Reduced top padding */}
          <h2 className="text-3xl font-bold mb-8">What brings you to Dribble?</h2>
          <p className="text-gray-600 mb-8">Select the options that better describe you. Don't worry, you can explore other options later.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/3a/94/7f/3a947f9238d4d843959a216bbb83a614.jpg" alt="Image 1" className="w-64 h-auto rounded-full mb-4" />
              <p className="text-lg font-semibold">Option 1</p>
            </div>
            {/* Box 2 */}
            <div className="bg-white rounded-lg shadow-md p-2  flex flex-col items-center">
              <img src="https://cdn.dribbble.com/users/255/screenshots/7861779/media/5a6246e56604072b551ac01ad2ae675f.png?resize=400x300&vertical=center" alt="Image 2" className="w-32 h-32 rounded-full mb-4" />
              <p className="text-lg font-semibold">Option 2</p>
            </div>
            {/* Box 3 */}
            <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center">
              <img src="https://cdn.dribbble.com/users/255/screenshots/7887117/media/c94f2a58d7da974404a5122872bb93b0.png" alt="Image 3" className="w-44 h-42 rounded-full mb-4" />
              <p className="text-lg font-semibold">Option 3</p>
            </div>
          </div>

          <button className="mt-8 bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300">Continue</button>
        </div>
      </div>
    </>
  );
}

export default ProfileTwo;
