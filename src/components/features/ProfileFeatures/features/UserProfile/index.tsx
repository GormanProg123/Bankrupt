import { useState } from "react";
import { Icon } from "../../../../atoms/Icon";

interface UserProfileProps {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  address: string;
  city: string;
  state: string;
  post_code: string;
}

export const UserProfile = (props: UserProfileProps) => {
  const [profile, setProfile] = useState<UserProfileProps>(props);

  const handleChange =
    (field: keyof UserProfileProps) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProfile({ ...profile, [field]: e.target.value });
    };

  return (
    <div className="w-2/3 border-2 border-gray-300 rounded-2xl p-10 max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <p className="text-2xl font-semibold">Profile</p>
        <p className="text-lg text-gray-500">Your personal information</p>
        <div className="flex justify-center">
          <div className="bg-gray-400 w-32 h-32 rounded-full mt-6" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="first_name"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            value={profile.first_name}
            onChange={handleChange("first_name")}
            className="bg-gray-200 p-3 rounded-lg w-full"
          />
        </div>
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            value={profile.last_name}
            onChange={handleChange("last_name")}
            className="bg-gray-200 p-3 rounded-lg w-full"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700" htmlFor="email">
          Email Address
        </label>
        <span className="flex items-center">
          <Icon iconClass="fa-envelope" size="small" />
          <input
            type="email"
            id="email"
            value={profile.email}
            onChange={handleChange("email")}
            className="bg-gray-200 ml-2 p-3 rounded-lg w-full"
          />
        </span>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <span className="flex items-center">
          <Icon iconClass="fa-phone" size="small" />
          <input
            type="text"
            value={profile.phone_number}
            onChange={handleChange("phone_number")}
            className="bg-gray-200 ml-2 p-3 rounded-lg w-full"
          />
        </span>
      </div>

      <div className="space-y-1">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="date_of_birth"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="date_of_birth"
          value={profile.date_of_birth}
          onChange={handleChange("date_of_birth")}
          className="bg-gray-200 p-3 rounded-lg w-full"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={profile.address}
          onChange={handleChange("address")}
          className="bg-gray-200 p-3 rounded-lg w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            value={profile.city}
            onChange={handleChange("city")}
            className="bg-gray-200 p-3 rounded-lg w-full"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            value={profile.state}
            onChange={handleChange("state")}
            className="bg-gray-200 p-3 rounded-lg w-full"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">ZIP Code</label>
          <input
            type="text"
            value={profile.post_code}
            onChange={handleChange("post_code")}
            className="bg-gray-200 p-3 rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};
