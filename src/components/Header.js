import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import photo from "../photo.png";
import { StatusOnlineIcon } from "@heroicons/react/outline";

function Header() {
  const { user } = useMoralis();
  //   Welcome {user.getUsername()}
  return (
    // <div className="w-8/12 pt-4">
    //   <div className="row">
    //     <div className="col" align="center">
    //       <div>
    //         <Avatar logoutOnPress />
    //       </div>
    //       <h2 className="text-white font-bold">Welcome {user.getUsername()}</h2>
    //     </div>
    //     <div className="col mt-5" align="right">
    //       <ChangeUsername />
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col   justify-center items-center pt-8 mb-5">
      <div className="bg-white px-28 py-8  flex flex-col justify-center items-center w-max shadow-md rounded-md">
        <div>
          <Avatar logoutOnPress />
        </div>
        <div className="flex flex-col items-center justify-center">
          <StatusOnlineIcon className="h-8 mt-2 text-green-600" />
          <p className="text-green-600 -mt-2">Online</p>
        </div>
        <h2 className="text-gray-500 -mt-3 text-xl font-bold">
          Welcome {user.getUsername()}
        </h2>
        <ChangeUsername />
      </div>
    </div>
  );
}

export default Header;
