import React from 'react';

function Navbar() {
  // Sample profile image URL (replace it with the actual image URL once uploaded)
  const profileImageUrl = "http://res.cloudinary.com/dkp6hsvoy/image/upload/v1712409984/qwwdgzjgh47b2izmd4md.jpg";

  return (
    <header className="text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0" style={{ textDecoration: 'none' }}>
          <span className="ml-3 text-xl">Dribble</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5">Inspiration</a>
          <a className="mr-5">First Work</a>
          <a className="mr-5">Learn Design</a>
          <a className="mr-5">Go Pro</a>
          <a className="mr-5">Hire Designers</a>
        </nav>
        <div className="flex items-center">
          <img src={profileImageUrl} alt="Profile" className="w-14 h-12 rounded-full mr-2" />
          <button className="inline-flex items-center bg-pink-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-pink-900 rounded text-base mt-4 md:mt-0 mr-4">
            Upload
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button className="inline-flex items-center bg-gray-300 text-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">Profile
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zM4.77 18.77c-2.11-2.11-3.27-4.94-3.27-7.95s1.16-5.84 3.27-7.95c2.11 2.11 3.27 4.94 3.27 7.95s-1.16 5.84-3.27 7.95z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
