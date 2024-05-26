import { NavLink } from 'react-router-dom';
import { Button } from '../../assets/button';
import InputBox from '../../assets/input-box';
import MainWrapper from '../../common-components/main-wrapper';
import NavTop from '../../common-components/top-nav';

export default function Login() {
  return (
    <>
      <NavTop /><MainWrapper>
      <form action="/signup" className="max-w-[20rem]">
        <div className="mt-8">
          <label for="fname" className="text-bold">LOG IN</label>
          
        </div>

        <div className="mt-8">
          <label for="fname">Email Address</label>
          <InputBox type="email" text="example@email.com"  />
        </div>

        <div className="mt-8">
          <label for="fname">Password</label>
          <InputBox type="password" text="password" />
        </div>

        <div><input type="checkbox" class="form-checkbox h-5 w-5 text-blue-500"></input><span>remember me
        <div  className="flex flex-row float-right">Forget password</div>
          </span></div>

        <div className="mt-8">
          <Button type="submit" text="LOGIN" width="100%" link="/home" />
        </div>
        <div>Don't have an account? 
          <NavLink>sign up</NavLink>
        </div>
      </form>
      </MainWrapper>

      
    </>
  );
}
