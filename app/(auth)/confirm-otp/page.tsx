"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function ConfirmOTP() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length !== 6) {
      return;
    }
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
            تأكيد البريد الإلكتروني
          </h2>
          <p className="mt-2 text-gray-400">تم إرسال رمز التحقق إلى {email}</p>
        </div>

        <Card className="p-6 bg-gray-900 border border-gray-800 shadow-xl">
          <form onSubmit={handleSubmit} className="">
            <InputOTP
              value={value}
              onChange={(val) => setValue(val)}
              maxLength={6}
              containerClassName="justify-center gap-2 mb-4 direction-ltr"
              inputMode="numeric"
            >
              <InputOTPGroup className="flex items-center justify-center gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="w-12 h-12 text-center text-2xl rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                ))}
              </InputOTPGroup>
              <InputOTPSeparator className="text-gray-500 mx-2">
                -
              </InputOTPSeparator>
              <InputOTPGroup className="flex items-center justify-center gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <InputOTPSlot
                    key={i + 3}
                    index={i + 3}
                    className="w-12 h-12 text-center text-2xl rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <Button
              type="submit"
              className="w-full py-2  bg-secondary hover:bg-secondary/90 text-lg"
              disabled={isLoading || value.length !== 6}
            >
              {isLoading ? "جاري التحقق..." : "أتم"}
            </Button>
          </form>

          <div className="mt-2 text-center text-sm">
            <span className="text-gray-400">لم يصلك الرمز؟</span>{" "}
            <Button
              variant="link"
              className="text-secondary hover:text-secondary/90 p-0"
              onClick={() => router.push("/sign-up")}
            >
              إعادة الإرسال
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
