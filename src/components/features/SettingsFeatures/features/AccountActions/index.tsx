import { LogOutTable } from "../../../../atoms/LogOutTable";
import { Icon } from "../../../../atoms/Icon";
import { useState } from "react";
export const AccountActions = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <div className="account-actions border-2 border-red-500 rounded-2xl p-5">
        <h2 className="text-3xl font-medium text-red-500">Account Actions</h2>
        <p>Manage your account status</p>
        <button
          className="w-full mt-10 text-red-500 bg-transparent cursor-pointer text-black text-medium text-xl border-gray-300 border hover:bg-red-500 hover:text-black px-8 py-2 rounded-xl"
          onClick={() => setShowLogoutModal(true)}
        >
          <span className="text-black">
            <Icon iconClass="fa-user" size="small" />
          </span>{" "}
          Deactivate Account
        </button>
      </div>

      {showLogoutModal && (
        <LogOutTable onClose={() => setShowLogoutModal(false)} />
      )}
    </>
  );
};
