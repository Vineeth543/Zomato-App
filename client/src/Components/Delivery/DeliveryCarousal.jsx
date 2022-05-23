import React from "react";
import Slider from "react-slick";

// Components
import DeliveryCatagory from "./DeliveryCatagory";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DeliveryCarausal = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/4/50674/0f9874bafb6e24669a80018b02b2bbfe_o2_featured_v2.jpg",
      title: "Burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/1/50691/92d9b4053ef0965120828b4fa4eecc3b_o2_featured_v2.jpg",
      title: "Biriyani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/4/50574/336196dfdb8fc00175472a785007b9ea_o2_featured_v2.jpg",
      title: "KFC",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/50643/cf4980e9a955625c8ab8bf5c171ba98a_o2_featured_v2.jpg",
      title: "Dum Biriyani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/7/19316327/a634fc3e15abed464229d3ad360b721d_o2_featured_v2.jpg",
      title: "Ice Cream",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/8/19813408/591434a707983edd9f96313d82303e2e_o2_featured_v2.jpg",
      title: "Pizza",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <h1 className="text-3xl font-semibold my-5">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCatagory {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCatagory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarausal;
