import { Helmet } from "react-helmet-async";
import TopSlider from "./TopSlider";
import Courses from "./Courses";
import Instructor from "./Instructor";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Helmet><title>Summer Camp | Home</title></Helmet>
            <TopSlider></TopSlider>
            <Instructor></Instructor>
            <Courses></Courses>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;