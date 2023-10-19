// src/components/RestaurantDescription.js
import React from "react";

const RestaurantDescription = () => {
  return (
    <div className="mx-10 py-8 flex flex-col lg:ml-40">
      <h2 className="text-black font-bold mb-4 lg:mb-8 md:text-3xl lg:text-4xl">
        - Description
      </h2>
      <p className="text-gray-700 text-justify sm:leading-tight">
        Immerse yourself in old-world Cuba at our Bayside Miami location. A more
        casual experience than our Doral location, the venue offers options for
        parties as small as 10 and as large as 125. Choose from our outdoor
        waterfront garden area with seating up to 70 or our indoor restaurant
        with seating up to 55.
      </p>
    </div>
  );
};

export default RestaurantDescription;
