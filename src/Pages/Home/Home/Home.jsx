import Colleges from "../../Colleges/Colleges/Colleges";
import Blogs from "../Blogs/Blogs";
import Gallary from "../Gallary/Gallary";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Gallary></Gallary>
            <Colleges></Colleges>
            <Blogs></Blogs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;