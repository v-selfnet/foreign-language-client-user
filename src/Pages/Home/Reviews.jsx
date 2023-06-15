import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../Components/SectionTitle";

const Reviews = () => {

    const { data: reviews = [] } = useQuery(['reviews'], async () => {
        const res = await fetch('https://foreign-language-server-pi.vercel.app/reviews')
        return res.json();
    })

    return (
        <div>
            <SectionTitle
                subHead={"What our client say"}
                head={"R e v i e w s"}
            ></SectionTitle>
            <Marquee className="bg-red-200 my-6">
                <p className="text-center text-2xl py-6">Total Reviews: {reviews.length}</p>
            </Marquee>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center px-10  mx-10 text-center space-y-6">
                            <Rating rewind={true} style={{ maxWidth: 180 }} value={review.rating} readOnly />
                            <p>{review.details}</p>
                            <p className="text-3xl pb-10 text-orange-500 font-semibold divider">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;