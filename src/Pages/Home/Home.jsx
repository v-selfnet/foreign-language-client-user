import { Helmet } from "react-helmet-async";
import TopSlider from "./TopSlider";

const Home = () => {
    return (
        <div>
            <Helmet><title>Language Camp | Home</title></Helmet>
            <TopSlider></TopSlider>
        </div>
    );
};

export default Home;