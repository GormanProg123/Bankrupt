import WalletCard from "../WalletCard";

const WalletCardsBlock = () => {
  return (
    <div className="container mx-auto flex justify-center ">
      <WalletCard title="Total Balance" amount="$12,580.00" icon="fa-wallet" />
      <WalletCard title="Checking" amount="$8,380.00" icon="fa-credit-card" />
      <WalletCard title="Savings" amount="$4,200.00" icon="fa-piggy-bank" />
      <WalletCard
        title="Rewards Points"
        amount="3,250 pts"
        icon="fa-star"
        additionalClasses="bg-stone-300"
        iconWrapper={true}
      />
    </div>
  );
};

export default WalletCardsBlock;
