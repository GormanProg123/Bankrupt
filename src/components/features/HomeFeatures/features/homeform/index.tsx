import { VerticalHeader } from "./layout/vertheader";
import WalletCardsBlock from "../../../WalletFeatures/features/WalletHeader/WalletCardsBlock";
import { useAuth } from "../../../../../context/AuthContext";
import SavingsGoals from "../../../WalletFeatures/features/WalletMain/SidePanel/SavingsGoals";
import { Contact } from "./Contacts";
import { Notifications } from "./Notifications";
import { HomeQuickActions } from "./HomeQuickActions";
import { UpcomingBills } from "./UpcomingBills";
import { RecentTransactions } from "./RecentTransactions";
import { FinancialInsights } from "./FinancialInsights";

export const HomeForm = () => {
  const { user } = useAuth();
  const userName = user ? `${user.first_name} ${user.last_name}` : "John Doe";


  return (
    <div className="flex flex-col lg:flex-row w-full">
      <VerticalHeader />

      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex-1 p-2 sm:p-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">Welcome back, {userName}</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Here's what's happening with your accounts today.
          </p>

          <div className="mt-3">
            <WalletCardsBlock />
          </div>

          
          <div className="gap-2 sm:gap-4 w-full mt-6 sm:mt-10">
       
            <div className="flex flex-col xl:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4">
              <HomeQuickActions />
              <UpcomingBills />
            </div>
            
         
            <div className="flex flex-col xl:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4">
              <RecentTransactions />
              <FinancialInsights />
            </div>
          </div>

        
          <div className="flex flex-col lg:flex-row w-full gap-2 sm:gap-4">
            <div className="w-full lg:w-1/3">
              <SavingsGoals />
            </div>
            <div className="w-full lg:w-1/3">
              <Notifications />
            </div>
            <div className="w-full lg:w-1/3">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};