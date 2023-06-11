import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const TopSlider = () => {
    const [photos, setFotos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/slider')
            .then(res => res.json())
            .then(data => {
                setFotos(data)
            })
            .catch(error => console.error(error))
    }, [])
    return (
        <>
            <div className='text-center my-10'>
                <h3>Total Language: {photos.length}</h3>
                <h3 className='text-3xl'>Can Learn Following Languages</h3>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    photos.map(foto => <SwiperSlide key={foto._id}>
                        <img className="rounded-2xl border-2" src={foto.image} alt="" />
                        <h3 className="text-center uppercase">{foto.name}</h3>
                    </SwiperSlide>)
                }
            </Swiper>

        </>
    );
};

export default TopSlider;