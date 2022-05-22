import React from "react";
import { BsHandbag } from "react-icons/bs";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { GiWineGlass } from "react-icons/gi";

const MobileTabs = () => {
  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-gray-600 border md:justify-evenly">
        <div className="flex flex-col items-center text-2xl">
          <BsHandbag />
          <h5 className="text-base">Delivery</h5>
        </div>
        <div className="flex flex-col items-center text-xl">
          <IoFastFoodOutline />
          <h5 className="text-base">Dining Out</h5>
        </div>
        <div className="flex flex-col items-center text-xl">
          <GiWineGlass />
          <h5 className="text-base">Night Life</h5>
        </div>
        <div className="flex flex-col items-center text-xl">
          <IoNutritionOutline />
          <h5 className="text-base">Nutrition</h5>
        </div>
      </div>
    </>
  );
};

const LargeTabs = () => {
  return (
    <>
      <div className="hidden lg:flex container px-20 mx-auto gap-20">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-2 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
              alt="delivery"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700">Delivery</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-2 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
              alt="dining out"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700">Dining Out</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-2 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
              alt="night life"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700">Night Life</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-2 rounded-full">
            {/* <span className="text-5xl text-gray-600">
              <IoNutritionOutline />
            </span> */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3373/3373025.png"
              alt="nutritions"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700">Nutritions</h3>
        </div>
      </div>
    </>
  );
};

const FoodTabs = () => {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
};

export default FoodTabs;
