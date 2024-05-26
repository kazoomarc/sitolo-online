import { NavLink } from 'react-router-dom';
import { Button, ButtonBordered } from '../assets/button';

export default function NavTop(props) {
  return (
    <>
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* (// logo)  */}
              <div>
                <a
                  href="/"
                  className="flex items-center py-7 px-2 text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-1 text-blue-400 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                    />
                  </svg>
                  <span className="font-bold">Sitolo</span>
                </a>
              </div>
              {/* (// primary nav) */}
              <div className="hidden md:flex items-center space-x-4 text-gray-700">
                <NavLink
                  to="/marketplace"
                  className="py-5 px-1 hover:text-gray-900"
                >
                  Marketplace
                </NavLink>

                <NavLink
                  to="/products"
                  className="py-5 px-1 hover:text-gray-900"
                >
                  Products
                </NavLink>

                <NavLink
                  to="/terminal"
                  className="py-5 px-1 hover:text-gray-900"
                >
                  Terminal
                </NavLink>

                <NavLink
                  to="/dashboard"
                  className="py-5 px-1 hover:text-gray-900"
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/settings"
                  className="py-5 px-1 hover:text-gray-900"
                >
                  Settings
                </NavLink>
              </div>
            </div>

            {/* (// secondary nav )  */}
            <div className="hidden md:flex items-center space-x-1">
              <Button text="LOG IN" link="/login" />

              <ButtonBordered text="SIGN UP" link="/signup" />
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-btn"
                onClick={() => {
                  document
                    .querySelector('.mobile-menu')
                    .classList.toggle('hidden');
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* (//menu mob)  */}
        <div className="mobile-menu px-8 hidden flex items-center space-x-4 text-gray-700">
          <NavLink to="/marketplace" className="py-5 px-1 hover:text-gray-900">
            Marketplace
          </NavLink>

          <NavLink to="/products" className="py-5 px-1 hover:text-gray-900">
            Products
          </NavLink>

          <NavLink to="/terminal" className="py-5 px-1 hover:text-gray-900">
            Terminal
          </NavLink>

          <NavLink to="/dashboard" className="py-5 px-1 hover:text-gray-900">
            Dashboard
          </NavLink>

          <NavLink to="/settings" className="py-5 px-1 hover:text-gray-900">
            Settings
          </NavLink>
        </div>
      </nav>
    </>
  );
}
