// import { NavLink } from 'react-router-dom';
import MainWrapper from '../../common-components/main-wrapper';
import NavTop from '../../common-components/top-nav';

export default function Dashboard() {
  return (
    <>
      <NavTop />
      <MainWrapper><PageDashBoard/></MainWrapper>
    </>
  );
}


function PageDashBoard() {
  return (
    <>
    <div className="dashboard">
      <div className="sidebar">
        <h2>Shop Dashboard</h2>
        <ul>
          <li>Overview</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Customers</li>
          <li>customer's phone number</li>
        </ul>
      </div>
      <div className="main-content">
        <h2>STORE SUMMARY</h2>
        <div className="overview-content">
          {/* Placeholder content for the overview */}
          <p>SEE THE STORE SUMMARY.</p>
        </div>
      </div>
    </div>
    </>
  );
};


