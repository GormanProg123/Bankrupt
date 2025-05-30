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
            <div className="wrap flex justify-center">
          <form
                className="border border-gray-300 border-[2px] rounded-xl p-5 w-6/10" 
                onSubmit={(e) => e.preventDefault()}
              >
                  <div className="form-header pb-5 flex justify-between w-full">
                      <div>
                          <h3 className="text-2xl">Make a Transfer</h3>
                          <p className="text-xl text-gray-500">Transfer failed</p>
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
                                    <div className="w-8 h-0.5 bg-gray-800 mx-1" />
                                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-sm z-10">
                                      3
                                    </div>
                                  </div>
                                 </div>
                          </div>
                                
                      </div>
                  </div>
                

          
            
        
              <div className="w-full mx-auto font-sans ">
                <div className="flex justify-center">
                    <div className="border-red-600 rounded-full border-[5px] w-20 h-20 items-center flex justify-center text-red-600"><Icon iconClass="fa-xmark"  /></div>
                </div>
                    
                    <h3 className="text-4xl text-center pt-3">Transfer Failed!</h3>
                      <p className="text-xl text-center text-gray-400 py-2 ">Retry to transfer or create new one</p>



                    <div className="buttons flex justify-evenly  pt-5">
                     

                        <button
                            type="button"
                            onClick={handleNavigateToStart}
                            className="px-4 cursor-pointer flex justify-center py-2 bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all"
                        >
                             <span className="mr-2"><Icon iconClass="fa-paper-plane"  size="small" /></span>   Make Another Transfer 
                        </button>
                    </div>
              </div>


              
              <div className="flex justify-between mt-20">
                  <button
                    type="button"
                    onClick={() => navigate('/wallet')}
                    className="w-48 py-2 cursor-pointer items-center flex justify-center bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all"
                  >
                   <span className="pr-2"><Icon iconClass="fa-arrow-left" size="small" /></span>  Retry  
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/wallet')}
                    className="w-48 py-2 cursor-pointer items-center flex justify-center bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all"
                  >
                    Go to my wallet  <span className="pl-2"><Icon iconClass="fa-arrow-right" size="small" /></span> 
                  </button>
              </div>
              
          </form>
        </div>
        </>
    )
}