import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/images/hero.png";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements - Fixed positioning to avoid overflow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] transform -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] transform translate-y-1/3"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto pt-28 pb-20 px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="w-full md:w-3/5 text-right md:pr-8 z-10">
          <div className="inline-flex mb-4">
            <Badge
              variant="secondary"
              className="py-1.5 px-4 rounded-full flex gap-1.5 text-sm font-medium backdrop-blur bg-secondary/20 border-0"
            >
              <span className="animate-pulse ">●</span> نسخة تجريبية 1.0
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200">
            <span className="block mb-2">صمم سيرتك الذاتية</span>
            <span className="relative">
              بأسلوب احترافي
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            منصة <span className="text-cyan-300">مدعومة بالذكاء الاصطناعي</span>{" "}
            تساعدك في إنشاء سيرة ذاتية احترافية تلفت انتباه أصحاب العمل في دقائق
            معدودة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/signup" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 text-base font-medium bg-gradient-to-r from-secondary to-cyan-500 hover:from-secondary/90 hover:to-cyan-500/90 border-0 text-white"
              >
                ابدأ الآن مجاناً
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 text-base font-medium border-gray-700 bg-gray-800/40 backdrop-blur-sm text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              شاهد العروض التوضيحية
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-sm">بدون بطاقة ائتمان</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-sm">إلغاء في أي وقت</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-sm">دعم فني متميز</span>
            </div>
          </div>
        </div>

        {/* Image section with floating elements */}
        <div className="w-full md:w-2/5 mt-12 md:mt-0 relative">
          <div className="relative">
            {/* Glowing backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-cyan-500 rounded-2xl blur-lg opacity-70 animate-pulse"></div>

            {/* Main image */}
            <div className="relative bg-gray-900 rounded-2xl p-3 border border-gray-800">
              <Image src={heroImg} alt="Hero" className="rounded-lg" priority />

              {/* Floating accent elements */}
              <div className="absolute -left-6 -top-6 w-16 h-16 bg-secondary/10 backdrop-blur-md rounded-lg border border-secondary/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 w-24 h-12 bg-cyan-500/10 backdrop-blur-md rounded-lg border border-cyan-500/20 flex items-center justify-center">
                <span className="text-xs text-cyan-300 font-medium">
                  ATS متوافق
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
