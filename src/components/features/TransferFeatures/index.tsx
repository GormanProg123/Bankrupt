
import { LoggedNavBar } from "../../shared/LoggedNavBar";
import { TransferStepOne } from "./StepOne";
import { TransferStepTwo } from "./StepTwo";
import { TransferStepThree } from "./StepThree";
import { TransferError } from "./TransferError";
import Footer from "../../shared/Footer";
import type { RootState } from '../../../app/store'
import { useSelector } from 'react-redux'

export const TransferFeatures = () => {
  const currentStep = useSelector((state:RootState) => state.transferPages.value)
  return (
    <>
        <div className="transfer flex min-h-screen flex-col  ">
            <LoggedNavBar username="ldd"/>
            <div className="container mx-auto p-10 flex-grow" >
             
                <h2 className="text-4xl pb-2">Transfer money</h2>
                <p className="text-gray-500 text-xl pb-5">Move money between your accounts or send to someone else</p>
            
                {currentStep === 1 && <TransferStepOne />}
                {currentStep === 2 && <TransferStepTwo />}
                {currentStep === 3 && <TransferStepThree />}
                {currentStep === 404 && <TransferError />}
            </div>
            <Footer />
        </div>
    </>
  )
};
