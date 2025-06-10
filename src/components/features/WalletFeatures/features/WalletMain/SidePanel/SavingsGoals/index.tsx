import { useEffect, useState } from "react";
import ModalGoal from "./ModalGoal";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../app/store";
import { API_URL } from "../../../../../../api/baseUrl";
import { useNavigate } from "react-router-dom";

interface ISavingGoals {
  id: number;
  name: string;
  goal: number;
  balance: number;
}

const SavingsGoals = () => {
  const modalState = useSelector(
    (state: RootState) => state.savingsGoalModalSlice.modalState
  );
  const [savingGoals, setSavingGoals] = useState<ISavingGoals[]>([]);
  const updateSavings = useSelector(
    (state: RootState) => state.triggerUpdateSlice.savingsUpdate
  );
  const navigate = useNavigate();

  const getSavingGoals = async () => {
    try {
      const res = await fetch(`${API_URL}/savings/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        console.log(!res.ok);
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      setSavingGoals(result);
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getSavingGoals();
  }, [updateSavings]);

  return (
    <aside className="saving-goals border rounded-lg p-4 md:p-5 bg-white shadow-sm">
      <h2 className="text-lg md:text-xl font-bold mb-1">Savings Goals</h2>
      <p className="text-sm text-gray-600 mb-4">
        Track your progress towards financial goals
      </p>

      {savingGoals.map((goal, id) => (
        <div className="mb-5" key={id}>
          <div className="flex justify-between font-semibold text-sm md:text-base">
            <span>{goal.name}</span>
            <span>{((goal.balance / goal.goal) * 100).toFixed(2)}%</span>
          </div>
          <p className="text-xs md:text-sm text-gray-500">
            Target: ${goal.goal}
          </p>
          <div className="w-full h-2 bg-gray-200 rounded mt-2 mb-1">
            <div
              className="h-full bg-black rounded"
              style={{
                width: `${
                  Number(((goal.balance / goal.goal) * 100).toFixed(2)) > 100
                    ? 100
                    : ((goal.balance / goal.goal) * 100).toFixed(2)
                }%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>Current: ${goal.balance}</span>
            <span>Remaining: ${goal.goal - goal.balance}</span>
          </div>
        </div>
      ))}

      <button
        onClick={() => navigate("/saving-account")}
        className="w-full  bg-black text-white py-2 md:py-3 rounded font-semibold hover:opacity-90 cursor-pointer text-sm md:text-base"
      >
        View all goals
      </button>
      <div className={` ${modalState ? "" : "hidden"}`}>
        <ModalGoal />
      </div>
    </aside>
  );
};

export default SavingsGoals;
