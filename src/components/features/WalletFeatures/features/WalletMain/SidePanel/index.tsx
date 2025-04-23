import SavingsGoals from './SavingsGoals/index';
import QuickActions from './QuickActions/index';

export const SidePanel = () => {
  return (
    <div className="aside pl-4 max-w-md w-1/3">
      <SavingsGoals />
      <QuickActions />
    </div>
  );
};

