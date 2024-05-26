// import { NavLink } from 'react-router-dom';
import { Button } from '../../assets/button';
import InputBox from '../../assets/input-box';
import MainWrapper from '../../common-components/main-wrapper';
import NavTop from '../../common-components/top-nav';

export default function Signup() {
  return (
    <>
      <NavTop title="Signup" />
      <MainWrapper>
        <SignupFormWrapper>
          <SignupForm />
        </SignupFormWrapper>
      </MainWrapper>
    </>
  );
}

export function SignupForm() {
  return (
    <>
      <form action="/signup" className="max-w-[35rem]">
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
          <Button type="submit" text="SIGN UP" width="100%" link="/signup" />
        </div>
      </form>
    </>
  );
}

export function SignupFormWrapper({ children }) {
  return (
    <div className="">
      <div className="flex items-center justify-center max-w-6xl mx-auto px-8 overflow-hidden-d">
        {children}
      </div>
    </div>
  );
}
