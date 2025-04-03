import { useState } from "react";
import { Eye } from "lucide-react";

interface PasswordInputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
}

export function PasswordInput({
  id,
  placeholder,
  value,
  onChange,
  error,
  autoComplete = "new-password",
}: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="space-y-2">
      <div className="relative">
        <input
          id={id}
          placeholder={placeholder}
          type={isPasswordVisible ? "text" : "password"}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="auth-input"
        />
        {value && (
          <button
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            type="button"
            className={`absolute top-1/2 focus:border-none -translate-y-1/2 left-3 cursor-pointer w-5 ${
              isPasswordVisible ? "text-secondary" : "text-gray-500"
            }`}
          >
            <Eye />
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
