import {
    FaBell,
    FaDollarSign,
} from 'react-icons/fa'
import { LuFileWarning } from "react-icons/lu";

export const Notifications = () => {
    return (
        <>
            <div className="saving-goals border rounded-lg p-3 sm:p-4 md:p-5 bg-white shadow-sm min-h-[400px] sm:min-h-[500px]">
                <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1">Notifications</h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Recent alerts and updates</p>
            
                <div className="mb-3 sm:mb-5 notify flex items-start sm:items-center">
                    <FaBell size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-600 flex-shrink-0 mt-1 sm:mt-0"/>
                    <div className="pl-3 sm:pl-4 min-w-0 flex-1">
                        <h2 className="text-lg sm:text-xl md:text-2xl">Security Alert</h2>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400 break-words">New login detected from your device.</p>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400">2 hours ago</p>
                    </div>
                </div>
                
                <div className="mb-3 sm:mb-5 notify flex items-start sm:items-center">
                    <FaDollarSign size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0 mt-1 sm:mt-0"/>
                    <div className="pl-3 sm:pl-4 min-w-0 flex-1">
                        <h2 className="text-lg sm:text-xl md:text-2xl">Payment Received</h2>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400 break-words">Your salary has been deposited.</p>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400">5 hours ago</p>
                    </div>
                </div>
                
                <div className="mb-3 sm:mb-5 notify flex items-start sm:items-center">
                    <LuFileWarning size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600 flex-shrink-0 mt-1 sm:mt-0"/>
                    <div className="pl-3 sm:pl-4 min-w-0 flex-1">
                        <h2 className="text-lg sm:text-xl md:text-2xl">Bill Reminder</h2>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400 break-words">Electric bill due in 2 days.</p>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400">1 day ago</p>
                    </div>
                </div>
                
                <button className="w-full bg-black text-white py-2 sm:py-2 md:py-3 rounded font-semibold hover:opacity-90 cursor-pointer text-xs sm:text-sm md:text-base mt-auto">
                    View All Notifications
                </button>
            </div>
        </>
    )
}