import React, {useState} from 'react';

function Profile() {


  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    console.log("Button working");
    const file = e.target.files[0];
    setProfileImage(file);
  };


  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("profilePicture", profileImage);

      const response = await fetch("http://localhost:8000/api/profile/upload", {
        method: "POST",
        body: formData
      });
      if(response.ok){
        const data = await response.json();
        console.log("Uploaded image URL:", data.imageUrl);
        console.log("Images uploaded!");
      } else{
        console.log("Failed to upload image.", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image.", error);
    }
  }



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
              <div className="relative w-32 h-32 rounded-full mb-8 bg-gray-200 flex justify-center items-center ">
                {profileImage ? (
                  <img src={URL.createObjectURL(profileImage)} alt="Profile" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <p className="text-gray-500">Avatar</p>
                )}
                <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" id="profilePicture" />
              </div>
            </div>
            <label htmlFor="profilePicture" className="bg-white text-black border-gray-300 focus:outline-none focus:border-black px-4 my-16 ml-16 py-2 rounded hover:border-gray-900 transition duration-300 cursor-pointer">Choose image</label>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Add your location</h3>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button onClick={handleUpload} className="w-60 bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition duration-300">Next</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
