import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HomeSlider() {
    const images = [
        "/imageshome/2.jpeg",
        "/imageshome/3.jpeg",
        "/imageshome/4.jpeg"
    ];

    return (
        <div className="w-full h-[50vh] lg:h-[90vh] relative">

            {/* STATIC TEXT */}
            <div className="absolute w-[90vw] z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <h2 className="text-6xl lg:text-8xl font-normal font-gfs text-center">
                    Innovation in Every Line
                    <div className="flex gap-4 justify-center py-4">
                        <h2 className="text-6xl lg:text-8xl font-normal font-gfs text-center ">Strength</h2>
                        <img src="/imageshome/4.jpeg" alt="" className="w-60 rounded-full border-2 border-white p-2 hidden lg:flex" />
                    </div>
                    in Every Build
                </h2>
            </div>

            {/* SMOOTH SLIDER */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,       // slide change gap
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={5000}          // slide transition time in ms (4000ms = 4 seconds)
                loop={true}           // continuous loop
                className="mySwiper h-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <img
                            src={img}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}
