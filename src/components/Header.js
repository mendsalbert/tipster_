import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import photo from "../photo.png";

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
    <div className="flex flex-col justify-center">
      <div>
        <Avatar logoutOnPress />
      </div>
    </div>
  );
}

export default Header;
