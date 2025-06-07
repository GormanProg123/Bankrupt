import React, { useState } from 'react';
import { API_URL } from '../../../../../../../api/baseUrl';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../../../app/store';
import { savingsModalState } from '../../../../../../../../app/features/SavingsGoalModal/SavingsGoalModalSlice';
import { savingsUpdate } from '../../../../../../../../app/features/TriggerUpdate/TriggerUpdateSlice';

const ModalGoal = () => {
  const [goalName, setGoalName] = useState<string>();
  const [targetAmount, setTargetAmount] = useState<number>();
  const dispatch = useDispatch();
  const updateSavings = useSelector((state:RootState) => state.triggerUpdateSlice.savingsUpdate)

  const onModalClose = () => { 
    dispatch(savingsModalState({modalState:false}))
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goalName || !targetAmount){
      alert('You must enter all fields')
    }
        try{
              const res = await fetch(`${API_URL}/savings/create`, {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ name:goalName,goal:targetAmount }),
            });

             if (!res.ok) {  
            console.log(!res.ok);
            throw new Error('Network response was not ok');
          }   
            
          const result = await res.json();
          dispatch(savingsUpdate({savingsUpdate:!updateSavings,cardsUpdate:false}))
          console.log(result)
        } catch (error) {
        console.error('Error:', error);
      }


    onModalClose()
  };

  return (
    <div className="  fixed inset-0 bg-black/70 flex justify-center items-center z-50" >
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Goal</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" >Goal Name</label>
            <input
              type="text"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black"
              placeholder="e.g., Vacation"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Target Amount</label>
            <input
              type="number"
              value={targetAmount}
              onChange={(e) => setTargetAmount(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black"
              placeholder="e.g., 1000"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onModalClose}
              className="px-4 py-2 rounded-md border border-gray-300 text-black hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900 cursor-pointer"
            >
              Save Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalGoal;
