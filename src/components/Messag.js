import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Messag({ messag }) {
  const { user } = useMoralis();
  const isUserMessage = messag.get("ethAddress") === user.get("ethAddress");
  return (
    <div
      className={`mx-20  flex flex-row items-center space-x-2 my-2  ${
        isUserMessage ? "justify-end" : "justify-start"
      }`}
    >
      {/* <div
        className={` text-white shadow rounded-lg ${
          isUserMessage ? "bg-success" : "bg-dark"
        }`}
        align={` ${isUserMessage ? "right" : "left"}`}
        // style={{width:'fit-content'}}
      >
        <p>{messag.get("message")}</p>
      </div> */}
      <div>
        <div className="rounded-t-lg rounded-bl-lg  bg-green-600 text-white px-6 py-2 ">
          {messag.get("message")}
        </div>
        <div>55</div>
      </div>

      {/* <div
        className={`relative h-2 w-2 ${isUserMessage && "order-last"}`}
        align={` ${isUserMessage ? "right" : "left"}`}
      >
        <Avatar username={messag.get("username")} />
      </div> */}
      {/* <p
        className={`m-auto ${isUserMessage ? "text-success" : "text-dark"}`}
        align={` ${isUserMessage ? "right" : "left"}`}
      >
        {messag.get("username")}
      </p> */}
    </div>
  );
}

export default Messag;
