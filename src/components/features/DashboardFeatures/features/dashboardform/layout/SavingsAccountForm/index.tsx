import { useForm } from "react-hook-form";
import { API_URL } from "../../../../../../api/baseUrl";

type FormData = {
  name: string;
  goal: number;
};

export const SavingsAccountForm = ({ onCancel }: { onCancel: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(`${API_URL}/savings/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        onCancel();
      } else {
        console.error("Failed to create saving");
      }
    } catch (err) {
      console.error("Error creating saving:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 px-20 max-w-md mx-auto bg-gray-600 rounded-xl"
    >
      <h2 className="text-xl font-semibold mb-4">Create Saving Goal</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <span className="text-red-600 text-sm">This field is required</span>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Goal Amount</label>
        <input
          type="number"
          {...register("goal", { required: true, valueAsNumber: true })}
          className="w-full p-2 border rounded"
        />
        {errors.goal && (
          <span className="text-red-600 text-sm">This field is required</span>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
