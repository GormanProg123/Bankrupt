import { Icon } from "../../../atoms/Icon"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { selectPage } from "../../../../app/features/TransferPages/TransferPagesSlice"

export const TransferError = () => {
    const dispatch = useDispatch();
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
                          <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-1">Transfer failed</p>
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
                    <div className="border-red-600 rounded-full border-4 sm:border-5 w-16 h-16 sm:w-20 sm:h-20 items-center flex justify-center text-red-600">
                        <Icon iconClass="fa-xmark" />
                    </div>
                </div>
                    
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-2 pt-2 sm:pt-3">Transfer Failed!</h3>
                <p className="text-base sm:text-xl text-center text-gray-400 py-2 mb-4 sm:mb-6">Retry to transfer or create new one</p>

                <div className="buttons flex justify-center pt-4 sm:pt-5">
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

              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-12 sm:mt-20">
                  <button
                    type="button"
                    onClick={() => navigate('/wallet')}
                    className="w-full sm:w-48 py-2 sm:py-3 cursor-pointer items-center flex justify-center bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all text-sm sm:text-base"
                  >
                   <span className="pr-2"><Icon iconClass="fa-arrow-left" size="small" /></span>  
                   Retry  
                  </button>
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