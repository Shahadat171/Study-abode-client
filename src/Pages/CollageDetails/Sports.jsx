import React from "react";
import sports1 from "../../assets/Sports/pexels-img-2116469.jpg"
import sports2 from "../../assets/Sports/pexels-pavel-danilyuk-6203510.jpg"
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Sports = ({ College }) => {
  return (
    <div className="mt-14">
         <h2 className="text-4xl tracking-wide font-extrabold font-serif my-10 text-center">
        Annual Sports
      </h2>
      <div className="flex w-2/3 items-center justify-center mx-auto">
        <div className="w-full md:w-1/2 py-8 pr-8">
          <div className="group cursor-pointer">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                className="h-80 w-[43rem]   rounded-lg transform hover:scale-105 transition duration-500"
                src={sports1}
                alt=""
              />
            </div>
            <p className="mb-6 text-gray-500 flex items-center justify-between font-medium tracking-tight">
              <span className="mr-4 font-serif text-2xl text-indigo-500 font-semibold">
                BasekeBall
              </span>
              <Rating
                  className="h-6"
                  style={{ maxWidth: 140 }}
                  value={3}
                  readOnly
                />
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="group cursor-pointer">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                className="h-80 w-[43rem]  rounded-lg transform hover:scale-105 transition duration-500"
                src={sports2}
                alt=""
              />
            </div>
            <p className="mb-6 text-gray-500 flex items-center justify-between font-medium tracking-tight">
              <span className="mr-4 font-serif text-2xl text-indigo-500 font-semibold">
                VollyBall
              </span>
              <Rating
                  className="h-6"
                  style={{ maxWidth: 140 }}
                  value={3}
                  readOnly
                />
            </p>
            {/* <h3
              className="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline"
              style={{ letterSpacing: "-0.5px" }}
            >
              {College.name1}
            </h3>
            <p className="text-xl">{College.details1}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
