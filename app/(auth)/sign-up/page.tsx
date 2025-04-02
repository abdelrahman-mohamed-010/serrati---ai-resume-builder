"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { useRouter } from "next/navigation";
import { signUp } from "../lib/supabaseAuth";
import { PasswordInput } from "@/app/(auth)/components/PasswordInput";

interface FormErrors {
  email: string;
  password: string;
  confirmPassword: string;
  general: string;
}

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset error messages before validating
    setFormErrors({
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    });
    let hasError = false;
    const errors: FormErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    };

    if (!email) {
      errors.email = "الرجاء إدخال البريد الإلكتروني";
      hasError = true;
    }
    if (!password) {
      errors.password = "الرجاء إدخال كلمة المرور";
      hasError = true;
    } else if (password.length < 8) {
      errors.password = "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
      hasError = true;
    }
    if (!confirmPassword) {
      errors.confirmPassword = "الرجاء اعادة كتابة كلمة المرور";
      hasError = true;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "كلمة المرور غير متطابقة";
      hasError = true;
    }
    if (hasError) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    try {
      const result = await signUp(email, password);
      if (result.success) {
        const encodedEmail = encodeURIComponent(email);
        router.push(`/confirm-otp?email=${encodedEmail}`);
      } else {
        setFormErrors((prev) => ({
          ...prev,
          general:
            result.message || "حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى.",
        }));
      }
    } catch (error) {
      setFormErrors((prev) => ({
        ...prev,
        general: "حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-grid-background" />
      <motion.div
        className="auth-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image src={Logo} alt="Logo" className="h-14 w-auto" priority />
          </Link>
          <h2 className="auth-heading">إنشاء حساب جديد</h2>
        </div>

        <Card className="auth-card">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="auth-label">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  id="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                />
              </div>
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="auth-label">
                كلمة المرور
              </label>
              <PasswordInput
                id="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={formErrors.password}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="auth-label">
                اعادة كتابه السر
              </label>
              <PasswordInput
                id="confirmPassword"
                placeholder="أعد إدخال كلمة المرور"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={formErrors.confirmPassword}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) =>
                  setAgreedToTerms(checked as boolean)
                }
                className="border-gray-700 data-[state=checked]:bg-secondary"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-gray-400 cursor-pointer"
              >
                أوافق على{" "}
                <Link href="/terms" className="text-secondary">
                  الشروط والأحكام
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full py-2 bg-secondary hover:bg-secondary/90 text-lg"
              disabled={isLoading || !agreedToTerms}
            >
              {isLoading ? "جاري إنشاء الحساب..." : "انضم"}
            </Button>
          </form>

          {formErrors.general && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {formErrors.general}
            </p>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  أو تسجيل باستخدام
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                جوجل
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 hover:text-white"
              >
                <Github className="ml-2 h-5 w-5" />
                جيتهب
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">لديك حساب بالفعل؟</span>{" "}
            <Link
              href="/sign-in"
              className="font-medium text-secondary hover:text-secondary/90"
            >
              تسجيل الدخول
            </Link>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="auth-link">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
