const CollageResearch = ({ College }) => {
  console.log(College);
  return (
    <div>
      <h2 className="text-4xl tracking-wide font-extrabold font-serif my-5 text-center">
        Researach Workshop
      </h2>
      <div className="flex w-2/3 items-center justify-center gap-x-10 mx-auto">
        <div className="w-full md:w-1/2 py-8 pr-8">
          <div className="group cursor-pointer">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                className="w-full rounded-lg transform hover:scale-105 transition duration-500"
                src={College.works1}
                alt=""
              />
            </div>
            <p className="mb-6 text-gray-500 font-medium tracking-tight">
              <span className="mr-4 text-indigo-500 font-semibold">
                Insights
              </span>
              <span>{College.date1}</span>
            </p>
            <h3
              className="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline"
              style={{ letterSpacing: "-0.5px" }}
            >
              {College.name1}
            </h3>
            <p className="text-xl">{College.details1}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="group cursor-pointer">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                className="w-full rounded-lg transform hover:scale-105 transition duration-500"
                src={College.works2}
                alt=""
              />
            </div>
            <p className="mb-6 text-gray-500 font-medium tracking-tight">
              <span className="mr-4 text-indigo-500 font-semibold">
                Insights
              </span>
              <span>{College.date1}</span>
            </p>
            <h3
              className="mb-4 text-3xl group-hover:text-gray-900 font-semibold group-hover:underline"
              style={{ letterSpacing: "-0.5px" }}
            >
              {College.name1}
            </h3>
            <p className="text-xl">{College.details1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageResearch;
