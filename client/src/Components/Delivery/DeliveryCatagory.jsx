import React from "react";

const DeliverySmCard = ({ image, title }) => {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md w-34 md:w-56">
        <div className="w-full h-24 md:h-28">
          <img
            src={image}
            alt="food"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div>
          <h3 className="text-lg my-1 text-center font-semibold">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryLgCard = ({ image, title }) => {
  return (
    <>
      <div className="hidden lg:block w-screen h-96 bg-gray-100">
        <div className="hidden lg:block py-24 w-80 h-58">
          <div className="w-full h-48">
            <img
              src={image}
              alt="food"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <h3 className="text-2xl my-1 font-medium">{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

const DeliveryCatagory = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCatagory;
