import React from 'react';
import SavingsGoals from '../../molecules/SavingsGoals/index';
import QuickActions from '../../molecules/QuickActions/index';

const SidePanel: React.FC = () => {
  return (
    <div className="aside pl-4 max-w-md w-1/3">
      <SavingsGoals />
      <QuickActions />
    </div>
  );
};

export default SidePanel;