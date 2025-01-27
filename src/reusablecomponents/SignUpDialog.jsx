/* eslint-disable react/prop-types */
// import { Copy } from "lucide-react"

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

export const DialogSignUp = ({isOpen, setIsOpen}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Share</Button> */}
      </DialogTrigger>
      <DialogContent className="max-w-[65%] min-h-[35%] sm:min-h-[30%] overflow-y-auto sm:max-w-[35%] md:max-w-[40%] xl:max-w-[30%]  2xl:max-w-[24%]">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] " >Create an Account</DialogTitle>
        </DialogHeader>

        <div className="flex w-full flex-col items-start gap-2 justify-center">
          <div className="flex w-full flex-col sm:flex-col md:flex-row xl:flex-row 2xl:flex-row items-start gap-2">
              <div className="flex flex-col w-full  sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start justify-start gap-4 ">
                {/* <Label className="text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem]" htmlFor="firstName">First Name</Label> */}
                <Input id="firstName" placeholder="First Name" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
              <div className="flex flex-col w-full sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start gap-4">
                {/* <Label className="text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem]" htmlFor="firstName">Last Name</Label> */}
                <Input id="lastName" placeholder="Last Name" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
          </div>
          <div className="flex w-full flex-col sm:flex-col md:flex-row xl:flex-row 2xl:flex-row items-start gap-2">
              <div className="flex flex-col w-full  sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start justify-start gap-2 ">
                {/* <Label className="text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem]" htmlFor="email">Email</Label> */}
                <Input id="email" placeholder="Email" type="email" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
              <div className="flex flex-col w-full sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start gap-2">
                {/* <Label className="text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem]" htmlFor="phoneNumber">Phone Number</Label> */}
                <Input id="phoneNumber" placeholder="Phone Number" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
          </div>
          <div className="flex w-full flex-col sm:flex-col md:flex-row xl:flex-row 2xl:flex-row items-start gap-2">
              <div className="flex flex-col w-full  sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start justify-start gap-2 ">
                {/* <Label className="text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem]" htmlFor="gender">Password</Label> */}
                <Input id="password" placeholder="Password" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl"></Input>
              </div>
              <div className="flex flex-col w-full sm:w-[50%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] items-start gap-2">
                {/* <Label className="text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem]" htmlFor="dob">Confirm Password</Label> */}
                <Input id="confirmPassword" placeholder="Confirm Password" className="w-full h-[1.7rem] border-gray-400 text-sm rounded-xl "></Input>
              </div>
          </div>
        </div>
        <DialogFooter className="flex w-full items-center sm:justify-center">
          <DialogClose asChild>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <Button variant="custom" className="w-full sm:w-[5rem]">Sign Up</Button>
              <Label htmlFor="existingAccount" className="text-sm text-gray-500">Already have an account? Login</Label>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
