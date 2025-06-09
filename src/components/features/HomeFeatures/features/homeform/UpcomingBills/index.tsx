import { useNavigate } from "react-router-dom"
import { API_URL } from "../../../../../api/baseUrl";
import { useState,useEffect } from "react";

interface BillData {
    amount:number,
    due_date:string,
    id:number,
    name:string,
    paid:boolean

} 


export const UpcomingBills = () => {
    const navigate = useNavigate();
    const [billsData, setBillsData] = useState<BillData[]>([]); 

     const getBillsData = async () => {
         try {
           const res = await fetch(`${API_URL}/bills`, {
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
           setBillsData(result);
           console.log(result,'bills');
     
             
         } catch (error) {
           console.error('Error:', error);
         }
       };    
     
       useEffect(() => {
         getBillsData();
       }, []);

    return (
        <>
            <div className="upcoming-bills px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 border rounded-xl w-full xl:w-2/5">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Upcoming Bills</h2>
                <p className="text-sm sm:text-base lg:text-xl">Due in the next 7 days</p>
                
                {billsData.map((data) => {
                    let date1 = new Date(data.due_date)
                    return (
                        <div className="bills-block">
                            <div className="bill-block pt-2 sm:pt-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-sm sm:text-base flex-1 min-w-0 truncate">{data.name}</h3>
                                    <p className="font-bold text-sm sm:text-base flex-shrink-0 ml-2">${data.amount}</p>
                                </div>
                                <p className="text-gray-500 text-xs sm:text-sm"> {`${new Intl.DateTimeFormat("en-US",{ month: "long" }).format(date1)} ${date1.getDate()} `} {date1.getFullYear()} • {date1.getHours()}:{date1.getMinutes() < 10 ? `0${date1.getMinutes()}` : date1.getMinutes()}</p>
                                <div className="h-2 sm:h-3 bg-gray-200 rounded-xl mt-1 sm:mt-2">
                                    <div className="h-2 sm:h-3 bg-black rounded-xl" style={{width:"75%"}}></div>
                                </div>
                            </div> 
                        </div>
                    )
                  
                })}
              
                
                <div className="flex justify-center pt-3 sm:pt-5">
                    <button onClick={() => navigate('/bills')} className="bg-black text-white rounded-lg cursor-pointer w-full px-8 sm:px-12 lg:px-20 py-2 sm:py-3 font-bold text-xs sm:text-sm lg:text-base">
                        View All Bills
                    </button>
                </div>
            </div>
        </>
    )
}