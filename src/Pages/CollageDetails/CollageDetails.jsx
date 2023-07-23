import React from "react";
import { useLoaderData } from "react-router-dom";
import CollageResearch from "./CollageResearch";
import Events from "./Events";
import Sports from "./Sports";

const CollageDetails = () => {
  const College = useLoaderData();
  console.log(College);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${College.image})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-serif font-bold  text-slate-300">
              Wellcome To
            </h1>
            <p className="mb-5 text-4xl font-serif font-bold text-slate-300">
              {College.collegeName}
            </p>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Get Addmitted
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-x-16 items-center justify-center mt-12 h-[70vh]">
          <div className="w-1/2">
            <img
              className="w-[65%]  rounded-lg shadow-2xl  ml-auto"
              src={College.image}
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-4xl tracking-wide text-left font-extrabold font-serif mb-7">
              <span className=" ">
                <span className="text-green-600">About</span> Us
              </span>
            </h3>
            <h1 className="text-2xl tracking-wide font-extrabold font-serif mb-7">
              How to Get Addmitted?
            </h1>
            <p className="text-justify font-serif tracking-wider w-2/3">
              {College.adimssionProceedure}
            </p>
            <button className="btn mt-3 font-sans btn-primary bg-[#192a56] tracking-wider normal-case">
              Get Admitted
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CollageResearch College={College}></CollageResearch>
      </div>
      <div className="flex items-center justify-center">
        <Events College={College}></Events>
      </div>
      <div className="flex items-center justify-center">
        <Sports College={College}></Sports>
      </div>
    </div>
  );
};

export default CollageDetails;
