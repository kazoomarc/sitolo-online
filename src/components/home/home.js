import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import { Button } from '../../assets/button';
import MainWrapper from '../../common-components/main-wrapper';

export default function Home() {
  return (
    <>
      <NavTop title="Home" />
      <MainWrapper>
        <Hero />
      </MainWrapper>
    </>
  );
}

export function Hero() {
  return (
    <>
      <div className="mt-[-100px]">
        <div className="py-32 grid gap-8">
          <h2 className="font-extrabold text-5xl max-w-[30rem]">
            SITOLO ONLINE INVENTORY MANAGEMENT AND POINT OF SALE
          </h2>
          <span className="text-lg max-w-[30rem]">
            Empower Your Businesses with smart, easy to setup invetory
            management system and point of Sale terminal
          </span>
          <Button text="SIGN UP" width="100px" />
        </div>
      </div>
    </>
  );
}
