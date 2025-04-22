import { Icon } from '../../atoms/Icon';

type IconClassType = 
  | "fa-credit-card"
  | "fa-chart-column"
  | "fa-piggy-bank"
  | "fa-paper-plane"
  | "fa-globe"
  | "fa-chart-line"
  | "fa-hourglass-half"
  | "fa-bolt"
  | "fa-gift"
  | "fa-download"
  | "fa-star"
  | "fa-plus"
  | "fa-wallet"
  | "fa-arrow-right";

interface WalletCardProps {
  title: string;
  amount: string;
  icon: IconClassType;  
  additionalClasses?: string;
  iconWrapper?: boolean;
}

const WalletCard = ({ 
  title, 
  amount, 
  icon, 
  additionalClasses = '', 
  iconWrapper = false 
}: WalletCardProps) => {
  return (
    <div className={`card mr-5 bg-white p-6 rounded-2xl shadow-xl w-fit flex flex-col border-gray-300 border-2 ${additionalClasses}`}>
      <div className="flex items-center justify-between pb-5">
        <span className="text-gray-700 text-2xl font-medium pr-20">{title}</span>
        {iconWrapper ? (
          <div className="w-8 h-8 bg-orange-100 border-2 border-black rounded-full flex items-center justify-center">
            <Icon iconClass={icon} size='small'></Icon>
          </div>
        ) : (
          <Icon iconClass={icon} size='small'></Icon>
        )}
      </div>
      <div className="text-3xl font-bold text-black pb-3">{amount}</div>
    </div>
  );
};

export default WalletCard;