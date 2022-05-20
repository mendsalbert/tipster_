import React from "react";
import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating } = useMoralis();
  const setUsername = () => {
    const username = prompt(`Enter your new username`);
    if (!username) return;
    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="bg-gradient-to-r active:outline-none active:border-none border-2 px-3 border-green-500 text-center w-max rounded-full cursor-pointer text-green-500"
      >
        Change username
      </button>
    </div>
  );
}

export default ChangeUsername;
