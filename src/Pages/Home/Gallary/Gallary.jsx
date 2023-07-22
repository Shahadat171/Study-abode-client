import big1 from "../../../assets/graduates/boro1.jpg"
import big2 from "../../../assets/graduates/boro2.jpg"
import choto1 from "../../../assets/graduates/choto1.jpg"
import choto2 from "../../../assets/graduates/choto2.jpg"
import choto3 from "../../../assets/graduates/choto3.jpg"
import choto4 from "../../../assets/graduates/choto4.jpg"

const Gallary = () => {
  return (
    <div>
      <div className="container mx-auto h-[100vh] py-4">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={choto1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={choto2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={big1}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={big2}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={choto3}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={choto4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
