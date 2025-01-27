/* eslint-disable no-unused-vars */
import { useState } from "react";

// Reusable components imports...
import { Button } from "../components/ui/button";
import { DatePickerComp } from "../reusablecomponents/DatePickern";
// icons imports.....
import { Calendar } from "lucide-react";
import { ArrowRightLeft } from "lucide-react";

export const SearchPage = () => {
  const [origin, setOrigin] = useState({ code: "DEL", name: "New Delhi" });
  const [destination, setDestination] = useState({ code: "BLR", name: "Bengaluru" });
  const [tripType, setTripType] = useState("oneWay");
  const tripTypeCss = "text-indigo-700 font-bold rounded-xl ";
  const [selectedDate, setSelectedDate] = useState(null);

  const swapFunction = () => {
    let val = origin;
    setOrigin(destination);
    setDestination(val);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 ">
      <div className="text-2xl font-bold text-gray-700 mt-8">Travel Planner</div>
      <div className="bg-white shadow-lg w-full max-w-6xl h-auto rounded-2xl mt-8 flex flex-col">
        <div className="flex flex-row justify-around items-center h-16 w-full bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-t-xl">
          <div className="flex flex-row bg-gray-100 w-[70%] rounded-2xl h-[70%] justify-evenly">
            <div
              onClick={() => setTripType("oneWay")}
              className={`flex flex-row justify-center items-center text-sm ${tripType === "oneWay" ? tripTypeCss : "text-gray-600"}`}
            >
              One Way
            </div>
            <div
              onClick={() => setTripType("roundTrip")}
              className={`flex flex-row justify-center items-center text-sm ${tripType === "roundTrip" ? tripTypeCss : "text-gray-600"}`}
            >
              Round Trip
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 flex flex-row justify-between items-center h-[20%] px-4 py-6">
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-xl text-indigo-700">{origin.code}</div>
            <div className="text-sm text-gray-600">{origin.name}</div>
          </div>

          <ArrowRightLeft
            onClick={swapFunction}
            className="h-6 text-indigo-600 cursor-pointer hover:text-purple-500 transition-colors"
          />

          <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-xl text-indigo-700">{destination.code}</div>
            <div className="text-sm text-gray-600">{destination.name}</div>
          </div>
        </div>
        <div className="border-b border-gray-300 flex flex-row justify-between items-center h-[20%] px-4 py-6">
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="flex flex-row justify-center items-center space-x-2">
              <Calendar size={18} color="indigo" />
              <DatePickerComp customClass={"origin"} />
            </div>
          </div>

          {tripType === "roundTrip" && (
            <div className="flex flex-col justify-center items-center space-y-2">
              <div className="flex flex-row justify-center items-center space-x-2">
                <Calendar size={18} color="indigo" />
                <DatePickerComp customClass={"destination"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
