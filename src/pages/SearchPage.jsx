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
  const tripTypeCss = "text-blue-700 font-medium  rounded-xl";
  const [selectedDate, setSelectedDate] = useState(null);

  const swapFunction = () => {
    let val = origin;
    setOrigin(destination);
    setDestination(val);
  };

  return (
    <div className="h-[100vh] w-full border-[1px] flex flex-col items-center">
      <div className="flex flex-row justify-center items-center w-full">Hello Krishna</div>
      <div className="bg-white border-[1px] border-black w-full h-full rounded-xl flex flex-col">
        <div className="flex flex-row justify-around items-center h-12 w-full">
          <div className="flex flex-row bg-[rgb(235,235,235)] w-[70%] rounded-2xl h-[70%] justify-evenly">
            <div onClick={() => setTripType("oneWay")} className={`flex flex-row justify-center items-center text-[0.9rem] ${tripType === "oneWay" ? tripTypeCss : ""}`}>
              One Way
            </div>
            <div onClick={() => setTripType("roundTrip")} className={`flex flex-row justify-center items-center text-[0.9rem] ${tripType === "roundTrip" ? tripTypeCss : ""}`}>
              Round Trip
            </div>
          </div>
        </div>
        <div className="border-[1px] border-y-[rgb(0,0,0,0.4)] flex flex-row justify-between items-center h-[20%] px-2">
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-[0.9rem]">{origin.code}</div>
            <div className="text-[0.7rem]">{origin.name}</div>
          </div>
          
            <ArrowRightLeft onClick={swapFunction} className="h-3 " />
          
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-[0.9rem]">{destination.code}</div>
            <div className="text-[0.7rem]">{destination.name}</div>
          </div>
        </div>
        <div className="border-[1px] border-b-[rgb(0,0,0,0.4)] flex flex-row justify-between items-center h-[20%] px-2">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center">
              <Calendar size={14} color="black" />
              <DatePickerComp customClass={"origin"} />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            {tripType == "roundTrip" && (
              <div className="flex flex-row justify-center items-center">
                <Calendar size={14} color="black" />
                <DatePickerComp customClass={"destination"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
// 92 115 231
//
