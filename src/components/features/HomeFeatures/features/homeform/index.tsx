import { VerticalHeader } from "./layout/vertheader";
import WalletCardsBlock from "../../../WalletFeatures/features/WalletHeader/WalletCardsBlock";
import { useAuth } from "../../../../../context/AuthContext";

export const HomeForm = () => {
  const { user } = useAuth();
  const userName = user ? `${user.first_name} ${user.last_name}` : "John Doe";

  return (
    <div className="flex">
      <VerticalHeader />

      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {userName}</h1>
        <p className="text-gray-600">
          Here's what's happening with your accounts today.
        </p>

        <div className="mt-10">
          <WalletCardsBlock />
        </div>
      </div>
    </div>
  );
};
