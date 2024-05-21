// import { NavLink } from 'react-router-dom';
import NavTop from "../../common-components/top-nav";
import MainWrapper from "../../common-components/main-wrapper";
import Card from "../../assets/card";
import { Button } from "../../assets/button";
import Image from "../../assets/image";

export default function Marketplace() {
  return (
    <>
      <NavTop title="Marketplace" />
      <MainWrapper>
        <h1 className="  font-semibold pb-10 pt-5 font text-2xl ">
          SITOLO Marketplace
        </h1>
        <Card width="100%">
          <div className="  ">
            {" "}
            <span className=" flex flex-row ">
              <img
                className="w-1/4 h-24 p-15 "
                src="C:\Users\B e n j a m i n H\Desktop\Git\Group26\sitolo-online\src\assets\images\img1.png"
                alt="item"
              ></img>
              <p className=" w-1/2  font-bold p-10">
                THE AVAILABLE PRODUCTS IN THE STOCK THE AVAILABLE PRODUCTS IN
                THE THE AVAILABLE PRODUCTS IN THE STOCK THE AVAILABLE PRODUCTS
                IN THE STOCK
                
              </p>
              <span className="pt-14">
                <Button
                  text="reserved"
                  classname="flex flex-col w-1/4 flex-center pt-10"
                ></Button>
              </span>
            </span>
          </div>
          <div className=" src\assets\images\img1.png ">
            {" "}
            <span className=" flex flex-row ">
              <img className="w-1/4 h-24 p-15 " src=" " alt="item"></img>
              <p className=" w-1/2  font-bold p-10">
                THE AVAILABLE PRODUCTS IN THE STOCK THE AVAILABLE PRODUCTS IN
                THE THE AVAILABLE PRODUCTS IN THE STOCK THE AVAILABLE PRODUCTS
                IN THE STOCK
              </p>
              <span className="pt-14">
                <Button
                  text="reserved"
                  classname="flex flex-col w-1/4 flex-center pt-14"
                ></Button>
              </span>
            </span>
          </div>
          <div className=" src\assets\images\img1.png ">
            {" "}
            <span className=" flex flex-row ">
              <img className="w-1/4 h-24 p-15 " src=" " alt="item"></img>
              <p className=" w-1/2  font-bold p-10">
                THE AVAILABLE PRODUCTS IN THE STOCK THE AVAILABLE PRODUCTS IN
                THE THE AVAILABLE PRODUCTS IN THE STOCK THE AVAILABLE PRODUCTS
                IN THE STOCK
              </p>
              <span className="pt-14">
                <Button
                  text="reserved"
                  classname="flex flex-col w-1/4 flex-center pt-14"
                ></Button>
              </span>
            </span>
          </div>
        </Card>
      </MainWrapper>
    </>
  );
}
