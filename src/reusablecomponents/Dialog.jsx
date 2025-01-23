/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const DialogDemo = ({ isOpen, setIsOpen }) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleChange=(event,valueType)=>{
    let value = event.target.value;
    console.log(value);
    console.log('going');
    if(valueType=="password"){

     
      setPassword(value)
    }
    else{
      console.log('inside email');
      setEmail(value);
    }

  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="primary">Login</Button> */}
      </DialogTrigger>
      <DialogContent className="max-w-[65%] min-h-[40%] sm:max-w-[35%] md:max-w-[40%] xl:max-w-[30%] 2xl:max-w-[24%]">
        <DialogHeader>
          <DialogTitle className="text-[0.8rem] md:text-[1rem] 2xl:text-[1.2rem]">Login</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Email Input */}
          <div className="flex flex-row w-full justify-between items-center">
            <Label htmlFor="email" className="text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem]">Email</Label>
            <Input
              id="email"
              value={email}
              onChange ={(event)=> handleChange(event,"email")}
              className=" w-[6.5rem] h-[1.7rem] text-sm md:w-[11rem] xl:w-[13rem] xl:h-7 px-2 2xl:w-[18rem] 2xl:h-[1.8rem]"
            />
          </div>
          {/* Password Input */}
          <div className="flex flex-row w-full justify-between items-center">
            <Label htmlFor="password"className="text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem]">Password</Label>
            <Input
              id="password"
              value={password}
              onChange ={(event)=> handleChange(event,"password")}
              type="password"
              className="  w-[6.5rem] h-[1.7rem] text-sm md:w-[11rem] xl:w-[13rem] xl:h-7 px-2 2xl:w-[18rem] 2xl:h-[1.8rem]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="text-[0.8rem] md:text-[1rem] xl:text-[1rem]">Sign In</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
