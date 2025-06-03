import { useDispatch } from "react-redux";
import { selectPage } from "../../../../app/features/TransferPages/TransferPagesSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { TransferData } from "../../../../types/wallet";

type ApiResponse = {
  message: string;
};

export const TransferStepTwo = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const formData = useSelector((state: RootState) => state.transferDataUpdate);
  const dispatch = useDispatch();

  const handleNext = async () => {
    const data: TransferData = {
      from_card_number: formData.from_card_number,
      to_card_number: formData.to_card_number,
      amount: formData.amount,
    };

    try {
      const res = await fetch(`${apiUrl}/card/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // важно, чтобы cookie отправлялись
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await res.json();

      if (!res.ok) {
        dispatch(selectPage(404));
        console.error(result.message);
        return;
      }

      dispatch(selectPage(3));
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePrevious = () => {
    dispatch(selectPage(1));
  };

  return (
    <>
      <div className="wrap flex justify-center px-4">
        <form
          className="border border-gray-300 border-2 rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-2xl lg:max-w-4xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-header pb-4 sm:pb-6 flex flex-col lg:flex-row lg:justify-between lg:items-start w-full space-y-4 lg:space-y-0">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold">Make a Transfer</h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-1">
                Select accounts and enter transfer details
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                      1
                    </div>
                    <div className="w-4 sm:w-8 h-0.5 bg-gray-800 mx-1" />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                      2
                    </div>
                    <div className="w-4 sm:w-8 h-0.5 bg-gray-300 mx-1" />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto font-sans">
            <div className="bg-gray-100 sm:bg-gray-200 rounded-lg p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Transfer Summary
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <div className="text-gray-500 text-sm sm:text-base">
                    Transfer Type
                  </div>
                  <div className="font-medium text-sm sm:text-base">
                    Standard
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <div className="text-gray-500 text-sm sm:text-base">From</div>
                  <div className="font-medium text-sm sm:text-base break-all">
                    (*{formData.from_card_number.slice(-4)})
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <div className="text-gray-500 text-sm sm:text-base">To</div>
                  <div className="font-medium text-sm sm:text-base break-all">
                    (*{formData.to_card_number.slice(-4)})
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <div className="text-gray-500 text-sm sm:text-base">
                    Amount
                  </div>
                  <div className="font-medium text-sm sm:text-base">
                    ${formData.amount}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <div className="text-gray-500 text-sm sm:text-base">Fee</div>
                  <div className="font-medium text-sm sm:text-base">$0.00</div>
                </div>

                <div className="border-t border-gray-400 my-2"></div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <div className="font-bold text-sm sm:text-base">Total</div>
                  <div className="font-bold text-sm sm:text-base">
                    ${formData.amount}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 border border-gray-200 rounded-lg p-3 sm:p-4">
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                Important Information
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed">
                By confirming this transfer, you agree to the terms and
                conditions of Bankrupt Bank's transfer service. Standard
                transfers are typically processed within 1 business day.
                Scheduled and recurring transfers will be processed on the
                specified date(s).
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6">
            <button
              type="button"
              onClick={handlePrevious}
              className="w-full sm:w-24 py-2 sm:py-3 cursor-pointer bg-transparent text-black font-medium rounded-lg hover:border-2 hover:text-black border hover:border-gray-600 transition-all text-sm sm:text-base"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-full sm:w-48 py-2 sm:py-3 cursor-pointer bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all text-sm sm:text-base"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
