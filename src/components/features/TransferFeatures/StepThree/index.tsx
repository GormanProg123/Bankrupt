import { Icon } from "../../../atoms/Icon"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { selectPage } from "../../../../app/features/TransferPages/TransferPagesSlice"

export const TransferStepThree = () => {
    const dispatch = useDispatch();
    const randomNumber = Math.floor(Number(new Date())+ Math.random()*10)
    const navigate = useNavigate();

    const handleNavigateToStart = () => {
        dispatch(selectPage(1))
    }
    
    return (
        <>
            <div className="wrap flex justify-center px-4">
          <form
                className="border border-gray-300 border-2 rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-2xl lg:max-w-4xl" 
                onSubmit={(e) => e.preventDefault()}
              >
                  <div className="form-header pb-4 sm:pb-6 flex flex-col lg:flex-row lg:justify-between lg:items-start w-full space-y-4 lg:space-y-0">
                      <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold">Make a Transfer</h3>
                          <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-1">Transfer complete</p>
                      </div>
                      <div className="flex justify-center lg:justify-end">
                          <div className="flex flex-col items-center">
                                 <div className="flex items-center">
                                  <div className="flex items-center">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                                      1
                                    </div>
                                    <div className="w-4 sm:w-8 h-0.5 bg-gray-800 mx-1" />
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                                      2
                                    </div>
                                    <div className="w-4 sm:w-8 h-0.5 bg-gray-800 mx-1" />
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                                      3
                                    </div>
                                  </div>
                                 </div>
                          </div>
                      </div>
                  </div>

              <div className="w-full mx-auto font-sans">
                <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="border-green-600 rounded-full border-4 sm:border-5 w-16 h-16 sm:w-20 sm:h-20 items-center flex justify-center text-green-600">
                        <Icon iconClass="fa-check" />
                    </div>
                </div>
                    
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-2">Transfer Successful!</h3>
                <p className="text-center text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">Your transfer of $0.00 has been completed.</p>

                <div className="transaction-info p-4 sm:p-5 bg-gray-200 sm:bg-gray-300 my-4 sm:my-5 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 pb-3 sm:pb-5">
                        <p className="text-base sm:text-xl font-medium">Transaction ID</p>
                        <p className="text-base sm:text-xl break-all">TRX-{randomNumber}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                        <p className="text-base sm:text-xl font-medium">Date & Time</p>
                        <p className="text-base sm:text-xl">
                            {`${new Intl.DateTimeFormat("en-US",{ month: "long" }).format(new Date())} ${new Date().getDate()} `} 2025 • {new Date().getHours()}:{new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}
                        </p>
                    </div>
                </div>

                <div className="buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-evenly">
                    <button
                        type="button"
                        className="px-4 py-2 sm:py-3 flex cursor-pointer justify-center items-center bg-transparent text-black font-medium rounded-lg hover:border-2 hover:text-black border hover:border-gray-600 transition-all text-sm sm:text-base"
                    >
                       <span className="mr-2"><Icon iconClass="fa-download" size="small" /></span> 
                       Download Receipt 
                    </button>

                    <button
                        type="button"
                        onClick={handleNavigateToStart}
                        className="px-4 py-2 sm:py-3 cursor-pointer flex justify-center items-center bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all text-sm sm:text-base"
                    >
                         <span className="mr-2"><Icon iconClass="fa-paper-plane" size="small" /></span>   
                         Make Another Transfer 
                    </button>
                </div>
              </div>

              <div className="flex justify-center sm:justify-end mt-12 sm:mt-20">
                  <button
                    type="button"
                    onClick={() => navigate('/wallet')}
                    className="w-full sm:w-48 py-2 sm:py-3 cursor-pointer items-center flex justify-center bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all text-sm sm:text-base"
                  >
                    Go to my wallet  
                    <span className="pl-2"><Icon iconClass="fa-arrow-right" size="small" /></span> 
                  </button>
              </div>
          </form>
        </div>
        </>
    )
}