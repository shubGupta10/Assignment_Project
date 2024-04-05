import React from 'react';

function Hero() {
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
      <h2 className='font-bold mt-0'>xyz123@gmail.com</h2>
      </div>
      <p className="text-gray-600 mt-2 text-center mb-8">Click the confirmation link in the email to begin using dribble.</p>
      <p className="text-gray-600 mt-2 text-center mb-8">Didn't recieve the email? Check your spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-pink-800 font-bold '>resend the confirmation email</span> </p>
      <p className="text-gray-600 mt-2 text-center mb-8">Wrong email address <span className='text-pink-800 font-bold'>Change it.</span></p>
    </div>
  )
}

export default Hero;
