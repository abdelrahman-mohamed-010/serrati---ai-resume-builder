import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import temp1 from "@/public/images/temp1.jpg";
import temp2 from "@/public/images/temp2.jpg";
import temp3 from "@/public/images/temp3.jpg";
import temp4 from "@/public/images/temp4.jpg";
import temp5 from "@/public/images/temp5.jpg";
import temp6 from "@/public/images/temp6.jpg";

const tempImages = [temp1, temp2, temp3, temp4, temp5, temp6];

export function Templates() {
  return (
    <div className="bg-gray-50/80 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium block mb-3">
            قوالب متنوعة
          </span>

          <h2 className="text-3xl pb-2 md:text-5xl font-bold mb-5 bg-gradient-to-r from-secondary to-cyan-600 bg-clip-text text-transparent">
            قوالب مميزة لسيرتك الذاتية
          </h2>

          <p className="text-gray-600 text-lg">
            اختر من بين مجموعة متنوعة من القوالب الاحترافية المصممة لمساعدتك على
            التميز
          </p>
        </div>

        {/* Template Display - Fix overflow issues */}
        <div className="mb-16  overflow-x-hidden">
          {/* First visible row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <TemplateCard
                key={index}
                index={index + 1}
                image={tempImages[index]}
              />
            ))}
          </div>

          {/* Second row (visible on desktop) */}
          <div className="hidden lg:grid grid-cols-3 gap-8 mt-4">
            {[3, 4, 5].map((index) => (
              <TemplateCard
                key={index}
                index={index + 1}
                image={tempImages[index]}
              />
            ))}
          </div>
        </div>

        {/* Browse All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="group bg-white hover:bg-secondary hover:text-white text-gray-800 py-6 px-8 rounded-xl font-medium border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span>عرض جميع القوالب</span>
            <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function TemplateCard({
  index,
  image,
}: {
  index: number;
  image: StaticImageData;
}) {
  return (
    <div className="group relative m w-full">
      <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl">
        <div className="relative">
          {/* Template Image */}
          <Image
            src={image}
            alt={`قالب ${index}`}
            width={image.width}
            height={image.height}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold mb-3">
                القالب {index}
              </h3>
              <p className="text-gray-200 text-sm mb-4">
                قالب احترافي يناسب{" "}
                {index % 2 === 0 ? "المجال التقني" : "مجال الأعمال"} ويبرز
                مهاراتك بشكل مميز
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-center"
              >
                استخدم هذا القالب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
