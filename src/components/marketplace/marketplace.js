// import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import MainWrapper from '../../common-components/main-wrapper';
import Card from '../../assets/card';

export default function Marketplace() {
  return (
    <>
      <NavTop title="Marketplace" />
      <MainWrapper>
        <h1>Sitolo Online</h1>
        <Card width="100%">
          <h2>Stores available</h2>
        </Card>
      </MainWrapper>
    </>
  );
}
