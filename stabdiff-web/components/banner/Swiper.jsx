import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/material";

const StyledSlide = styled(SwiperSlide)(({ theme }) => ({
  height: "650px",
  width: "1280px",
  backgroundColor: "black",
  borderRadius: "24px",
  position: "relative",
  overflow: "hidden"
}));
const StyledSwiper = styled(Swiper)(({ theme }) => ({
  height: "650px",
  width: "1280px",
  backgroundColor: "black",
  borderRadius: "24px",
  position: "relative",
  overflow: "hidden"
}));
const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover"
}));

const slides = [1, 2, 3, 4, 5];

const Swipers = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <>
      <StyledSwiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {slides.map((e, i) => (
          <StyledSlide>
            <StyledImage
              src={`https://random.imagecdn.app/${getRandomInt(
                50,
                1000
              )}/${getRandomInt(50, 1000)}`}
              alt={`Image`}
            />
          </StyledSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default Swipers;
