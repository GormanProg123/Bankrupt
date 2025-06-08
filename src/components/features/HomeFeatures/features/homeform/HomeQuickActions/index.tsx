import {
  FaPaperPlane,
  FaCreditCard,
  FaDownload
} from 'react-icons/fa'
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
export const HomeQuickActions = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="recent-transactions p-4 sm:p-6 lg:p-8 xl:p-10 border rounded-xl w-full xl:w-3/5">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Quick Actions</h2>
                <p className="text-sm sm:text-base lg:text-xl">Frequently used banking services</p>
                
                <div className="flex flex-col sm:flex-row pt-3 sm:pt-5 gap-3 sm:gap-4 lg:gap-6">
                    <div onClick={() => navigate('/transfer')} className="quick-action-block border rounded-xl text-center p-2 sm:p-3 flex-1">
                        <div className="flex justify-center">
                            <FaPaperPlane size={20} className="sm:w-6 sm:h-6 text-center"/>
                        </div>
                        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl pt-1 sm:pt-2 text-center leading-tight">
                            Transfer money
                        </p>
                    </div>
                    
                    <div onClick={() => navigate('/bills')} className="quick-action-block border rounded-xl text-center p-2 sm:p-3 flex-1">
                        <div className="flex justify-center">
                            <GoArrowUpRight size={20} className="sm:w-6 sm:h-6 text-center"/>
                        </div>
                        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl pt-1 sm:pt-2 text-center leading-tight">
                            Pay bills
                        </p>
                    </div>
                    
                    <div onClick={() => navigate('/wallet')} className="quick-action-block border rounded-xl text-center p-2 sm:p-3 flex-1">
                        <div className="flex justify-center">
                            <FaCreditCard size={20} className="sm:w-6 sm:h-6 text-center"/>
                        </div>
                        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl pt-1 sm:pt-2 text-center leading-tight">
                            View Accounts
                        </p>
                    </div>
                    
                    <div  className="quick-action-block border rounded-xl text-center p-2 sm:p-3 flex-1">
                        <div className="flex justify-center">
                            <FaDownload size={20} className="sm:w-6 sm:h-6 text-center"/>
                        </div>
                        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl pt-1 sm:pt-2 text-center leading-tight">
                            Download Statements
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}