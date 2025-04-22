import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";
import { LoginPage } from "../components/pages/LoginPage";
import { RegistrationPage } from "../components/pages/RegistrationPage";
import { RegistrationStepOne } from "../components/features/RegistrationFeatures/features/StepOne";
import { RegistrationStepTwo } from "../components/features/RegistrationFeatures/features/StepTwo";
import { RegistrationStepThree } from "../components/features/RegistrationFeatures/features/StepThree";
import { WalletPage } from "../components/pages/WalletPage";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/registration/step1" element={<RegistrationStepOne />} />
      <Route path="/registration/step2" element={<RegistrationStepTwo />} />
      <Route path="/registration/step3" element={<RegistrationStepThree />} />
      <Route path="/wallet" element={<WalletPage />} />
    </Routes>
  );
};
