export const FinancialInsights = () => {
    return (
        <>
            <div className="financial-insights px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 border rounded-xl w-full xl:w-2/5">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Financial Insights</h2>
                <p className="text-sm sm:text-base lg:text-xl">This month's spending by category</p>
                
                <div className="bills-block">
                    <div className="bill-block pt-2 sm:pt-3">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-sm sm:text-base">Groceries</h3>
                            <p className="font-bold text-sm sm:text-base">35%</p>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-200 rounded-xl mt-1 sm:mt-2">
                            <div className="h-2 sm:h-3 bg-black rounded-xl" style={{width:"35%"}}></div>
                        </div>
                    </div>
                    
                    <div className="bill-block pt-2 sm:pt-3">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-sm sm:text-base">Utilities</h3>
                            <p className="font-bold text-sm sm:text-base">25%</p>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-200 rounded-xl mt-1 sm:mt-2">
                            <div className="h-2 sm:h-3 bg-black rounded-xl" style={{width:"25%"}}></div>
                        </div>
                    </div>
                    
                    <div className="bill-block pt-2 sm:pt-3">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-sm sm:text-base">Dining</h3>
                            <p className="font-bold text-sm sm:text-base">20%</p>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-200 rounded-xl mt-1 sm:mt-2">
                            <div className="h-2 sm:h-3 bg-black rounded-xl" style={{width:"20%"}}></div>
                        </div>
                    </div>
                    
                    <div className="bill-block pt-2 sm:pt-3">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-sm sm:text-base">Entertainment</h3>
                            <p className="font-bold text-sm sm:text-base">15%</p>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-200 rounded-xl mt-1 sm:mt-2">
                            <div className="h-2 sm:h-3 bg-black rounded-xl" style={{width:"15%"}}></div>
                        </div>
                    </div>
                    
                    <div className="bill-block pt-2 sm:pt-3">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-sm sm:text-base">Other</h3>
                            <p className="font-bold text-sm sm:text-base">5%</p>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-200 rounded-xl mt-1 sm:mt-2">
                            <div className="h-2 sm:h-3 bg-black rounded-xl" style={{width:"5%"}}></div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center pt-3 sm:pt-5">
                    <button className="bg-black text-white rounded-lg cursor-pointer w-full px-8 sm:px-12 lg:px-20 py-2 sm:py-3 font-bold text-xs sm:text-sm lg:text-base">
                        View Detailed Analytics
                    </button>
                </div>
            </div>
        </>
    )
}