import React, { Component } from "react";
import Identicon from "identicon.js";
import * as FaIcons from "react-icons/fa";
import { Button } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import { RWebShare } from "react-web-share";

import { Link } from "react-router-dom";
import {
  BookOpenIcon,
  CashIcon,
  HeartIcon,
  MusicNoteIcon,
  PhotographIcon,
  SupportIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { ellipseAddress } from "../lib/helpers";

class Main extends Component {
  // state = {
  //   isOpen: false,
  // };

  // openModal = () => this.setState({ isOpen: true });
  // closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <div className="bg-gray-100 h-full">
        <div className="row">
          <main
            role="main"
            className="flex flex-row md:space-x-7 px-6 md:px-0 overflow-hidden w-full md:mx-20"
          >
            <div className="w-2/12 hidden md:block ">
              <div className="bg-white rounded-t mt-4 p-4 space-y-3 mb-4 shadow-md">
                <span>Post about</span>
                <div className="flex flex-row items-center space-x-4 ">
                  <BookOpenIcon className="h-7" />
                  <span>Education</span>
                </div>
                <div className="flex flex-row items-center space-x-4 ">
                  <HeartIcon className="h-7" />
                  <span>Health</span>
                </div>
                <div className="flex flex-row items-center space-x-4 ">
                  <SupportIcon className="h-7" />
                  <span>Sports</span>
                </div>
                <div className="flex flex-row items-center space-x-4 ">
                  <MusicNoteIcon className="h-7" />
                  <span>Entertainment</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 ">
              <div>
                <div className="bg-white rounded-t mt-4  mb-4 shadow-md">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      const description = this.imageDescription.value;
                      this.props.uploadImage(description);
                    }}
                  >
                    <textarea
                      className="bg-white outline-none focus:visible w-full rounded-md p-4"
                      placeholder="What is happening..."
                      rows={4}
                      ref={(input) => {
                        this.imageDescription = input;
                      }}
                    ></textarea>
                    <div className="flex flex-row  border-t-2 space-x-2 p-4 h-20 ">
                      <PhotographIcon
                        onClick={() => {
                          this.upload.click();
                        }}
                        className="h-6 text-gray-500"
                      />
                      <input
                        ref={(ref) => (this.upload = ref)}
                        style={{ display: "none" }}
                        type="file"
                        accept=".jpg, .jpeg, .png, .bmp, .gif"
                        onChange={this.props.captureFile}
                      />
                      <p className="mb-4">Photo</p>

                      <button
                        type="submit"
                        className="bg-gradient-to-r active:outline-none active:border-none border-2 px-3 border-green-500 text-center w-max rounded-full cursor-pointer text-green-500"
                      >
                        Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {this.props.images
                .sort((a, b) => a.tipAmount - b.tipAmount)
                .map((image) => {
                  console.log(image.author);
                  console.log(image.id.toString());
                  return (
                    <div className="bg-white rounded-md shadow-md my-4 w-full ">
                      <Link
                        to="/profile"
                        state={{
                          id: image.id.toString(),
                          author: image.author,
                        }}
                      >
                        <div className=" p-4 flex flex-row items-center space-x-2">
                          <img
                            className="rounded-full"
                            width="40"
                            height="40"
                            src={`data:image/png;base64,${new Identicon(
                              image.author,
                              30
                            ).toString()}`}
                            alt="identicon"
                          />
                          <p>{ellipseAddress(image.author)}</p>
                        </div>
                      </Link>
                      <div>
                        <div class="w-full h-full">
                          {/* <div className="object-cover h-96 w-full">
                            <iframe
                              className=" aspect-video "
                              align="middle"
                              src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                            ></iframe>
                          </div> */}

                          <img
                            src={image.hash}
                            className="object-cover h-96 w-full"
                          />
                        </div>
                      </div>
                      <div className="p-4 flex flex-row justify-between items-center">
                        <div>
                          <p className="text-xl text-gray-500 ">
                            {image.description}
                          </p>
                          <span className="flex flex-row">
                            <CashIcon className="h-7" /> :{" "}
                            {window.web3.utils.fromWei(
                              image.tipAmount.toString(),
                              "Ether"
                            )}{" "}
                            ETH
                          </span>
                        </div>

                        <div className="p-4">
                          <button
                            className=" bg-gradient-to-r active:outline-none active:border-none border-2 px-4 py-2 border-green-500 text-center w-max rounded-full cursor-pointer text-green-500"
                            name={image.id}
                            onClick={(event) => {
                              let tipAmount = window.web3.utils.toWei(
                                "0.1",
                                "Ether"
                              );
                              console.log(event.target.name, tipAmount);
                              this.props.tipImageOwner(
                                event.target.name,
                                tipAmount
                              );
                            }}
                          >
                            TIP 0.1 ETH
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="w-2/12 hidden md:block ">
              <div className="bg-white rounded-t mt-4 p-4 space-y-3 mb-4 shadow-md">
                <span>Top Accounts</span>
                {this.props.images
                  .filter(
                    (v, i, a) =>
                      a.findIndex((v2) => v2.author === v.author) === i
                  )
                  .sort((a, b) => a.tipAmount - b.tipAmount)
                  .map((image) => {
                    return (
                      <>
                        <div className="flex flex-row items-center space-x-4 ">
                          <Link
                            to="/profile"
                            state={{
                              id: image.id.toString(),
                              author: image.author,
                            }}
                          >
                            <img
                              className="rounded-full"
                              width="40"
                              height="40"
                              src={`data:image/png;base64,${new Identicon(
                                image.author,
                                30
                              ).toString()}`}
                              alt="identicon"
                            />
                          </Link>
                          <span>{ellipseAddress(image.author)}</span>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
