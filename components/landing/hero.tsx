import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/images/hero.png";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center ">
          <div className="text-right w-full md:w-[65%]">
            <Badge variant="secondary" className="mb-4 py-2">
              نسخة تجريبية 🚀
            </Badge>
            <h1 className="text-4xl md:text-6xl pb-6 font-bold mb-3 text-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 ">
              <span className="block mb-4">صمم سيرتك الذاتية</span>
              <span className="pb-3">بأسلوب احترافي</span>
            </h1>
            <p className="text-xl block mb-8 md:text-2xl text-gray-300">
              استخدم الذكاء الاصطناعي لإنشاء سيرة ذاتية مميزة في دقائق معدودة
            </p>
            <div className="flex gap-4">
              <Link href={"/signup"}>
                <Button
                  size="lg"
                  className="gap-2 text-lg bg-secondary max-sm:text-sm max-sm:px-3 hover:bg-secondary/90"
                >
                  ابدأ الآن مجاناً
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg border-gray-600 max-sm:w-44 hover:text-white max-sm:text-sm max-sm:px-3 text-gray-400 hover:bg-gray-800"
              >
                شاهد العروض التوضيحية
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>بدون بطاقة ائتمان</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>إلغاء في أي وقت</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-[43%]">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-40"></div>
              <div className="relative bg-gray-900 rounded-lg p-4">
                <Image src={heroImg} alt="Hero" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
