import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [allColleges, setAllColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/AllColleges")
      .then((res) => res.json())
      .then((data) => setAllColleges(data));
  }, []);
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="border w-[43%] shadow-xl">
        <div className="overflow-x-auto">
          <table className="table font-serif tracking-wider table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-xl font-bold">Name</th>
                <th className="text-xl font-bold">Deadline</th>
                <th className="text-xl font-bold">Seats</th>
              </tr>
            </thead>
            <tbody>
              {allColleges.map((college) => (
                <tr key={college._id}>
                  <th>
                    <img className="h-12 w-12 rounded-full" src={college.image}/>
                  </th>
                  <Link to="/getAdmitted">
                  <td className="hover:text-red-600"><span className=" text-xl hover:border-b-2 pl-0 pb-2 ml-0 hover:border-red-600 font-semibold tracking-normal ">{college.collegeName}</span></td>
                  </Link>
                  <td className="text-lg">{college.admissionDates}</td>
                  <td  className="text-lg">Available</td>
                </tr>
              ))}
              {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admission;
