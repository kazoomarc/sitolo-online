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
        <SignupForm />
      </MainWrapper>
    </>
  );
}

export function SignupForm() {
  return (
    <>
      <form action="/signup" className="max-w-[20rem]">
        <div className="mt-8">
          <label for="fname">Full Name</label>
          <InputBox text="full name" />
        </div>

        <div className="mt-8">
          <label for="fname">Email</label>
          <InputBox text="email address" />
        </div>

        <div className="mt-8">
          <label for="fname">Password</label>
          <InputBox text="password" />
        </div>

        <div className="mt-8">
          <label for="fname">Password</label>
          <InputBox text="re-enter password" />
        </div>

        <div className="mt-8">
          <Button text="SIGN UP" width="100%" />
        </div>
      </form>
    </>
  );
}
