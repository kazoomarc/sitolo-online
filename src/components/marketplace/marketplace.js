// import { NavLink } from 'react-router-dom';
import NavTop from "../../common-components/top-nav";
import MainWrapper from "../../common-components/main-wrapper";
import Card from "../../assets/card";
import { Button } from "../../assets/button";

export default function Marketplace() {
  return (
    <>
      <NavTop title="Marketplace" />
      <MainWrapper>
        <h1 className="  font-semibold pb-10 pt-5 font text-2xl ">
          SITOLO Marketplace
        </h1>
        <Card width="100%">
          <div className="pb-12 pl-14 pt-14 rounded-md ">
            <span className=" flex flex-row ">
              <img src="/images/img1.png" alt="item" className="w-1/4 h-auto" />

              <p className=" w-1/2  font-bold p-10">
                THE AVAILABLE PRODUCTS IN THE STOCK THE AVAILABLE PRODUCTS IN
                THE THE AVAILABLE PRODUCTS IN THE STOCK THE AVAILABLE PRODUCTS
                IN THE STOCK Price k5,000
              </p>
              <span className="pt-14">
                <Button
                  text="reserved"
                  classname="flex flex-col w-1/4 flex-center pt-10"
                ></Button>
              </span>
            </span>
          </div>
          <div className="pb-12 pl-14 pt-14 rounded-md ">
            <span className=" flex flex-row ">
              <img
                className="w-1/4 h-auto p-15 "
                src="/images/img3.png "
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
                  classname="flex flex-col w-1/4 flex-center pt-14"
                ></Button>
              </span>
            </span>
          </div>
          <div className=" pb-12 pl-14 pt-14 rounded-2xl ">
            <span className=" flex flex-row ">
              <img
                className="w-1/4 h-auto pb-12 p-15 rounded-bl-lg "
                src="/images/img2.png "
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
