// src/components/ImageCarousel.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  const router = useRouter(); // Obtén el objeto router
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2FKuba%20bay-004.jpg?alt=media&token=626edad0-a7d3-4b96-bd3c-67b1bd8f481e",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2FKuba%20bay-075%20(1).jpg?alt=media&token=3aff6ebc-97da-49b3-93ea-f07de7a6fd30",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2FKuba%20bay-121%20(1).jpg?alt=media&token=e7ffafcc-44c6-4a51-9a92-5e3307f1228e",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2Fkubabay%20shoot-10.jpg?alt=media&token=f00aa82c-c555-4365-bec5-08913bc0da07",
  ];

  const handleShowAllClick = () => {
    router.push("/kuba-bay-images");
  };

  return (
    <div className="w-full flex flex-col mt-4 items-center gap-10 text-bold sm:h-full md:pt-12 md:px-24 md:pb-0 md:text-left lg:px-48 bg-gradient-custom">
      <h1 className="text-center pt-8 md:text-left md:text-4xl text-custom-brown">
        Kuba on the Bay Private Events
      </h1>
      <div className="hidden md:rounded-3xl md:grid md:grid-cols-2 md:gap-4 md:h-full md:w-full lg:gap-2 custom-container">
        <img
          src={images[0]}
          alt={`Image 1`}
          className="object-cover h-full w-full md:rounded-3xl col-span-1 max-h-84 custom-image-1"
        />
        <div className="relative grid grid-cols-1 grid-rows-2 gap-6 h-full col-span-1 md:gap-4 lg:gap-2 custom-container">
          {images.slice(1, 2).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 2}`}
              className="object-cover h-full w-full md:rounded-3xl col-span-1 row-span-1 max-h-44 lg:max-h-80 custom-image-2"
            />
          ))}
          <div className="grid grid-cols-2 grid-rows-1 gap-6 h-full col-span-1 row-span-1 lg:gap-2">
            {images.slice(2).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 3}`}
                className="object-cover h-full w-full md:rounded-3xl col-span-1 row-span-1 max-h-48 lg:max-h-80 custom-image-3"
              />
            ))}
          </div>
          <button
            onClick={handleShowAllClick}
            className="absolute hover:bg-gray-300 bg-gray-100 bottom-3 right-1 border-1 font-semibold py-1 px-4 rounded flex items-center text-black justify-center gap-2 w-36 hidden md:right-4 md:flex transparent-50 md:w-28 md:gap-1 md:px-0"
          >
            <img
              className="w-6 md:w-5"
              src="/static/images/grid.svg"
              alt="show-more"
            />
            <p className="text-base md:text-sm">Show all</p>
          </button>
        </div>
      </div>
      <div className="carousel-container relative">
        <Carousel
          className="md:hidden w-full"
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-80 flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="object-cover h-full w-full"
                style={{ width: "100%", height: "100%" }} // Establece un tamaño fijo
              />
            </div>
          ))}
        </Carousel>
        <button
          onClick={handleShowAllClick}
          className="absolute top-2 right-2 bg-white font-semibold py-1 px-4 rounded flex items-center text-black justify-center gap-2 w-36 md:hidden"
        >
          <img className="w-6" src="/static/images/grid.svg" alt="show-more" />
          <p className="text-base">Show all</p>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
