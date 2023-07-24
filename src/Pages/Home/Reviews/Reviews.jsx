import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  console.log(allReviews)
  return (
    <div className="mt-20">
      <h2 className="font-mono text-center font-extrabold mb-3 text-xl text-green-600">
        <i>College Reviews</i>
      </h2>
      <h2 className="text-4xl tracking-wide font-extrabold font-serif text-center">
        Students Testimonial
      </h2>
      <div className="grid grid-cols-2 items-center gap-x-8 justify-center mt-10 mx-36">
      {allReviews.map((review) => (
          <div
            className="p-4 flex items-center justify-center gap-x-7"
            key={review._id}
          >
           <div>
            <img className="h-12 w-12 rounded-full" src={review.image} alt="" />
            <h1 className="text-lg font-semibold">{review.name}</h1>
            <Rating
                  className="h-6"
                  style={{ width: "100px" }}
                  value={review.rating}
                  readOnly
                />
           </div>
           <div>
            <h1 className="text-xl font-bold">{review.college}</h1>
            <p className="text-justify tracking-wider text-lg">{review.message}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
