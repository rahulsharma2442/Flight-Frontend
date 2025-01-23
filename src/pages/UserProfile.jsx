import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";

export const UserProfile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const password = "1234345654";
  const dots = ".".repeat(password.length); // Hides the password

  return (
    <div className="flex flex-col items-center">
      
      <Sheet>
        <SheetTrigger>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Open Profile
          </button>
        </SheetTrigger>
        <SheetContent className="w-[200px] sm:w-[35%] md:w-[40%] xl:w-[45%] 2xl:w-[55%]">
          <SheetHeader>
            <SheetTitle className="text-base font-semibold text-white">User Profile</SheetTitle>
            <SheetDescription className="text-sm text-white 2xl:text-base">Here’s your personal information:</SheetDescription>
          </SheetHeader>
          <div className="mt-4 2xl:mb-14">
            <div className="mb-4 2xl:mb-14">
              <p className="text-sm sm:text-base text-white font-semibold">First Name</p>
              <p className="text-sm sm:text-base text-white font-medium sm:mt-1">Krishna</p>
            </div>
            <div className="mb-4 2xl:mb-14">
              <p className="text-sm sm:text-base text-white font-semibold">Last Name</p>
              <p className="text-sm sm:text-base text-white font-medium sm:mt-1">Shukla</p>
            </div>
            <div className="mb-4 2xl:mb-14">
              <p className="text-sm sm:text-base text-white font-semibold">Email</p>
              <p className="text-sm sm:text-base text-white font-medium sm:mt-1">rahul2000@gmail.com</p>
            </div>
            <div className="mb-4 2xl:mb-14">
              <p className="text-sm sm:text-base text-white font-semibold">Gender</p>
              <p className="text-sm sm:text-base text-white font-medium sm:mt-1">Male</p>
            </div>
            <div className="mb-4 2xl:mb-14">
              <p className="text-sm sm:text-base text-white font-semibold">Age</p>
              <p className="text-sm sm:text-base text-white font-medium sm:mt-1">22</p>
            </div>
            <div className="mb-4 2xl:mb-14">
              <p className="text-sm sm:text-base text-white font-semibold">Password</p>
              <p className="text-sm sm:text-base text-white font-medium sm:mt-1">
                {showPassword ? password : dots}
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-blue-500 underline text-xs"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </p>
            </div>
            <div className="mt-6 md:mt-12 w-[90%] ">
              <button className="w-[100%] px-3 py-1 md:py-2 md:px-4 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm 2xl:text-base">
                View Booking History
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
