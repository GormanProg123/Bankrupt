import { useState } from "react";
import { RegistrationStepOne } from "./features/StepOne";
import { RegistrationStepTwo } from "./features/StepTwo";
import { RegistrationStepThree } from "./features/StepThree";

export const RegistrationFeatures = () => {
  const [currentStep] = useState(1);

  return (
    <div>
      {currentStep === 1 && <RegistrationStepOne />}
      {currentStep === 2 && <RegistrationStepTwo />}
      {currentStep === 3 && <RegistrationStepThree />}
    </div>
  );
};
