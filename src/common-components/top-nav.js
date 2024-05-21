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
                  href="/home"
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
                  to="/settings"
                  className="py-5 px-1 hover:text-gray-900"
                >
                  Settings
                </NavLink>

                <NavLink
                  to="/terminal"
                  className="py-5 px-1 hover:text-gray-900"
                >
                  Terminal
                </NavLink>
              </div>
            </div>

            {/* (// secondary nav )  */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/login" className="py-5 px-3  hover:text-gray-900">
                <Button text="LOG IN" />
              </a>
              <a
                href="/signup"
                // className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                <ButtonBordered text="SIGN UP" />
              </a>
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
                    d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* (//menu mob)  */}
        <div className="mobile-menu hidden">
          <a href="/home" className="block py-2 px-4 text-sm hover:bg-gray-200">
            home
          </a>
          <a href="/home" className="block py-2 px-4 text-sm hover:bg-gray-200">
            marketplace
          </a>
          <a href="/home" className="block py-2 px-4 text-sm hover:bg-gray-200">
            docs
          </a>
          <a href="/home" className="block py-2 px-4 text-sm hover:bg-gray-200">
            team
          </a>
        </div>
      </nav>
    </>
  );
}
