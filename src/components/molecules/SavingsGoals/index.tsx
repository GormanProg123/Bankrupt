const SavingsGoals = () => {
  return (
    <aside className="saving-goals border rounded-lg p-5 bg-white shadow-sm mb-4">
      <h2 className="text-xl font-bold mb-1">Savings Goals</h2>
      <p className="text-sm text-gray-600 mb-4">Track your progress towards financial goals</p>
  
      <div className="mb-5">
        <div className="flex justify-between font-semibold">
          <span>Vacation Fund</span>
          <span>66%</span>
        </div>
        <p className="text-sm text-gray-500">Target: $3,000.00</p>
        <div className="w-full h-2 bg-gray-200 rounded mt-2 mb-1">
          <div className="h-full bg-black rounded" style={{ width: '66%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>Current: $2,000.00</span>
          <span>Remaining: $1,000.00</span>
        </div>
      </div>
  
      <button className="w-full bg-black text-white py-2 rounded font-semibold hover:opacity-90 cursor-pointer">
        + Add New Goal
      </button>
    </aside>
  );
};


export default SavingsGoals;