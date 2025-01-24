/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from 'lucide-react'; // Importing the eye icons from lucide-react

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import validator from 'validator';

export const DialogDemo = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility
  const [isStrongPassword, setIsStrongPassword] = useState(true); 
  const [isEmailMessage, setIsEmailMessage] = useState(false); 
  const handleChange = (event, valueType) => {
    const value = event.target.value;
    if (valueType === "password") {
      setPassword(value);
      if (validator.isStrongPassword(value)) {
        setIsStrongPassword(true);
      } else {
        setIsStrongPassword(false); 
      }
    } else {
        setEmail(value);
        if (validator.isEmail(value)) {
          setIsEmailMessage(true);
        } else {
          setIsEmailMessage(false); 
        }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev); 
  };
  const handleSubmit = () => {
    if (email && password) {
      console.log("Logging in with", email, password);
      setIsOpen(false); 
    } else {
      console.log("Please fill in both fields");
    }
  };

  const handleDialogClose = () => {
    setEmail('');
    setPassword('');
    setIsStrongPassword('');
    setIsEmailMessage('');
    setIsOpen(false); // Optionally close the dialog if needed
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => open || handleDialogClose()}>
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className="max-w-[68%] min-h-[25%] overflow-y-auto sm:max-w-[35%] md:max-w-[25%] xl:max-w-[20%] 2xl:max-w-[18%]">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem]">Alread have an account?</DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full flex-col  items-start gap-4">
            <div className="flex flex-col w-full  items-start justify-start gap-4">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => handleChange(event, "email")}
                className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full items-start justify-center gap-4">
              <Input
                id="password"
                type={ isPasswordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(event) => handleChange(event, "password")}
                className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"
              />
              <Button
              type="button" variant="ghost"
              className="absolute right-6 p-1 text-gray-500"
              onClick={togglePasswordVisibility}
              >
                 {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />} 
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="flex w-full items-center sm:justify-center">
          <DialogClose asChild>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <Button variant="custom" className="w-full sm:w-[5rem]" onClick={handleSubmit}>
                Log In
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
