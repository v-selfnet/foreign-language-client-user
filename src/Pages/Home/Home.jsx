import { Helmet } from "react-helmet-async";
import TopSlider from "./TopSlider";
import Courses from "./Courses";
import Instructor from "./Instructor";

const Home = () => {
    return (
        <div>
            <Helmet><title>Language Camp | Home</title></Helmet>
            <TopSlider></TopSlider>
            <Instructor></Instructor>
            <Courses></Courses>
        </div>
    );
};

export default Home;