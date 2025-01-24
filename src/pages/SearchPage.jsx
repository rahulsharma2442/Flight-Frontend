import { Card, CardContent, CardHeader, CardDescription,CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "../components/ui/button";

export const SearchPage = () => {
    const [starting,setStarting] = useState({place:"DELHi",code:"DEL",name:"Delhi Airport India"});
    const [destination,setDestination] = useState({place:"Mumbai",code:"BOM",name:"Mumbai Airport India"});
  return (
    <div className="h-[100vh] w-full">
        <div className="flex flex-row justify-center items-center w-full">Hello Krishna</div>
        <Card className="w-[90%] bg-white">
            <CardHeader className="flex flex-row-reverse justify-between">
                <CardTitle><Button>Search</Button></CardTitle>
                <CardDescription>Find your Flights</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col flex-wrap sm:flex sm:flex-row sm:flex-wrap justify-center items-center p-1 border-[1px] border-orange-600">
                    <div className="flex flex-col  justify-center items-start rounded-2xl border-[1px]  border-black w-full mb-1 p-2">
                        <p className="text-[0.9rem]">From</p>
                        <p className="text-[1.15rem] font-semibold">{starting?.place}</p>
                        <p className="text-[1rem]">{starting?.name},{starting.code}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start rounded-2xl border-[1px] border-black w-full mb-1 p-2">
                    <p className="text-[0.9rem]">To</p>
                        <p className="text-[1.15rem] font-semibold">{destination?.place}</p>
                        <p className="text-[1rem]">{destination?.name},{destination.code}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start rounded-2xl border-[1px] border-black w-full mb-1 p-2">
                        <p className="text-[0.9rem]">Departure</p>
                        <p className="text-[1.15rem] font-semibold">24 Jan-25</p>
                        <p className="text-[1rem]">Friday</p>
                    </div>
                    <div className="flex flex-col justify-center items-start  rounded-2xl border-[1px] border-black w-full mb-1 p-2">
                        <p className="text-[0.9rem]">Return</p>
                        <p className="text-[1.15rem] font-semibold">26 Jan-25</p>
                        <p className="text-[1rem]">Sunday</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}


