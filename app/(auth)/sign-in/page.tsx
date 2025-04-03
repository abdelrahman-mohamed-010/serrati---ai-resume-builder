"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { useRouter } from "next/navigation";
import {
  signIn,
  signInWithGithub,
  signInWithGoogle,
} from "../../../actions/supabaseAuth";
import { PasswordInput } from "@/components/auth/PasswordInput";

interface FormErrors {
  email: string;
  password: string;
  general: string;
}

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    password: "",
    general: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset error messages before validating
    setFormErrors({
      email: "",
      password: "",
      general: "",
    });

    let hasError = false;
    const errors: FormErrors = {
      email: "",
      password: "",
      general: "",
    };

    if (!email) {
      errors.email = "الرجاء إدخال البريد الإلكتروني";
      hasError = true;
    }
    if (!password) {
      errors.password = "الرجاء إدخال كلمة المرور";
      hasError = true;
    }
    if (hasError) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    try {
      const result = await signIn(email, password);
      if (result.success) {
        // Redirect to dashboard or home page after successful login
        router.push("/dashboard");
      } else {
        setFormErrors((prev) => ({
          ...prev,
          general:
            result.message || "حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى.",
        }));
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormErrors((prev) => ({
        ...prev,
        general: "حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    const result = await signInWithGithub();
    if (result.success && result.url) {
      window.location.href = result.url;
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result.success && result.url) {
      window.location.href = result.url;
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
            <Image src={Logo} alt="Logo" className="h-14 w-auto" />
          </Link>
          <h2 className="auth-heading">تسجيل الدخول إلى حسابك</h2>
        </div>

        <Card className="auth-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="auth-label">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                placeholder="أدخل بريدك الإلكتروني"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Link
                  href="/forgot-password"
                  className="text-sm text-secondary hover:text-secondary/90"
                >
                  نسيت كلمة المرور؟
                </Link>
                <label htmlFor="password" className="auth-label">
                  كلمة المرور
                </label>
              </div>
              <PasswordInput
                id="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={formErrors.password}
              />
            </div>
            <Button
              type="submit"
              className="w-full py-2 bg-secondary hover:bg-secondary/90 text-lg"
              disabled={isLoading}
            >
              {isLoading ? "جاري تسجيل الدخول..." : "أدخل"}
            </Button>
            {formErrors.general && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {formErrors.general}
              </p>
            )}
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  أو تسجيل الدخول باستخدام
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 hover:text-white"
                onClick={handleGoogleSignIn}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="ml-2"
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
                onClick={handleGithubSignIn}
              >
                <Github className="ml-2 h-5 w-5" />
                جيتهب
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">ليس لديك حساب؟</span>{" "}
            <Link
              href="/sign-up"
              className="font-medium text-secondary hover:text-secondary/90"
            >
              إنشاء حساب جديد
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
