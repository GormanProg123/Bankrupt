import {
    FaPaperPlane,
} from 'react-icons/fa'

export const Contact = () => {
    return (
        <>
            <div className="saving-goals border rounded-lg p-3 sm:p-4 md:p-5 bg-white shadow-sm min-h-[400px] sm:min-h-[500px]">
                <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1">Quick Contacts</h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Recent payment recipients</p>
            
                <div className="mb-3 sm:mb-5 notify flex justify-between items-center">
                    <div className="flex items-center flex-1 min-w-0">
                        <div className="circle bg-gray-400 rounded-full w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                            <h2 className="text-lg sm:text-xl md:text-2xl truncate">Sarah Johnson</h2>
                            <p className="text-sm sm:text-lg md:text-xl text-gray-400 truncate">Last payment: Apr 15</p>
                        </div>
                    </div>
                    <FaPaperPlane size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 ml-2"/>
                </div>

                <div className="mb-3 sm:mb-5 notify flex justify-between items-center">
                    <div className="flex items-center flex-1 min-w-0">
                        <div className="circle bg-gray-400 rounded-full w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                            <h2 className="text-lg sm:text-xl md:text-2xl truncate">Michael Chen</h2>
                            <p className="text-sm sm:text-lg md:text-xl text-gray-400 truncate">Last payment: Apr 5</p>
                        </div>
                    </div>
                    <FaPaperPlane size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 ml-2"/>
                </div>

                <div className="mb-3 sm:mb-5 notify flex justify-between items-center">
                    <div className="flex items-center flex-1 min-w-0">
                        <div className="circle bg-gray-400 rounded-full w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <div className="min-w-0 flex-1">
                            <h2 className="text-lg sm:text-xl md:text-2xl truncate">Emma Wilson</h2>
                            <p className="text-sm sm:text-lg md:text-xl text-gray-400 truncate">Last payment: Apr 25</p>
                        </div>
                    </div>
                    <FaPaperPlane size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 ml-2"/>
                </div>

                <button className="w-full bg-black text-white py-2 sm:py-2 md:py-3 rounded font-semibold hover:opacity-90 cursor-pointer text-xs sm:text-sm md:text-base mt-auto">
                    View All Contacts
                </button>
            </div>
        </>
    )
}