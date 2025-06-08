import { LoggedNavBar } from "../../../shared/LoggedNavBar"
import Footer from "../../../shared/Footer"
import {
  FaHouse,
  FaPhone,
  FaCalendar,
  FaClock,
  FaPlus
} from "react-icons/fa6";
import { LuZap } from "react-icons/lu";

export const Bills = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <LoggedNavBar />
                <div className="bills container mx-auto py-6 px-4 lg:py-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-center">Bills and Payments</h2>
                    <p className="text-lg sm:text-xl text-center">Manage your recurring bills and payments</p>
                    
              
                    <div className="info-blocks grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-5">
                        <div className="bg-gray-100 border border-gray-500 rounded-xl py-2 px-3 sm:px-5 text-center">
                            <p className="text-lg sm:text-2xl font-bold text-blue-500">$1,495.48</p>
                            <p className="text-sm sm:text-lg text-gray-500">Monthly Total</p>
                        </div>
                        <div className="bg-gray-100 border border-gray-500 rounded-xl py-2 px-3 sm:px-5 text-center">
                            <p className="text-lg sm:text-2xl font-bold text-green-500">1</p>
                            <p className="text-sm sm:text-lg text-gray-500">Paid This Month</p>
                        </div>
                        <div className="bg-gray-100 border border-gray-500 rounded-xl py-2 px-3 sm:px-5 text-center">
                            <p className="text-lg sm:text-2xl font-bold text-orange-500">2</p>
                            <p className="text-sm sm:text-lg text-gray-500">Due This Week</p>
                        </div>
                        <div className="bg-gray-100 border border-gray-500 rounded-xl py-2 px-3 sm:px-5 text-center">
                            <p className="text-lg sm:text-2xl font-bold text-red-500">1</p>
                            <p className="text-sm sm:text-lg text-gray-500">Overdue</p>
                        </div>
                    </div>

        
                    <div className="bill grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 py-5">
                  
                        <div className="border border-gray-500 p-3 rounded-lg">
                            <div className=""> 
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <LuZap size={14} className="mr-2"/>
                                        <h2 className="text-lg sm:text-xl pr-2 sm:pr-5">Emergency Bill</h2>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Due Soon</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-lg text-gray-400">Utilities</p>
                            </div>
                            
                            <p className="font-bold text-lg sm:text-xl items-center flex justify-between mt-2">
                                $125.50   
                                <div className="flex justify-center">
                                    <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white text-black border-gray-600 border">Recurring</p>
                                </div>
                            </p>
                            <p className="text-gray-500 mt-2 flex items-center text-sm sm:text-base"> 
                                <FaCalendar size={14} className="mr-2" /> Due: Jan 15, 2026
                            </p>
                            <p className="text-gray-500 mt-2 flex items-center text-sm sm:text-base">
                                <FaClock size={14} className="mr-2" /> 
                                <span className="text-red-500">505 days overdue</span>
                            </p>
                            <p className="text-gray-500 mt-2 text-sm sm:text-base">Payment: Auto Pay</p>
                            <div className="flex gap-2">
                                <button className="inline-flex bg-black text-white cursor-pointer mt-2 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 w-full">
                                    Pay now
                                </button>
                            </div>
                        </div>


                        <div className="border border-gray-500 p-3 rounded-lg">
                            <div className=""> 
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FaHouse size={14} className="mr-2"/>
                                        <h2 className="text-lg sm:text-xl pr-2 sm:pr-5">Rent Payment</h2>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="inline-flex cursor-pointer items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-green-100 text-green-800 hover:bg-green-100">Paid</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-lg text-gray-400">Housing</p>
                            </div>
                            
                            <p className="font-bold text-lg sm:text-xl items-center flex justify-between mt-2">
                                $1,200.00 
                                <div className="flex justify-center">
                                    <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white text-black border-gray-600 border">Recurring</p>
                                </div>
                            </p>
                            <p className="text-gray-500 mt-2 flex items-center text-sm sm:text-base"> 
                                <FaCalendar size={14} className="mr-2" /> Due: Jan 1, 2026
                            </p>
                            <p className="text-gray-500 mt-2 text-sm sm:text-base">Payment: Bank Transfer</p>
                            <div className="flex gap-2">
                                <button className="inline-flex bg-white text-gray-400 border cursor-pointer mt-2 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 w-full">
                                    Paid
                                </button>
                            </div>
                        </div> 

                 
                        <div className="border border-gray-500 p-3 rounded-lg">
                            <div className=""> 
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FaPhone size={14} className="mr-2"/>
                                        <h2 className="text-lg sm:text-xl pr-2 sm:pr-5">Internet Service</h2>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="inline-flex cursor-pointer items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-red-100 text-red-800 hover:bg-red-100">Overdue</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-lg text-gray-400">Technology</p>
                            </div>
                            
                            <p className="font-bold text-lg sm:text-xl items-center flex justify-between mt-2">
                                $79.99 
                                <div className="flex justify-center">
                                    <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-white text-black border-gray-600 border">Recurring</p>
                                </div>
                            </p>
                            <p className="text-gray-500 mt-2 flex items-center text-sm sm:text-base"> 
                                <FaCalendar size={14} className="mr-2" /> Due: Dec 28, 2025
                            </p>
                            <p className="text-gray-500 mt-2 text-sm sm:text-base">Payment: Bank Transfer</p>
                            <div className="flex gap-2">
                                <button className="inline-flex bg-red-500 text-white cursor-pointer mt-2 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 w-full">
                                    Pay Now
                                </button>
                            </div>
                        </div> 

                      
                        <div className="border border-gray-500 p-3 rounded-lg cursor-pointer text-center items-center flex flex-col justify-center min-h-[200px] sm:min-h-[250px]">
                            <FaPlus size={40} className="text-gray-500 sm:size-12"/>
                            <h2 className="text-lg sm:text-2xl text-gray-500 mt-2">Add new Bill</h2>
                            <p className="text-sm sm:text-xl text-gray-500 mt-1">Set up a new recurring payment</p>
                        </div> 
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}