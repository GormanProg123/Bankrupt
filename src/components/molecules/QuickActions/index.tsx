
import { Icon } from '../../atoms/Icon';

const QuickActions = () => {
  return (
    <aside className="quick-actions border rounded-lg p-5 bg-white shadow-sm">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
  
      <div className="space-y-2">
        <button className="w-full flex items-center gap-2 border p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="text-sm"><Icon iconClass='fa-wallet' size='small'></Icon> View Card Details</span>
        </button>
  
        <button className="w-full flex items-center gap-2 border p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="text-sm"><Icon iconClass='fa-arrow-right' size='small'></Icon> Make a Transfer</span>
        </button>
  
        <button className="w-full flex items-center gap-2 border p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="text-sm"><Icon iconClass='fa-piggy-bank' size='small'></Icon> Set Up Automatic Savings</span>
        </button> 
  
        <button className="w-full flex items-center gap-2 border p-2 rounded hover:bg-gray-50 cursor-pointer">
          <span className="text-sm"><Icon iconClass='fa-download' size='small'></Icon> Download Statements</span>
        </button>
      </div>
    </aside>
  );
};

export default QuickActions;