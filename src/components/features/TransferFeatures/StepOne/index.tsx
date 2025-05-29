
import { useState } from "react";
import { Icon } from "../../../atoms/Icon";
import { useDispatch } from 'react-redux'
import { nextPage  } from '../../../../app/features/TransferPages/TransferPagesSlice'
import { transferDataUpdate } from "../../../../app/features/TransferData/TransferDataSlice";
import { TransferData } from "../../../../types/wallet";


  {/* 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-400 border-gray-300' */}
 {/* 'bg-gray-800' : 'bg-gray-300' */}

export const TransferStepOne = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState<TransferData>({
      from_card_number:"",
      to_card_number:"",
      amount:0,
      // note:""
  });
    
  const handleNext = () => {
    if (Object.values(formData).every((field) => field !== "") && (formData.from_card_number.length === 16 && formData.to_card_number.length === 16 && formData.from_card_number !== formData.to_card_number) && formData.amount > 0 ) {
      dispatch(transferDataUpdate(formData))
      dispatch(nextPage())
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };


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
                                    <div className="w-8 h-8 rounded-full bg-white  border border-gray-300 flex items-center justify-center font-bold text-sm z-10">
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
                

            
                  <div className="flex flex-col flex-1 pb-2">
                    <label
                      htmlFor="from_card_number"
                      className="text-sm font-medium mb-3 text-black"
                    >
                      From
                    </label>
                    <span className="relative flex items-center">
                      <span className="absolute left-[5px]">
                        <Icon iconClass="fa-credit-card" size="small" />
                      </span>
                      
                      <input
                        id="from_card_number"
                        value={formData.from_card_number}
                        onChange={handleChange}
                        placeholder="Example number your card "
                        required
                        className="p-1 pl-10 border border-gray-300 rounded-lg bg-white text-black w-1/2"
                      /> 

                    </span>
                  </div>

                  <div className="flex flex-col flex-1  pb-2">
                    <label
                      htmlFor="to_card_number"
                      className="text-sm font-medium mb-3 text-black"
                    >
                      To
                    </label>
                    <span className="relative flex items-center">
                      <span className="absolute left-[5px]">
                        <Icon iconClass="fa-credit-card" size="small" />
                      </span>
                      
                      <input
                        id="to_card_number"
                        value={formData.to_card_number}
                        onChange={handleChange}
                        placeholder="Card different person"
                        required
                        className="p-1 pl-10 border border-gray-300 rounded-lg bg-white text-black w-1/2"
                      /> 

                    </span>

                    
                    
                  </div>

                  <div className="flex flex-col flex-1  pb-2">
                    <label
                      htmlFor="amount"
                      className="text-sm font-medium mb-3 text-black"
                    >
                      Amount
                    </label>
         
                    <span className="relative flex items-center">
                      <span className="absolute left-[10px]">
                        <Icon iconClass="fa-dollar" size="small" />
                      </span>
                      
                      <input
                        id="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="0.00"
                        required
                        className="p-1 pl-10 border border-gray-300 rounded-lg bg-white text-black w-1/2"
                      /> 

                    </span>
                  </div>

                  <div className="flex flex-col flex-1  pb-2">
                    <label
                      htmlFor="note"
                      className="text-sm font-medium mb-3 text-black"
                    >
                      Note(Optional)
                    </label>
                    <textarea
                      id="note"
                      // value={}
                      // onChange={}
                      placeholder="Add a note for this transfer"
                      className="p-1 border border-gray-300 rounded-lg bg-white text-black w-3/4 h-50"
                    />
                  </div>
                

              

            <div className="flex justify-end mt-6">
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


