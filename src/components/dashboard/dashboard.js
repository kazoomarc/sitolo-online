import React, { useState } from 'react';
import NavTop from '../../common-components/top-nav';
import MainWrapper from '../../common-components/main-wrapper';

const StockSummary = () => {
  const [showMore, setShowMore] = useState(false);
  const [showPercentage, setShowPercentage] = useState(false);

  const weeklySales = 350; // Example data
  const totalSales = 1000; // Example total sales data for percentage calculation
  const reservedSales = 150; // Example data

  const initialProducts = [
    { name: 'Sugar', bails: 120 },
    { name: 'Milk', cartons: 90 },
    { name: 'Tea Bags', cartons: 75 },
  ];

  const additionalProducts = [
    { name: 'Soya Pieces', bags: 60 },
    { name: 'Cooking oil', litres: 55 },
    { name: 'Salt', bags: 50 },
  ];

  const bestSellingProducts = showMore
    ? [...initialProducts, ...additionalProducts]
    : initialProducts;

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const handleShowPercentage = () => {
    setShowPercentage(!showPercentage);
  };

  return (
    <>
      <NavTop />
      <MainWrapper>
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Weekly Sales Card */}
            <div className="bg-red-800 shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Weekly Sales</h2>
              <p className="text-3xl font-bold">
                {showPercentage
                  ? `${((weeklySales / totalSales) * 100).toFixed(2)}%`
                  : weeklySales}
              </p>
              <button
                onClick={handleShowPercentage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-4"
              >
                {showPercentage ? 'Show Number' : 'Show Percentage'}
              </button>
            </div>

            {/* Reserved Sales Card */}
            <div className="bg-green-500 shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Reserved Sales</h2>
              <p className="text-3xl font-bold">{reservedSales}</p>
            </div>

            {/* Best Selling Products Card */}
            <div className="bg-gray-500 shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Best Selling Products
              </h2>
              <ul className="mb-4">
                {bestSellingProducts.map((product, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-medium">{product.name}</span>:{' '}
                    {product.sales} sales
                  </li>
                ))}
              </ul>
              <button
                onClick={handleViewMore}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                {showMore ? 'Show Less' : 'View More'}
              </button>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default StockSummary;
