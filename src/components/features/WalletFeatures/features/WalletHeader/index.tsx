import { Icon } from "../../../../atoms/Icon";
import WalletCardsBlock from "./WalletCardsBlock";
import { API_URL } from "../../../../api/baseUrl";
import { cardsUpdate } from "../../../../../app/features/TriggerUpdate/TriggerUpdateSlice";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
const WalletHeader = () => {
  const updateCards= useSelector((state:RootState) => state.triggerUpdateSlice.cardsUpdate)
  const dispatch = useDispatch()
  const createNewCard = async () => {
    try {
      const res = await fetch(`${API_URL}/card/create`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.ok) {
        window.dispatchEvent(new Event('refreshCards'));
      } else {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      dispatch(cardsUpdate({savingsUpdate:false,cardsUpdate:!updateCards}))
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="wallet-top py-6 md:py-10 px-4">
      <div className="container flex flex-col sm:flex-row justify-between items-start sm:items-center mx-auto gap-4">
        <h3 className="text-2xl md:text-3xl font-bold">My Wallets</h3>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full sm:w-auto">
          <button className="export cursor-pointer sm:mr-5 text-sm md:text-lg text-black bg-transparent border-gray-400 border hover:border-gray-600 px-3 md:px-4 py-2 rounded-lg flex items-center justify-center gap-2">
            <Icon iconClass="fa-download" size="small" />
            Export
          </button>
          <button 
            onClick={() => createNewCard()} 
            className="add-wallet cursor-pointer text-sm md:text-lg flex items-center justify-center gap-2 text-white bg-black border-gray-400 border hover:border-gray-900 px-3 md:px-4 py-2 rounded-lg"
          >
            <Icon iconClass="fa-plus" size="small" />
            Add account
          </button>
        </div>
      </div>

      <div className="cards py-5">
        <WalletCardsBlock />
      </div>
    </div>
  );
};

export default WalletHeader;