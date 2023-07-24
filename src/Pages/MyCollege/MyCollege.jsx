import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [allColleges, setAllColleges] = useState([]);
  const [collegeName, setCollegeName] = useState("");
  //   let [myCollege, setMyCollege] = useState({})
  useEffect(() => {
    fetch("http://localhost:5000/AllColleges")
      .then((res) => res.json())
      .then((data) => setAllColleges(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/myCollege?name=${user?.displayName}`)
      .then((res) => res.json())
      .then((data) => setCollegeName(data[0].College));
  }, [user.displayName]);

  const myCollege = allColleges.find(
    (College) => College.collegeName == collegeName
  );
  
  const handleReview= (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = user?.photoURL ;
    const message = form.message.value;
    const rating = form.rating.value;
    const college = myCollege?.collegeName
    const review = {name, image,message, rating, college}
    fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire(
              "Added",
              "Your Review has been added",
              "success"
            );
            form.reset();
          }
        });
  }
  return (
    <div>
      <div className="h-[70vh]">
        <div className="w-full flex items-center justify-center">
          <div className="card rounded bg-gray-50 lg:card-side  shadow-xl border-0 mt-28 max-w-[1200px] mx-auto">
            <figure className="w-[45%]">
              <img className="h-full" src={myCollege?.image} alt="Album" />
            </figure>
            <div className="card-body ml-12">
              <h2 className="card-title font-serif text-3xl text-[#192a56]">
                {myCollege?.collegeName}
              </h2>

              <Rating
                className="h-6"
                style={{ maxWidth: 140 }}
                value={3}
                readOnly
              />
              <div className="flex w-5/6 mt-2 font-serif text-xl items-center justify-start font-bold">
                <p className="flex justify-start items-center">
                  Admission Deadline :{" "}
                  <span className="font-mono ml-2">
                    {" "}
                    {myCollege?.admissionDates}
                  </span>
                </p>
              </div>
              <p className="w-[500px] text-justify font-serif font-medium tracking-wider">
                {myCollege?.researchHistory}
              </p>
              <p className="text-xl font-bold">Stay With Us</p>
              <div className="w-48 ml-0">
                <button className="bg-[#192a56] flex ml-0 justify-center items-center gap-x-2 font-sans hover:bg-[#4A07DA] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-none">
                  Add Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Add Review
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Please give a review about your desired what facilities you want
            from them and how they can improve for better education
          </p>
          <form onSubmit={handleReview} action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Rating
              </label>
              <select
                name="rating"
                id="countries"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#192a56] flex ml-0 justify-center items-center gap-x-2 font-sans hover:bg-[#4A07DA] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-none"
            >
              Send Review
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MyCollege;
