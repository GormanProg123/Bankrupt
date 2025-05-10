import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../../../api/baseUrl";

export const CardCreateForm = () => {
  const navigate = useNavigate();
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [nameOnCard, setNameOnCard] = useState("");
  const [transactionLimit, setTransactionLimit] = useState("");
  const [features, setFeatures] = useState({
    contactless: false,
    international: false,
    online: false,
    atm: false,
  });

  const handleFeatureToggle = (feature: keyof typeof features) => {
    setFeatures({ ...features, [feature]: !features[feature] });
  };

  const handleSubmit = async () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

    const payload = {
      design: selectedDesign,
      name_on_card: nameOnCard,
      daily_limit: transactionLimit,
      features: {
        contactless: features.contactless,
        international: features.international,
        online: features.online,
        atm: features.atm,
      },
    };

    console.log("Token:", token);

    try {
      const res = await fetch(`${API_URL}/cards/cards/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Card creation failed");
      alert("Card successfully created!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      console.log("Token:", token);
      alert("Error creating card");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-xl mt-8 shadow">
      <h2 className="text-2xl font-bold mb-1 text-black">
        Customize Your Card
      </h2>
      <p className="text-gray-600 mb-6">
        Choose design and set preferences for your new card
      </p>

      <h3 className="text-sm text-black mb-2">Card Design</h3>
      <div className="flex gap-4 mb-6">
        {[
          {
            id: "blue-purple",
            bg: "bg-gradient-to-r from-blue-500 to-purple-600",
          },
          { id: "black", bg: "bg-black" },
          {
            id: "green-turquoise",
            bg: "bg-gradient-to-r from-green-400 to-teal-500",
          },
        ].map((design) => (
          <div
            key={design.id}
            onClick={() => setSelectedDesign(design.id)}
            className={`w-32 h-20 rounded-xl cursor-pointer flex items-center justify-center text-white text-xl ${
              design.bg
            } ${selectedDesign === design.id ? "ring-4 ring-black" : ""}`}
          >
            {selectedDesign === design.id && <FiCheck />}
          </div>
        ))}
      </div>

      <h3 className="text-sm text-black mb-2">Card Settings</h3>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <input
          type="text"
          placeholder="Name on Card (Name and Surname)"
          className="p-3 rounded-lg border border-gray-300"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
        />
        <input
          type="number"
          placeholder="Daily Transaction Limit"
          className="p-3 rounded-lg border border-gray-300"
          value={transactionLimit}
          onChange={(e) => setTransactionLimit(e.target.value)}
        />
      </div>

      <h3 className="text-sm text-black mb-2">Security Features</h3>
      <div className="space-y-4 mb-6">
        {[
          {
            key: "contactless",
            label: "Contactless Payments",
            desc: "Enable tap-to-pay functionality",
          },
          {
            key: "international",
            label: "International Transactions",
            desc: "Allow transactions outside your country",
          },
          {
            key: "online",
            label: "Online Purchases",
            desc: "Allow card to be used for online shopping",
          },
          {
            key: "atm",
            label: "ATM Withdrawals",
            desc: "Allow cash withdrawals at ATMs",
          },
        ].map((item) => (
          <label
            key={item.key}
            className="flex items-start space-x-3 cursor-pointer"
          >
            <input
              type="checkbox"
              className="mt-1"
              checked={features[item.key as keyof typeof features]}
              onChange={() =>
                handleFeatureToggle(item.key as keyof typeof features)
              }
            />
            <div>
              <p className="text-black font-medium">{item.label}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </label>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Create a card
      </button>
    </div>
  );
};
