// src/BackgroundCarousel.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, useBreakpointValue, Center } from "@chakra-ui/react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const BackgroundCarousel = () => {
  const maxHeight = useBreakpointValue({ base: "45px", md: "65px" });

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={false}
      customTransition="transform 1500ms ease-in-out"
      transitionDuration={2000}
      containerClass="carousel-container background-carousel"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      rewind={false}
      rewindWithAnimation={false}
      rtl={true}
    >
      <div>
        <Center>
          <Image
            src={`${process.env.PUBLIC_URL}/carousel-1/8.png`}
            maxHeight={maxHeight}
            objectFit="cover"
          />
        </Center>
      </div>
      <div>
        <Center>
          <Image
            src={`${process.env.PUBLIC_URL}/carousel-1/2.png`}
            maxHeight={maxHeight}
            objectFit="cover"
          />
        </Center>
      </div>
      <div>
        <Center>
          <Image
            src={`${process.env.PUBLIC_URL}/carousel-1/3.png`}
            maxHeight={maxHeight}
            objectFit="cover"
          />
        </Center>
      </div>
      <div>
        <Center>
          <Image
            src={`${process.env.PUBLIC_URL}/carousel-1/4.png`}
            maxHeight={maxHeight}
            objectFit="cover"
          />
        </Center>
      </div>
      <div>
        <Center>
          <Image
            src={`${process.env.PUBLIC_URL}/carousel-1/5.png`}
            maxHeight={maxHeight}
            objectFit="cover"
          />
        </Center>
      </div>
      <div>
        <Center>
          <Image
            src={`${process.env.PUBLIC_URL}/carousel-1/6.png`}
            maxHeight={maxHeight}
            objectFit="cover"
          />
        </Center>
      </div>
      <div>
        <Center>
          <Image
            src={`${process.env.PUBLIC_URL}/carousel-1/7.png`}
            maxHeight={maxHeight}
            objectFit="cover"
          />
        </Center>
      </div>
      {/* Add more items as needed */}
    </Carousel>
  );
};

export default BackgroundCarousel;
