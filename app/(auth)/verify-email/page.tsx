"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function VerifyEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would normally redirect after successful verification
    }, 1500);
  };

  const handleResendCode = () => {
    // Logic to resend verification code
    alert("تم إرسال رمز التحقق مرة أخرى");
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
          <h2 className="auth-heading">تحقق من بريدك الإلكتروني</h2>
          <p className="mt-5 text-gray-400">
            لقد أرسلنا رمز التحقق إلى بريدك الإلكتروني. الرجاء إدخاله أدناه
          </p>
        </div>

        <Card className="auth-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="verification-code" className="auth-label">
                رمز التحقق
              </label>
              <div className="relative">
                <input
                  id="verification-code"
                  placeholder="أدخل رمز التحقق"
                  type="text"
                  required
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="auth-input"
                  maxLength={6}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-2 bg-secondary hover:bg-secondary/90 text-lg"
              disabled={isLoading}
            >
              {isLoading ? "جاري التحقق..." : "أكّد"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-4">لم تستلم رمز التحقق؟</p>
            <Button
              variant="outline"
              onClick={handleResendCode}
              className="border-gray-700 hover:bg-gray-800 hover:text-white"
            >
              <RefreshCw className="ml-2 h-4 w-4" />
              إعادة إرسال الرمز
            </Button>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">عودة إلى</span>{" "}
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
