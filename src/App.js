import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";

//---------------------user-------------------------//
import Home from "./pages/Home";
import StickyNavbar from "./components/StickyNavbar";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import UserProfile from "./pages/user/UserProfile";
import CartPage from "./pages/user/CartPage";
import ForgetPassword from "./pages/registration/ForgetPassword"
//---------------------provider-------------------------//
import ProviderHome from "./pages/providerFiles/ProviderHome";
function App() {
  const [hideRouterUser, setHideRouterUser] = useState(false);
  const [hideRouterProvider, setHideRouterProvider] = useState(true);
  const [hideRouterAdmin, setHideRouterAdmin] = useState(true);

  const [render, setRender] = useState(false);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const role =
        user.role === 0
          ? [false, true, true]
          : user.role === 2
          ? [true, false, true]
          : [true, true, false];
      setHideRouterUser(role[0]);
      setHideRouterProvider(role[1]);
      setHideRouterAdmin(role[2]);
      setRender(true)
    }else{
      setRender(true)
    }
  }, [user]);

  const AppRouter1 = () => {
    return (
      <Router>
        <StickyNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/Signup/:type" element={<SignUp />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </Router>
    );
  };
  const AppRouter2 = () => {
    return (
      <Router>
        <StickyNavbar />
        <Routes>
          <Route index element={<ProviderHome />} />
        </Routes>
      </Router>
    );
  };
  const AppRouter3 = () => {
    return (
      <Router>
        <StickyNavbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    );
  };

  return (
    <>

    {render ? 
    
    <>
    
    {hideRouterUser ? null : (
        <>
          <AppRouter1 />
        </>
      )}
      {hideRouterProvider ? null : (
        <>
          <AppRouter2 />
        </>
      )}
      {hideRouterAdmin ? null : (
        <>
          <AppRouter3 />
        </>
      )}
    
    
    </>
    
    
    : null}
      
    </>
  );
}

export default App;
