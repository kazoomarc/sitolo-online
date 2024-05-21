// import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import InputBox from '../../assets/input-box';
import MainWrapper from '../../common-components/main-wrapper';
import { Button } from '../../assets/button';

import React, { useState } from 'react';

const productData = [
  { id: 1, product: 'Product 1', price: 10.99 },
  { id: 2, product: 'Product 2', price: 15.99 },
  { id: 3, product: 'Product 3', price: 8.99 },
  { id: 4, product: 'Product 4', price: 12.99 },
  { id: 5, product: 'Product 5', price: 7.99 },
  { id: 6, product: 'Product 6', price: 9.99 },
  { id: 7, product: 'Product 7', price: 11.99 },
  { id: 8, product: 'Product 8', price: 14.99 },
  { id: 9, product: 'Product 9', price: 6.99 },
  { id: 10, product: 'Product 10', price: 13.99 },
];

const ProductTableRow = ({ product, handleSelectProduct }) => {
  return (
    <tr key={product.id}>
      <td className="w-1/3 p-2 border-slate-600 border">{product.product}</td>
      <td className="w-1/3 p-2 border-slate-600 border">{product.price}</td>
      <td className="w-1/3 p-2 border-slate-600 border">
        <Button text="Add" onClick={() => handleSelectProduct(product)} />
      </td>
    </tr>
  );
};

const SelectedProductTableRow = ({
  product,
  index,
  handleQuantityChange,
  handleRemoveProduct,
}) => {
  return (
    <tr key={product.id}>
      <td className="w-1/4 p-2 border-slate-600 border">{product.product}</td>
      <td className="w-1/4 p-2 border-slate-600 border">
        <input
          type="number"
          value={product.quantity}
          onChange={(e) => handleQuantityChange(index, e.target.value)}
          min="1"
        />
      </td>
      <td className="w-1/4 p-2 border-slate-600 border">{product.price}</td>
      <td className="w-1/4 p-2 border-slate-600 border">
        {(product.price * product.quantity).toFixed(2)}
      </td>
      <td className="w-1/4 p-2 border-slate-600 border">
        <Button text="Remove" onClick={() => handleRemoveProduct(index)} />
      </td>
    </tr>
  );
};

export default function Terminal() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectProduct = (product) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      const updatedProducts = selectedProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (index, value) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts[index].quantity = value;
    setSelectedProducts(updatedProducts);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.splice(index, 1);
    setSelectedProducts(updatedProducts);
  };

  const totalAmount = selectedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <>
      <NavTop title="Terminal" />
      <MainWrapper>
        <div className="search w-80 flex items-center space-x-2">
          <div>
            <input
              type="text"
              placeholder="Search for product"
              className="w-full"
            />
          </div>
          <div>
            <Button text="Search" />
          </div>
        </div>
        <br />
        <br />
        <ProductChoiceTable handleSelectProduct={handleSelectProduct} />
        <br />
        <br />
        <CustomerChoiceTable
          selectedProducts={selectedProducts}
          handleQuantityChange={handleQuantityChange}
          handleRemoveProduct={handleRemoveProduct}
          totalAmount={totalAmount}
        />
      </MainWrapper>
    </>
  );
}

function CustomerChoiceTable(props) {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <table className="w-full border-collapse border-slate-600 border">
            <thead>
              <tr>
                <th className="w-1/5 p-2 border-slate-600 border text-left">
                  Name of Product
                </th>
                <th className="w-1/5 p-2 border-slate-600 border text-left">
                  Quantity
                </th>
                <th className="w-1/5 p-2 border-slate-600 border text-left">
                  Price
                </th>
                <th className="w-1/5 p-2 border-slate-600 border text-left">
                  Amount
                </th>
                <th className="w-1/5 p-2 border-slate-600 border text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {props.selectedProducts.map((product, index) => (
                <SelectedProductTableRow
                  key={product.id}
                  product={product}
                  index={index}
                  handleQuantityChange={props.andleQuantityChange}
                  handleRemoveProduct={props.handleRemoveProduct}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row-reverse">
          <div className="py-6">
            <Button
              text={`SEND RECEIPT (Total: $${props.totalAmount.toFixed(2)})`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function ProductChoiceTable(props) {
  return (
    <>
      <div>
        <table className="w-1/2 border-collapse border-slate-600 border">
          <thead>
            <tr>
              <th className="w-1/3 p-2 border-slate-600 border text-left">
                Product
              </th>
              <th className="w-1/3 p-2 border-slate-600 border text-left">
                Price
              </th>
              <th className="w-1/3 p-2 border-slate-600 border text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.slice(0, 5).map((product) => (
              <ProductTableRow
                key={product.id}
                product={product}
                handleSelectProduct={props.handleSelectProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
