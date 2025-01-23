import './page.css';
import { Button } from '../components/ui/button';
import { DialogDemo } from '../reusablecomponents/Dialog';
import { useState } from 'react';

export const LoginPage = () => {
  const [isLoginOpen,setIsLoginOpen] =useState(false);
  // const [isSignUpOpen,setIsSignUpOpen] = useState(false);
  return (
    <div className='loginPage'>
      <div className='h-[10vh] w-full flex items-center justify-center borde-[1px] border-black'>
        <div className='bg-[rgb(0,0,0,0.3)] h-[80%] w-full flex justify-end items-center'>
        <Button className='login' variant='primary' onClick={()=>{setIsLoginOpen(prev=>!prev)}}>Login</Button>
          <Button className='signup' variant='primary'>Signup</Button>
          <DialogDemo isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}></DialogDemo>
        </div>
      </div>
    </div>
  );
};
