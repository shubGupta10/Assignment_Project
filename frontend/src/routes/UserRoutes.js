import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup/Signup.js";
import ProfileOne from "../pages/profile/ProfileOne.js"
import ProfileTwo from "../pages/profile/ProfileTwo.js"
import Mail from "../pages/email/Mail.js"


function UserRoutes(){
    return(
        <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/profile-one" element={<ProfileOne />} />
      <Route path="/profile-two" element={<ProfileTwo />} />
      <Route path="/mail" element={<Mail />} />
    </Routes>
    )
}

export default UserRoutes;