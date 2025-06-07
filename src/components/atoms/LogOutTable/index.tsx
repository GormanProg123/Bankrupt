import { useNavigate } from "react-router-dom";
import { logoutRequest } from "../../../utils/api";

type LogOutTableProps = {
  onClose: () => void;
};

export const LogOutTable = ({ onClose }: LogOutTableProps) => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logoutRequest();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl p-6 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-center text-gray-900 mb-4">
          Are you sure you want to log out?
        </h2>
        <div className="flex flex-col gap-3">
          <button
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200"
            onClick={handleLogOut}
          >
            Yes, I do
          </button>
          <button
            className="w-full py-2 px-4 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
