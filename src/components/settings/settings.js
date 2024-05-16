// import { NavLink } from 'react-router-dom';
import NavTop from '../../common-components/top-nav';
import MainWrapper from '../../common-components/main-wrapper';
import InputBox from '../../assets/input-box';
import { Button } from '../../assets/button';
import Card from '../../assets/card';

export default function Settings() {
  return (
    <>
      <NavTop title="Settings" />
      <MainWrapper>
        <SettingsForm />
      </MainWrapper>
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
            <Button type="submit" text="UPDATE" width="20%" link="/signup" />
          </div>
        </div>
      </form>
    </>
  );
}
