import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const { email } = useContext(UserContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/getuser/:id`);
        setUserData(response.data);
      } catch (error) {
        console.error("Can't find the user:", error);
      }
    }

    if (email) {
      fetchData();
    }
  }, [email]);

  const resendConfirmationEmail = async () => {
    if (!userData || !userData.email) {
      console.error('No email address found for the user.');
      return;
    }
  
    try {
      await axios.post('http://localhost:8000/api/users/send-thank-you-email', { email: userData.email });
      console.log('Thank you email resent successfully!');
    } catch (error) {
      console.error('Error resending thank you email:', error);
    }
  };


  const takemetohome = () => {
    navigate("/");
  }

  return (
    <div>
      <div className='flex justify-center mt-4'>
        <h1 className='text-black font-bold text-3xl'>Please verify your email...</h1>
      </div>
      <div className="flex justify-center mt-4">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YJV_Ht5Q889lc9fFP4Zmb8bDY8U2I54xesJnASS0iw&s' className='mt-2' height={130} width={130} />
      </div>
      <div className='text-center' >
        <p className="text-gray-600 mt-2 text-center mb-8">Please verify your email address. we've sent a confirmation email to: </p>
        <h2 className='font-bold mb-4' >{email}</h2>
      </div>
      <p className="text-gray-600 mt-2 text-center mb-8">Click the confirmation link in the email to begin using dribble.</p>
      <p className="text-gray-600 mt-2 text-center mb-8">Didn't receive the email? Check your spam folder, it may have been caught by a filter. If you still don't see it, you can <Link to="#" className='text-pink-800 font-bold' onClick={resendConfirmationEmail}>resend the confirmation email</Link></p>
      <p onClick={takemetohome} className="text-gray-600 mt-2 cursor-pointer text-center mb-8">
        Wrong email address<span className='text-pink-800 font-bold'>Change it.</span>
      </p>
    </div>
  )
}

export default Hero;
