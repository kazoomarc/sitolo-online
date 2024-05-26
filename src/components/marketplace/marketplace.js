// import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import MainWrapper from '../../common-components/main-wrapper';
import Card from '../../assets/card';
import { Button } from '../../assets/button';

export default function Marketplace() {
  return (
    <>
      <NavTop title="Marketplace" />
      <MainWrapper>
        <h1 className="  font-semibold pb-10 pt-5 font text-2xl ">
          Sitolo Marketplace
        </h1>
        <Card width="100%">
          <div className="flex pb-4 pl-14 pt-14 rounded-md  ">
            <span className=" flex flex-row  ">
              <img
                src="/images/img1.png"
                alt="item"
                className="w-36 rounded-lg h-15"
              />

              <p className=" w-1/2  font pl-10 pr-6 align-middle">
                The available products in the stocks the available products in
                the stocks the available products in the stocks like stockings
                and stockings.
                <p className="pt-9">Price:MWK 2,500</p>
              </p>
              <div className="  pt-24 ">
                <Button text="reserve" classname="  w-1/4 "></Button>
              </div>
            </span>
          </div>
          <div className="flex pb-4 pl-14 pt-14 rounded-md  ">
            <span className=" flex flex-row  ">
              <img
                src="/images/img2.png"
                alt="item"
                className="w-36 rounded-lg h-15"
              />

              <p className=" w-1/2  font pl-10 pr-6 align-middle">
                The available products in the stocks the available products in
                the stocks the available products in the stocks like stockings
                and stockings.
                <p className="pt-9">Price:MWK 2,500</p>
              </p>
              <div className="  pt-24 ">
                <Button text="reserve" classname="  w-1/4 "></Button>
              </div>
            </span>
          </div>
          <div className="flex pb-4 pl-14 pt-14 rounded-md  ">
            <span className=" flex flex-row  ">
              <img
                src="/images/img3.png"
                alt="item"
                className="w-36 rounded-lg h-15"
              />

              <p className=" w-1/2  font pl-10 pr-6 align-middle">
                The available products in the stocks the available products in
                the stocks the available products in the stocks like stockings
                and stockings.
                <p className="pt-9">Price:MWK 2,500</p>
              </p>
              <div className="  pt-24 ">
                <Button text="reserve" classname="  w-1/4 "></Button>
              </div>
            </span>
          </div>
        </Card>
      </MainWrapper>
    </>
  );
}
