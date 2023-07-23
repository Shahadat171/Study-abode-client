import React, { useEffect, useState } from 'react';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from 'react-router-dom';

const AllColleges = () => {
    const [allColleges, setAllColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/AllColleges")
      .then((res) => res.json())
      .then((data) => setAllColleges(data));
  }, []);
    return (
        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mx-16 mt-28 mb-10 '>
              {allColleges.map((college) => (
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
                <span className="text-start font-semibold text-lg tracking-wide">
                  Events
                </span>{" "}
                : {college.events[0]}, <span>{college.events[1]}, </span>{" "}
                <span>{college.events[2]},</span>{" "}
                <span>{college.events[3]}</span>
              </p>
              <p>
                <span className="text-start font-semibold text-lg tracking-wide">
                  Sports
                </span>{" "}
                : {college.sports[0]}, <span>{college.sports[1]}, </span>{" "}
                <span>{college.sports[2]}</span>
              </p>
              <div className="mx-auto">
                <Link to={`/details/${college._id}`}>
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
    );
};

export default AllColleges;