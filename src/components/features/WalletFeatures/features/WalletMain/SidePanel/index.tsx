import SavingsGoals from './SavingsGoals/index';
import QuickActions from './QuickActions/index';

export const SidePanel = () => {
  return (
    <div className="aside space-y-4 w-full">
      <SavingsGoals />
      <QuickActions />
    </div>
  );
};
