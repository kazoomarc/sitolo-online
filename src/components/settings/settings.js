// import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import MainWrapper from '../../common-components/main-wrapper';
import InputBox from '../../assets/input-box';
import { Button } from '../../assets/button';

export default function Settings() {
  return (
    <>
      <NavTop title="Settings" />
      <MainWrapper>
        <ContactFormWrapper>
          <ContactCard />
          <SettingsForm />
        </ContactFormWrapper>
      </MainWrapper>
    </>
  );
}

export function ContactCard() {
  return (
    <>
      <div className="my-6">
        <div className="flex flex-row items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-32 h-32"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-3 ">
            <div className="">
              <span className="text-lg font-semibold">Name of shop</span>
            </div>
            <div className="">
              <p>
                Here is the bio of the shop. It represents what we do and how we
                do it. It represents our values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SettingsForm() {
  return (
    <>
      <form action="/signup" className="w-full">
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="mt-8">
            <label for="fname">Full Name</label>
            <InputBox type="text" text="full name" />
          </div>

          <div className="mt-8">
            <label for="fname">Email</label>
            <InputBox type="email" text="email address" />
          </div>

          <div className="mt-8">
            <label for="fname">Password</label>
            <InputBox type="password" text="password" />
          </div>

          <div className="mt-8">
            <label for="fname">Password</label>
            <InputBox type="password" text="re-enter password" />
          </div>

          <div className="mt-8">
            <Button type="submit" text="UPDATE" width="35%" link="#" />
          </div>
        </div>
      </form>
    </>
  );
}

const ContactFormWrapper = ({ children }) => {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto px-8 overflow-hidden-d">{children}</div>
    </div>
  );
};
