"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { resetPassword } from "../../../actions/supabaseAuth";

interface FormErrors {
  email: string;
  general: string;
}

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    general: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setFormErrors({
      email: "",
      general: "",
    });

    // Validate
    let hasError = false;
    const errors: FormErrors = {
      email: "",
      general: "",
    };

    if (!email) {
      errors.email = "الرجاء إدخال البريد الإلكتروني";
      hasError = true;
    }

    if (hasError) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    try {
      const result = await resetPassword(email);
      if (result.success) {
        setIsSubmitted(true);
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

  const handleResend = () => {
    setIsSubmitted(false);
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
          <h2 className="auth-heading">استعادة كلمة المرور</h2>
        </div>

        <Card className="auth-card">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Alert className="bg-secondary/20 border-secondary text-white mb-4">
                <AlertDescription>
                  تم إرسال رابط إعادة تعيين كلمة المرور إلى {email}. يرجى التحقق
                  من صندوق الوارد الخاص بك.
                </AlertDescription>
              </Alert>
              <Button
                onClick={handleResend}
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                إرسال مرة أخرى
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>

              {formErrors.general && (
                <p className="text-red-500 text-sm text-center">
                  {formErrors.general}
                </p>
              )}

              <Button
                type="submit"
                className="w-full py-2 bg-secondary hover:bg-secondary/90 text-lg"
                disabled={isLoading || !email}
              >
                {isLoading ? "جاري الإرسال..." : "أرسل"}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">تذكرت كلمة المرور؟</span>{" "}
            <Link
              href="/sign-in"
              className="font-medium text-secondary hover:text-secondary/90"
            >
              العودة إلى تسجيل الدخول
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
