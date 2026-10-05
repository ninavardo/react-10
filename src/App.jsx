import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import schema from "./validations/RegisterValidations";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full max-w-sm bg-white border border-sky-200 rounded-2xl shadow p-6"
      >
        <h1 className="text-xl font-bold text-sky-900 text-center mb-1">
          Create account
        </h1>
        <p className="text-sm text-sky-700 text-center mb-5">
          Fill in the fields to register
        </p>

        <label className="block text-sm text-slate-700 mb-1">Username</label>
        <input
          {...register("username")}
          type="text"
          placeholder="Your username"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-1"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mb-2">{errors.username.message}</p>
        )}

        <label className="block text-sm text-slate-700 mb-1 mt-2">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="name@mail.com"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-1"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
        )}

        <label className="block text-sm text-slate-700 mb-1 mt-2">
          Password
        </label>
        <div className="relative mb-1">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-slate-500 cursor-pointer"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
        )}

        <button
          type="submit"
          disabled={!isValid}
          className="w-full mt-4 rounded-lg py-2 text-white"
          style={{
            backgroundColor: !isValid ? "#94a3b8" : "#0284c7",
            cursor: !isValid ? "not-allowed" : "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
