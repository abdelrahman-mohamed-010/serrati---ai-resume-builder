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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
      <motion.div
        className="w-full max-w-md z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image src={Logo} alt="Logo" className="h-8 w-auto" priority />
          </Link>
          <h2 className="mt-6 text-2xl font-bold text-white">
            تحقق من بريدك الإلكتروني
          </h2>
          <p className="mt-5 text-gray-400">
            لقد أرسلنا رمز التحقق إلى بريدك الإلكتروني. الرجاء إدخاله أدناه
          </p>
        </div>

        <Card className="p-6 bg-gray-900 border border-gray-800 shadow-xl text-right">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="verification-code"
                className="block text-white mb-3 font-medium text-sm"
              >
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
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
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
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
