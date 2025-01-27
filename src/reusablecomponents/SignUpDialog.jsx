import { Copy } from "lucide-react"
import { Eye, EyeOff } from 'lucide-react'; // Importing the eye icons from lucide-react

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export const DialogSignUp = ({isOpen, setIsOpen, setIsLoginOpen}) => {
  const [isPasswordVisible,setIsPasswordVisible] =useState(false);
  const [isConfirmPasswordVisible,setIsConfirmPasswordVisible] =useState(false);

  const onPressPasswordVisibility = (valueType) =>{
    // let val = e.target.value;
    if(valueType === 'confirmPassword'){
      setIsConfirmPasswordVisible(prev => !prev);
    }else{
      setIsPasswordVisible(prev => !prev);
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className="max-w-[68%] min-h-[35%] sm:min-h-[30%] overflow-y-auto sm:max-w-[35%] md:max-w-[40%] xl:max-w-[30%]  2xl:max-w-[24%]">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] " >Create an Account</DialogTitle>
        </DialogHeader>

        <div className="flex w-full flex-col items-start gap-2 justify-center">
          <div className="flex w-full flex-col sm:flex-col md:flex-row xl:flex-row 2xl:flex-row items-start gap-2">
              <div className="flex flex-col w-full  sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start justify-start gap-4 ">
                <Input id="firstName" placeholder="First Name" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
              <div className="flex flex-col w-full sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start gap-4">
                <Input id="lastName" placeholder="Last Name" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
          </div>
          <div className="flex w-full flex-col sm:flex-col md:flex-row xl:flex-row 2xl:flex-row items-start gap-2">
              <div className="flex flex-col w-full  sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start justify-start gap-2 ">
                <Input id="email" placeholder="Email" type="email" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
              <div className="flex flex-col w-full sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start gap-2">
                <Input id="phoneNumber" placeholder="Phone Number" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
          </div>
          <div className="flex w-full flex-col sm:flex-col md:flex-row xl:flex-row 2xl:flex-row items-start gap-2">
              <div className="flex flex-col w-full justify-center  sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start justify-start gap-2 relative">
                <Input id="password"
                 type={isPasswordVisible ? 'text' : 'password'}
                 placeholder="Password" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl pr-[30px]"></Input>
                 <Button type="button" variant="ghost"
                  onClick = {() => onPressPasswordVisibility('password')}
                 className="absolute right-2 p-1 text-gray-500">
                  {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                 </Button>
              </div>
              <div className="flex flex-col w-full justify-center sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start gap-2 relative">
                <Input id="confirmPassword"
                 placeholder="Confirm Password"
                 type={isConfirmPasswordVisible ? 'text' : 'password'}
                 className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl pr-[30px] "></Input>
                <Button type="button" variant="ghost"
                 onClick = {() => onPressPasswordVisibility('confirmPassword')}
                 className="absolute right-2 p-1 text-gray-500">
                  {isConfirmPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                 </Button>
              </div>
          </div>
          {/* <div className="flex w-full flex-col sm:flex-col md:flex-row xl:flex-row 2xl:flex-row items-start gap-2">
            <div className="flex flex-col w-full justify-center sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start justify-start gap-2 relative">
              <Input
                id="password"
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Password"
                className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl pr-[40px]" // Added padding-right for icon space
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => onPressPasswordVisibility('password')}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 p-1 text-gray-500"
              >
                {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
              </Button>
            </div>
            <div className="flex flex-col w-full justify-center sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start gap-2 relative">
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                type={isConfirmPasswordVisible ? 'text' : 'password'}
                className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl pr-[40px]" // Added padding-right for icon space
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => onPressPasswordVisibility('confirmPassword')}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 p-1 text-gray-500"
              >
                {isConfirmPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
              </Button>
            </div>
          </div> */}

        </div>
        <DialogFooter className="flex w-full items-center sm:justify-center">
          <DialogClose asChild>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <Button variant="custom" className="w-full sm:w-[5rem]">Sign Up</Button>
              <div className="flex flex-col sm:flex-row items-center gap-0 justify-center">
                <Label htmlFor="existingAccount" className="text-sm text-gray-500">Already have an account?</Label>
                <Button variant="ghost" className="text-sm text-gray-500" onClick={()=>{setIsLoginOpen(prev=>!prev); setIsOpen(false)}}>Login</Button>
                {/* <DialogDemo isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}></DialogDemo> */}
              </div>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
