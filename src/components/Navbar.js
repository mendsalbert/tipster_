import React, { Component } from "react";
import Identicon from "identicon.js";
import Menu from "./Menu";
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { ellipseAddress } from "../lib/helpers";
// import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="bg-white shadow-lg w-full  flex flex-row items-center md:justify-between justify-center px-20 md:px-20">
        <div className="hidden md:block">
          <img src="/photo.png" className="w-20" />
        </div>
        <div className="flex flex-row items-center justify-center text-gray-600 space-x-8 py-4 md:space-x-20 md:py-2">
          <a href="/">
            <HomeIcon className="h-8 text-green-500" />
          </a>
          <a href="/myprofile">
            <UserIcon className="h-8 text-green-500" />
          </a>
          <a href="/messagemain">
            <ChatIcon className="h-8 text-green-500" />
          </a>
          <a href="/explore">
            <SearchIcon className="h-8 text-green-500" />
          </a>
        </div>
        <div className="flex-row items-center hidden md:flex space-x-6">
          {this.props.account ? (
            <img
              className="ml-2 rounded-full"
              width="40"
              height="40"
              src={`data:image/png;base64,${new Identicon(
                this.props.account,
                30
              ).toString()}`}
              alt="identicon"
            />
          ) : (
            <span></span>
          )}

          <p id="account" className="text-xl text-gray-600 font-bold">
            {ellipseAddress(this.props.account)}
            {/* {this.props.account} */}
          </p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
