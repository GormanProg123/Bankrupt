import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../../../../atoms/Icon';


const QuickActions = () => {
  const navigate = useNavigate()
  return (
    <aside className="quick-actions border rounded-lg p-4 md:p-5 bg-white shadow-sm">
      <h2 className="text-lg md:text-xl font-bold mb-4">Quick Actions</h2>
  
      <div className="space-y-2">
        <button onClick={() => navigate('/dashboard')} className="w-full flex items-center gap-2 border p-3 rounded hover:bg-gray-50 cursor-pointer">
          <Icon iconClass='fa-wallet' size='small' />
          <span className="text-xs md:text-sm">View Card Details</span>
        </button>
  
        <button onClick={() => navigate('/transfer')} className="w-full flex items-center gap-2 border p-3 rounded hover:bg-gray-50 cursor-pointer">
          <Icon iconClass='fa-arrow-right' size='small' />
          <span className="text-xs md:text-sm">Make a Transfer</span>
        </button>
  
        <button className="w-full flex items-center gap-2 border p-3 rounded hover:bg-gray-50 cursor-pointer">
          <Icon iconClass='fa-piggy-bank' size='small' />
          <span className="text-xs md:text-sm">Set Up Automatic Savings</span>
        </button> 
  
        <button className="w-full flex items-center gap-2 border p-3 rounded hover:bg-gray-50 cursor-pointer">
          <Icon iconClass='fa-download' size='small' />
          <span className="text-xs md:text-sm">Download Statements</span>
        </button>
      </div>
    </aside>
  );
};

export default QuickActions;