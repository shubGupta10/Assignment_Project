import React from 'react';


function Footer() {
  return (
    <section className="relative overflow-hidden py-10 border md: text-center border-t-2 border-t-black">
    <div className="relative z-10 mx-auto max-w-7xl px-4">
      <div className="-m-6 flex flex-wrap">
        <div className="w-full p-6 md:w-1/2 lg:w-1/5">
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 flex-col items-center">
              {/* Dribble Logo */}
              
              <img className="h-40 w-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7y_mxPmaup9g8ydypsk7ERQCNlo9HxRqx6-CrRiLYMQWwy7kJpnwWiESnGq80G4QZGyc&usqp=CAU'" alt="Dribble Logo" />
              <p className="text-md text-gray-600">
                 Dribbble is the world's leading community for creatives to share, grow and get hired.
              </p>
            </div>
            <div className="flex justify-center">
                {/* Social Media Icons */}
                <img className="h-6 w-6 mr-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="Facebook Icon" />
                <img className="h-6 w-6 mr-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter Icon" />
                <img className="h-6 w-6 mr-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="LinkedIn Icon" />
                <img className="h-6 w-6 mr-4 cursor-pointer"  src="https://static.vecteezy.com/system/resources/previews/022/257/067/non_2x/icon-media-social-instagram-free-vector.jpg" alt="Instagram Icon" />
                <img className="h-6 w-6 mr-4 cursor-pointer" src="https://www.svgrepo.com/show/332087/google-circle.svg" alt="Google Icon" />
              </div>

          </div>
        </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/5">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-bold uppercase text-gray-500">
                For designers
              </h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Go Pro!
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Explore design work
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Design blog
                  </a>
                </li>
                <li>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Overtime podcast
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/5">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-bold uppercase text-gray-500">
                Hire designers
              </h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Post a job opening
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Post a freelance project
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Search for designers
                  </a>
                </li>
                <li>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Advertise with us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/5">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-bold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Support
                  </a>
                </li>
                <li>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Media kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/5">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Directories
              </h3>
              <ul>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Design jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Designers for hire
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Freelance designers for hire
                  </a>
                </li>
                <li>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="/">
                    Tags
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/5">
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
