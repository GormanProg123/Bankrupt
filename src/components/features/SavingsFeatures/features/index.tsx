
import { LuPlus, LuMinus, LuChartBar, LuSettings,  } from "react-icons/lu"
import { SavingCard } from "./Savings"
import { LoggedNavBar } from "../../../shared/LoggedNavBar"
import Footer from "../../../shared/Footer"
import { SavingsAccountForm } from "../../DashboardFeatures/features/dashboardform/layout/SavingsAccountForm"
import { useState,useEffect } from "react"
import { API_URL } from "../../../api/baseUrl"

interface ISavingData {
    id:number,
    name:string,
    balance:number,
    goal:number,
    remain:number
}

export default function SavingsGoals() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [savingsData, setSavingsData] = useState<ISavingData[]>([]); 
    const [overallBalance, setOverallBalance] = useState<number>(0)
    const [overallGoal, setOverallGoal] = useState<number>(0)


    const handleCloseModal = () => {
        setShowModal(false);
    };

    
  
    const getSavingsData = async () => {
        try {
        const res = await fetch(`${API_URL}/savings`, {
            method: 'GET',
            headers: {
            "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (!res.ok) {  
            console.log(res.ok)
            throw new Error('Network response was not ok');
        } 
        
        const result = await res.json();
        setSavingsData(result);
        result.map((data:ISavingData) => {
            setOverallBalance((prev) => prev+data.balance)
            setOverallGoal((prev) => prev+data.goal)
        })
        console.log(result,'bills');

            
        } catch (error) {
        console.error('Error:', error);
        }
    };    

    useEffect(() => {
        getSavingsData();
    }, []);


    const getProgressPercent = (balance: number, goal: number): number => {
        if (goal <= 0) return 0; 
        const progress = (balance / goal) * 100;
        return Number(Math.min(100, Math.max(0, progress)).toFixed(3));
    };

  return (
    <>
    <div className="min-h-screen flex flex-col">
        <LoggedNavBar/>
         <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Savings Goals</h1>
        <p className="text-muted-foreground">Track your progress towards financial goals</p>
      </div>

      <div className="border rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <LuChartBar className="h-5 w-5" />
          <h2 className="font-bold text-lg">Overall Progress</h2>
        </div>

        <div className="flex justify-between text-sm mb-1">
          <span>Total Saved: ${overallBalance/2}</span>
          <span>Total Target: ${overallGoal/2}</span>
        </div>

        <div className="h-2 sm:h-3 bg-gray-200 rounded-xl mt-1 sm:mt-2">
            <div className="h-2 sm:h-3 bg-black rounded-xl" style={{width:`${getProgressPercent(overallBalance/2,overallGoal/2)}%`}}></div>
        </div>
        <div className="text-right text-sm mt-1">{getProgressPercent(overallBalance/2,overallGoal/2)}% Complete</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {
            savingsData.map((savingData,id) => {
                return (
                    <SavingCard
                        id={savingData.id}
                        title={savingData.name}
                        current={savingData.balance}
                        target={savingData.goal}
                        progress={getProgressPercent(savingData.balance, savingData.goal)}
                    />
                )
            })
        }
      

        <div onClick={() => setShowModal(!showModal)} className="border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-2">
            <LuPlus className="h-5 w-5" />
          </div>
          <h3 className="font-medium">Add New Goal</h3>
          <p className="text-sm text-muted-foreground">Set a new savings target</p>
        </div>
      </div>

    
    </div>
   <div className={`${showModal ? '' : 'hidden'} absolute inset-0 z-100 bg-black/75 flex items-center justify-center`}>
    <SavingsAccountForm onCancel={handleCloseModal}/>
    </div>

    <Footer/>
    </div>
        
    </>
   
  )
}

