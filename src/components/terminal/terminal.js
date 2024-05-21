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
        <br />
        <br />
        <ProductChoiceTable />
        <br />
        <br />
        <CustomerChoiceTable />
      </MainWrapper>
    </>
  );
}

function ProductChoiceTable() {
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
            <tr>
              <td className="w-1/3 p-2 border-slate-600 border">product</td>
              <td className="w-1/3 p-2 border-slate-600 border">price</td>
              <td className="w-1/3 p-2 border-slate-600 border">action</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function CustomerChoiceTable() {
  return (
    <>
      <div>
        <table className="w-full border-collapse border-slate-600 border">
          <thead>
            <tr>
              <th className="w-1/4 p-2 border-slate-600 border text-left">
                Name of Product
              </th>
              <th className="w-1/4 p-2 border-slate-600 border text-left">
                Quantity
              </th>
              <th className="w-1/4 p-2 border-slate-600 border text-left">
                Price
              </th>
              <th className="w-1/4 p-2 border-slate-600 border text-left">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/4 p-2 border-slate-600 border">product</td>
              <td className="w-1/4 p-2 border-slate-600 border">price</td>
              <td className="w-1/4 p-2 border-slate-600 border">action</td>
              <td className="w-1/4 p-2 border-slate-600 border">action</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
