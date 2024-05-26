// import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import MainWrapper from '../../common-components/main-wrapper';
import './products.css';

export default function Products() {
  return (
    <>
      <NavTop />
      <MainWrapper>
        <ProductTable />
      </MainWrapper>
    </>
  );
}

const ProductTable = () => {
  const products = [
    {
      name: 'example Product',
      available: 10,
      price: 'K100',
      expiryDate: 'Expiry Date',
    },
    {
      name: 'example Product',
      available: 20,
      price: 'K200',
      expiryDate: 'Expiry Date',
    },
    {
      name: 'example Product',
      available: 30,
      price: 'K300',
      expiryDate: 'Expiry Date',
    },
    {
      name: 'example Product',
      available: 40,
      price: 'K400',
      expiryDate: 'Expiry Date',
    },
    {
      name: 'example Product',
      available: 50,
      price: 'K500',
      expiryDate: 'Expiry Date',
    },
    {
      name: 'example Product',
      available: 60,
      price: 'K600',
      expiryDate: 'Expiry Date',
    },
  ];

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Name of Product</th>
          <th>Available</th>
          <th>Price</th>
          <th>Expiry Date</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.available}</td>
            <td>{product.price}</td>
            <td>{product.expiryDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
