import { Routes, Route } from "react-router-dom";
import { MainPage } from "../components/pages/MainPage";
import { LoginPage } from "../components/pages/LoginPage";
import { RegistrationPage } from "../components/pages/RegistrationPage";
import { RegistrationStepOne } from "../components/features/RegistrationFeatures/features/StepOne";
import { RegistrationStepTwo } from "../components/features/RegistrationFeatures/features/StepTwo";
import { RegistrationStepThree } from "../components/features/RegistrationFeatures/features/StepThree";
import { WalletPage } from "../components/pages/WalletPage";
import { ProfilePage } from "../components/pages/Profile";
import { HomePage } from "../components/pages/HomePage";
import { DashboardPage } from "../components/pages/DashboardPage";
import { CardCreatePage } from "../components/pages/CardCreatePage";
import { TransferPage } from "../components/pages/TransferPage";
import { TransferError } from "../components/features/TransferFeatures/TransferError";
import { ResetPasswordPage } from "../components/pages/ResetPasswordPage";
import { ResetPasswordConfirmPage } from "../components/pages/ResetPasswordConfirmPage";
import { TwoFAConfirmPage } from "../components/pages/TwoFAConfirmPage";
import { SettingsPage } from "../components/pages/SettingsPage";
import { SavingAccountPage } from "../components/pages/SavingAccountPage";
import { BillsPage } from "../components/pages/BillsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* === Main page === */}
      <Route path="/" element={<MainPage />} />

      {/* === Auth === */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/2fa-confirm" element={<TwoFAConfirmPage />} />
      <Route path="/password-reset" element={<ResetPasswordPage />} />
      <Route path="/reset" element={<ResetPasswordConfirmPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/registration/step1" element={<RegistrationStepOne />} />
      <Route path="/registration/step2" element={<RegistrationStepTwo />} />
      <Route path="/registration/step3" element={<RegistrationStepThree />} />

      {/* === Profile === */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />

      {/* === Basic functionality === */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/wallet" element={<WalletPage />} />

      {/* === Card === */}
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="/transfer-error" element={<TransferError />} />
      <Route path="/card-create" element={<CardCreatePage />} />

      {/* === Savings === */}
      <Route path="/saving-account" element={<SavingAccountPage />} />

      {/* === Bills === */}
      <Route path="/bills" element={<BillsPage />} />
    </Routes>
  );
};
