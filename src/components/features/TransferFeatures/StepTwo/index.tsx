
import {useDispatch } from 'react-redux'
import { nextPage, previousPage  } from '../../../../app/features/transferPages/TransferPagesSlice'

export const TransferStepTwo = () => {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextPage())
  };
  const handlePrevious = () => {
    dispatch(previousPage())
  }
  {/* 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-400 border-gray-300' */}
 {/* 'bg-gray-800' : 'bg-gray-300' */}
    return (
        <>
        <div className="wrap flex justify-center">
          <form
                className="border border-gray-300 border-[2px] rounded-xl p-5 w-6/10" 
                onSubmit={(e) => e.preventDefault()}
              >
                  <div className="form-header pb-5 flex justify-between w-full">
                      <div>
                          <h3 className="text-2xl">Make a Transfer</h3>
                          <p className="text-xl text-gray-500">Select accounts and enter transfer details</p>
                      </div>
                      <div className=" flex justify-end">
                          <div className="flex flex-col items-center max-w-xs  ">

                                 <div className="flex items-center space-x-2">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-sm z-10">
                                      1
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-800 mx-1" />
                                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-sm z-10">
                                      2
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-300 mx-1" />
                                    <div className="w-8 h-8 rounded-full bg-white  border border-gray-300 flex items-center justify-center font-bold text-sm z-10">
                                      3
                                    </div>
                                  </div>
                                 </div>
                          </div>
                                
                      </div>
                  </div>
                

          
            
        
              <div className="w-full mx-auto font-sans">
                <div className="bg-gray-200 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Transfer Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div className="text-gray-500">Transfer Type</div>
                      <div className="font-medium">Standard</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="text-gray-500">From</div>
                      <div className="font-medium">Savings (*7291)</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="text-gray-500">To</div>
                      <div className="font-medium">Checking (*4832)</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="text-gray-500">Amount</div>
                      <div className="font-medium">$0.00</div>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="text-gray-500">Fee</div>
                      <div className="font-medium">$0.00</div>
                    </div>
                    
                    <div className="border-t border-gray-400 my-2"></div>
                    
                    <div className="flex justify-between">
                      <div className="font-bold">Total</div>
                      <div className="font-bold">$0.00</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Important Information</h3>
                  <p className="text-sm">
                    By confirming this transfer, you agree to the terms and conditions of Bankrupt Bank's
                    transfer service. Standard transfers are typically processed within 1 business day.
                    Scheduled and recurring transfers will be processed on the specified date(s).
                  </p>
                </div>
              </div>


              
              <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="w-24 py-2 cursor-pointer bg-transparent text-black font-medium rounded-lg hover:border-[2px] hover:text-black border hover:border-gray-600 transition-all"
                  >
                    Back 
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-48 py-2 cursor-pointer bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all"
                  >
                    Continue 
                  </button>
              </div>
              
          </form>
        </div>
        
        </>
    )
}


