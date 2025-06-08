import { useNavigate } from "react-router-dom"
export const RecentTransactions = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="recent-transactions px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 border rounded-xl w-full xl:w-3/5">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Recent Transactions</h2>
                <p className="text-sm sm:text-base lg:text-xl">Your latest account activity</p>

                <div className="transaction py-2 sm:py-4">
                    <div className="flex justify-between items-start sm:items-center">
                        <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl truncate">Grocery Store</h3>
                            <p className="text-sm sm:text-base lg:text-xl text-gray-500">Today</p>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500">-$85.25</p>
                        </div>
                    </div>
                    <div className="line bg-gray-500 h-0.5 w-full mt-2"></div>
                </div>

                <div className="transaction py-2 sm:py-4">
                    <div className="flex justify-between items-start sm:items-center">
                        <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl truncate">Salary Deposit</h3>
                            <p className="text-sm sm:text-base lg:text-xl text-gray-500">Today</p>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-500">+$3,555.25</p>
                        </div>
                    </div>
                    <div className="line bg-gray-500 h-0.5 w-full mt-2"></div>
                </div>

                <div className="transaction py-2 sm:py-4">
                    <div className="flex justify-between items-start sm:items-center">
                        <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl truncate">Electric Bill</h3>
                            <p className="text-sm sm:text-base lg:text-xl text-gray-500">Apr 28</p>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500">-$185.25</p>
                        </div>
                    </div>
                    <div className="line bg-gray-500 h-0.5 w-full mt-2"></div>
                </div>

                <div className="transaction py-2 sm:py-4">
                    <div className="flex justify-between items-start sm:items-center">
                        <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl truncate">Restaurant</h3>
                            <p className="text-sm sm:text-base lg:text-xl text-gray-500">Apr 27</p>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500">-$55.25</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-3 sm:mt-4">
                    <button onClick={() => navigate('/wallet')} className="bg-black text-white rounded-lg cursor-pointer w-full px-8 sm:px-12 lg:px-20 py-2 sm:py-3 font-bold text-xs sm:text-sm lg:text-base">
                        View All Transactions
                    </button>
                </div>
            </div>
        </>
    )
}