// import { NavLink } from 'react-router-dom';
import Button from '../../common-components/main-button';
import MainWrapper from '../../common-components/main-wrapper';
import NavTop from '../../common-components/top-nav';
export default function Dashboard() {
  return (
    <>
      <NavTop />
      <MainWrapper>
        <h1>store summary</h1>
        <h2>Total amount amount products</h2>
        <span>SEE THE TOTAL NUMBER PRODUCTS AVAILABLE</span>
        <Button text="see products" width="100px" link="/dashboard" />
      </MainWrapper>
    </>
  );
}
