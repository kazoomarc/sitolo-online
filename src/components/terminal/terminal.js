// import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import InputBox from '../../assets/input-box';
import MainWrapper from '../../common-components/main-wrapper';
import { Button } from '../../assets/button';

export default function Terminal() {
  return (
    <>
      <NavTop title="Terminal" />
      <MainWrapper>
        <div className="search w-80 flex items-center space-x-2">
          <div>
            <InputBox text="search for product" width="100%" />
          </div>
          <div>
            <Button text="search" />
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
