// src/components/AreasSection.js
import React from "react";

const AreasSection = () => {
  return (
    <div className="mx-10 py-8 flex flex-col border-b-4 items-start gap-4 lg:ml-40">
      <h2 className="text-black font-bold mb-4 lg:mb-8 md:text-3xl lg:text-4xl">
        - Areas
      </h2>
      <div className="text-gray-700 gap-12 flex flex-col md:w-full">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0">
          <div className="flex flex-col gap-4">
            <p className="font-bold">Private Lounge</p>
            <div className="flex items-center gap-4">
              <img
                src="/static/images/salonimezzanine_icon.svg"
                className="text-purple-500 h-8 w-8 mr-2"
              />
              <p>Total Capacity</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/static/images/chair_icon.svg"
                className="text-purple-500 h-8 w-8 mr-2"
              />
              <p>Interior</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/static/images/people_icon.svg"
                className="text-purple-500 h-8 w-8 mr-2"
              />
              <p>Bathrooms</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:text-start">
            <p className="font-bold">Capacity:</p>
            <div className="flex items-center gap-4 gap-4 mt-1">
              <p>125</p>
            </div>
            <div className="flex items-center gap-4">
              <p>Up to 55</p>
            </div>
            <div className="flex items-center gap-4">
              <p>2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:justify-start md:gap-0">
          <div className="flex flex-col gap-6 md:items-start">
            <p className="font-bold">Outdoor Garden:</p>
            <div className="flex gap-4">
              <img
                src="/static/images/tree_icon.svg"
                className="text-purple-500 h-8 w-8 mr-2"
              />
              <p>Total Capacity: 70</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasSection;
