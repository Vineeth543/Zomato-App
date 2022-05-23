import React from "react";

// Components
import Navbar from "../Components/Navbar";
import FoodTabs from "../Components/FoodTab";

const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <FoodTabs />
      <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
    </>
  );
};

export default HomeLayout;
