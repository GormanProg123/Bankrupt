
import {LoggedNavBar} from '../../shared/LoggedNavBar';
import WalletHeader from '../../features/WalletFeatures/features/WalletHeader/index';     
import Footer from '../../shared/Footer';
import WalletMain from './features/WalletMain/index';

export const Wallet = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      <LoggedNavBar username="John Doe" />
      <WalletHeader />
      <WalletMain  />
      <Footer />
    </div>
  );
};


