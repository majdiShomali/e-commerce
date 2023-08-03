import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import EditProfile from "./UserEditProfile";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div className="h-full bg-gray-200 p-8">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            {false === true ? (
              <div class="flex items-center justify-center w-40 h-40 bg-gray-300 rounded-full dark:bg-gray-700">
                <svg
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
            ) : (
              <img
                src={user?.img !== undefined ? `http://localhost:5000/${user?.img}` : " " }
                className="w-40 h-40 border-4 border-white rounded-full"
              />
            )}

            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{user?.userName}</p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
            <p className="text-gray-700">Welcome to arabic recipes</p>
            <p className="text-sm text-gray-500">
              {user?.role === 0 ? "User" : "Provider"}
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <EditProfile />
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700">{user?.userName}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Birthday:</span>
                  <span className="text-gray-700">24 Jul, 1991</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Joined:</span>
                  <span className="text-gray-700">{user?.createdAt}</span>
                </li>
     
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700">{user?.email}</span>
                </li>
          
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">About</h4>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptates obcaecati numquam error et ut fugiat
                asperiores. Sunt nulla ad incidunt laboriosam, laudantium est
                unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ut, magni odio magnam commodi sunt
                ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta
                autem odio laudantium eligendi commodi distinctio!
              </p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">Fav Recipes</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                {/* {userFavData?.map((e, i) => {
                  return (
                    <>
                      <DyRecipeCardMeal
                        key={e._id}
                        Name={e.recipeName}
                        card={e}
                        index={i}
                        SAMeals={favData}
                        cardId={e._id}
                        img={e.img}
                        rate={e.rate}
                        rating={e.rating}
                        Recipe={e}
                      />
                    </>
                  );
                })} */}
              </div>
              <div className="mt-4">
                <canvas
                  id="verticalBarChart"
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: 414,
                    width: 828,
                  }}
                  width={1656}
                  height={828}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
