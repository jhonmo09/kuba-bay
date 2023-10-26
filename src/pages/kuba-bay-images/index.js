import React, { useState } from "react";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import { FiX } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageList = [
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2FKuba%20bay-004.jpg?alt=media&token=626edad0-a7d3-4b96-bd3c-67b1bd8f481e",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2FKuba%20bay-075%20(1).jpg?alt=media&token=3aff6ebc-97da-49b3-93ea-f07de7a6fd30",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2FKuba%20bay-121%20(1).jpg?alt=media&token=e7ffafcc-44c6-4a51-9a92-5e3307f1228e",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2Fkubabay%20shoot-10.jpg?alt=media&token=f00aa82c-c555-4365-bec5-08913bc0da07",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2Fkubabay%20shoot-04.jpg?alt=media&token=5672cd48-42d7-4b66-bf2e-16fc3e50025e",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-bay.appspot.com/o/imagenes%2FKuba%20bay-034.jpg?alt=media&token=412fad61-43b6-44a7-9c69-14b53fe4b723",
  ],
];

const Index = () => {
  const router = useRouter();
  const [showCarousel, setShowCarousel] = useState(false);
  const [initialImage, setInitialImage] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleCloseClick = () => {
    router.push("/kuba-bay");
  };

  const handleImageClick = (imageIndex) => {
    setShowCarousel(true);
    setInitialImage(imageIndex);
  };

  const flatImageList = imageList.flat();

  return (
    <div className="flex flex-col gap-2 z-50">
      <div className="flex justify-between items-center sm:px-20 md:px-24 lg:px-36 xl:px-40 2xl:px-96 py-8">
        <div onClick={handleCloseClick} className="cursor-pointer">
          <img
            className="rotate-180"
            src="/static/images/chevron-right.svg"
            alt="arrow-icon"
          />
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              className="w-5 h-5"
              src="/static/images/share_icon.png"
              alt=""
            />
            <a href="">share</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:px-20 md:px-24 lg:px-36 xl:px-40 2xl:px-96">
        {imageList.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 cursor-pointer">
            {row.map((image, index) => {
              const imageIndex =
                imageList
                  .slice(0, rowIndex)
                  .reduce((acc, row) => acc + row.length, 0) + index;
              return (
                <div
                  key={index}
                  onClick={() => handleImageClick(imageIndex)}
                  onMouseEnter={() => setHoveredImage(imageIndex)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`transition-all duration-300 w-full ${
                    hoveredImage !== null && hoveredImage !== imageIndex
                      ? "opacity-50"
                      : ""
                  }`}
                >
                  <img
                    className="object-cover	h-full w-full"
                    src={image}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {showCarousel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 lg:p-48 2xl:p-80">
          <button
            onClick={() => setShowCarousel(false)}
            className="absolute top-2 right-2 bg-white rounded-full p-1"
          >
            <FiX size={24} />
          </button>
          <Carousel showThumbs={false} selectedItem={initialImage}>
            {flatImageList.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-full"
              >
                <img
                  className={`carousel-image object-contain  mx-auto my-auto`}
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Index;
