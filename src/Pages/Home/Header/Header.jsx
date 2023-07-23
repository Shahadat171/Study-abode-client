import cover from "../../../assets/cover.jpg"
const Header = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${cover})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-serif font-bold  text-slate-300">A journey to Excllence</h1>
            <p className="mb-5 text-4xl font-serif font-bold text-slate-300">Get addmitted to your desired college.</p>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Addmitted</button>
          </div>
        </div>
      </div>
    );
};

export default Header;