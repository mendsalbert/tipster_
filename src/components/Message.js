import React from "react";
import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Messag from "./Messag";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/outline";
const MINS_DURATION = 59;
function Message() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-5">
      <div className="p-4">
        {data.map((messag) => (
          <Messag key={messag.id} messag={messag} />
        ))}
      </div>

      <div
        ref={endOfMessagesRef}
        className="flex flex-row items-center justify-center text-lg "
      >
        <CheckCircleIcon className="h-7 text-green-500" />
        {""} You're up to date {user.getUsername()}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
    </div>
  );
}

export default Message;
