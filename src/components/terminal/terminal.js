// import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import InputBox from '../../assets/input-box';
import MainWrapper from '../../common-components/main-wrapper';

export default function Terminal() {
  return (
    <>
      <NavTop title="Terminal" />
      <MainWrapper>
        <div className="search">
          <InputBox text="search for product" />
        </div>
      </MainWrapper>
    </>
  );
}
