import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StickyNavbar from "./components/StickyNavbar";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp"
import UserProfile from "./pages/user/UserProfile";


function App() {
  const [hideRouter1, setHideRouterUser] = useState(false);



  const AppRouter1 = () => {
    return (
      <Router>
        <StickyNavbar/>
        <Routes>
          <Route index element={<Home />} />    
          <Route path="/login" element={<Login />} />    
          <Route path="/UserProfile" element={<UserProfile />} />    
          <Route path="/Signup/:type" element={<SignUp />} />    
        </Routes>
      </Router>
    );
  };





  return (
   <>
        {hideRouter1 ? null : (
        <>
          <AppRouter1 />
        </>
      )}
   </>
  );
}

export default App;
