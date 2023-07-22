import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div className="h-[100vh] pt-16 pb-5">
      <h2 className="font-mono text-center font-extrabold mb-3 text-xl text-green-600">
        <i>Best Colleges</i>
      </h2>
      <h3 className="text-4xl tracking-wide font-extrabold font-serif text-center mb-10">
        Your Dream Colleges
      </h3>
      <div className="mt-3 flex items-center justify-center gap-x-10">
        {colleges.map((college) => (
          <div
            className="card w-[450px] bg-base-100 shadow-xl"
            key={college._id}
          >
            <figure className="px-10 pt-10">
              <img
                src={college.image}
                alt="Shoes"
                className="rounded-xl object-contain"
              />
            </figure>
            <div className="card-body font-serif">
              <div className="flex items-center justify-between">
              <h2 className="text-start card-title">{college.collegeName}</h2>
              <Rating
                  className="h-6"
                  style={{ maxWidth: 140 }}
                  value={3}
                  readOnly
                />
              </div>
              <p className=" text-justify">{college.researchHistory}</p>
              <h2 className="text-start font-semibold text-lg tracking-wide">
                DeadLilne : {college.admissionDates}
              </h2>
              <p className="text-justify">
                <span className="text-start font-semibold text-lg tracking-wide">Events</span> : {college.events[0]}, <span>{college.events[1]}, </span> <span>{college.events[2]},</span> <span>{college.events[3]}</span>
              </p>
              <p>
                <span className="text-start font-semibold text-lg tracking-wide">Sports</span> : {college.sports[0]}, <span>{college.sports[1]}, </span> <span>{college.sports[2]}</span>
              </p>
              <div className="mx-auto">
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
