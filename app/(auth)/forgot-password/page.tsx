"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleResend = () => {
    setIsSubmitted(false);
    setIsLoading(false);
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
            <Image src={Logo} alt="Logo" className="h-14 w-auto" priority />
          </Link>
          <h2 className="mt-6 text-2xl font-bold text-white">
            استعادة كلمة المرور
          </h2>
        </div>

        <Card className="p-6 bg-gray-900 border border-gray-800 shadow-xl text-right">
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
                <label
                  htmlFor="email"
                  className="block text-white mb-2 font-medium text-sm"
                >
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <input
                    id="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-lg"
                disabled={isLoading || !email}
              >
                {isLoading ? "جاري الإرسال..." : "إرسال رابط الاستعادة"}
                <ArrowRight className="mr-2 w-5 h-5" />
              </Button>
            </form>
          )}

          <div className="mt-6 text-center text-sm">
            <Link
              href="/sign-in"
              className="font-medium text-secondary hover:text-secondary/90"
            >
              العودة إلى تسجيل الدخول
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
