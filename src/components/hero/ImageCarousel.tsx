"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/app/globals.css";
import Image, { StaticImageData } from "next/image";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// import images
import img2 from "/public/image2.webp";
import img4 from "/public/image6.webp";
import img1 from "/public/fond1.webp";
import img3 from "/public/fond2.webp";
import img5 from "/public/fond3.webp";
import img6 from "/public/fond4.webp";
import img7 from "/public/fond5.webp";

const imageItems = [img2, img4, img1, img3, img5, img6, img7];

const ImageCarousel = ({
  otherImages,
}: {
  otherImages?: StaticImageData[];
}) => {
  const images = otherImages || imageItems;

  return (
    <div className="absolute inset-0">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper relative"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt="image"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
