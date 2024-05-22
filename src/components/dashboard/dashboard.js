import React from 'react';
import { NavLink } from 'react-router-dom';
import MainWrapper from '../../common-components/main-wrapper';
import NavTop from '../../common-components/top-nav';
import Card from '../../assets/card';

export default function Dashboard(props) {
  return (
    <>
      <NavTop />
      <MainWrapper>
        <Card>
          content here
        </Card>
     
        <PageDashboard />   <button
          className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto"
          onClick={props.onClick}
          style={{
            backgroundColor: 'blue',
            color: props.color,
            width: props.width,
          }
        }
        >
          <NavLink to={props.link}>View More</NavLink>
        </button>
      </MainWrapper>
    </>
  );
}

function PageDashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Shop Dashboard</h2>
        <ul>
          <li>Overview</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Customers</li>
          <li>Customer's phone number</li>
        </ul>
      </div>
      <div className="main-content">
        <h2>STORE SUMMARY</h2>
        <div className="overview-content">
          {/* Placeholder content for the overview */}
          <p>THE STORE SUMMARY.</p>
        </div>
      </div>
    </div>

  );
}
