import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Signup() {

  const { type } = useParams();

  const [name, setName] = useState("");
  const [namep, setNamep] = useState("");

  const [email, setemail] = useState("");
  const [emailp, setemailp] = useState("");

  const [phone, setphone] = useState("");
  const [phonep, setphonep] = useState("");

  const [password, setpassword] = useState("");
  const [passwordp, setpasswordp] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    validateName(name);
    validatePassword(password);
    validateEmail(email);
    validatePhone(phone);

    if (
      validateName(name) &&
      validatePassword(password) &&
      validateEmail(email) &&
      validatePhone(phone)
    ) {
      const userData = {
        userName: name,
        email: email,
        password: password,
        phone: phone,
        role: type === "user" ? 0 : 2,
      };
       console.log(userData);
      try {
        // Send the data to the server using an HTTP POST request
        const response = await axios.post(
          "http://localhost:5000/api/users",
          userData
        );
        setemailp(response.data.error)
        localStorage.setItem("auth", response.data.token);
        window.location.href = "http://localhost:3000/";
      } catch (error) {
        console.error("Error inserting data:", error);
      }

    
    }
  };

  function validateName(name) {
    if (name === "") {
      setNamep(" !please enter your name");
      return false;
    } else {
      setNamep("");
      return true;
    }
  }

  function validateEmail(userEmail) {
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setemailp("! E-mail must be in a valid format such as example@gmail.com");
      return false;
    } else {
      setemail("");
      return true;
    }
  }
  function validatePhone(userphone) {
    if (!/^07[0-9]{8}$/.test(userphone)) {
      setphonep("! Phone number must be 10 digits starting with 07");
      return false;
    }
    setphonep("");
    return true;
  }

  function validatePassword(userPassword) {
    let password = userPassword;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setpasswordp(
        "! Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character"
      );
      return false;
    } else {
      setpasswordp("");
      return true;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
          <div>
            <img
              src="https://www.drupal.org/files/project-images/reg_confirm_email_with_button_0.png"
              className="w-32 mx-auto"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign-Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <p className="text-red-500">{emailp}</p>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p className="text-red-500">{namep}</p>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="tel"
                    placeholder="07xxxxxxxx"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                  <p className="text-red-500">{phonep}</p>

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <p className="text-red-500">{passwordp}</p>
                  <button
                    type="submit"
                    className="mt-5 bg-[#F7E1AE] tracking-wide font-semibold  text-gray-800 w-full py-4 rounded-lg hover:bg-[#A4D0A4] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign-Up</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Have An Account?
                    <Link
                      to="/Login"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Sign-In Here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex login_img bg-cover bg-center bg-no-repeat ">
          <img src="" />
        </div>
      </div>
    </div>
  );
}
