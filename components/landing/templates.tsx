import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import temp1 from "@/public/images/temp1.jpg";
import temp2 from "@/public/images/temp2.jpg";
import temp3 from "@/public/images/temp3.jpg";
import temp4 from "@/public/images/temp4.jpg";
import temp5 from "@/public/images/temp5.jpg";
import temp6 from "@/public/images/temp6.jpg";

const tempImages = [temp1, temp2, temp3, temp4, temp5, temp6];

export function Templates() {
  return (
    <motion.div
      className="bg-gray-50 py-16 md:py-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl max-md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-cyan-600 mb-6 max-sm:mb-4">
            قوالب مميزة لسيرتك الذاتية
          </h2>
          <p className="text-gray-600 text-lg max-md:text-sm">
            اختر من بين مجموعة متنوعة من القوالب الاحترافية
          </p>
        </div>

        <TemplatesGrid
          start={1}
          end={3}
          className="md:grid-cols-3 gap-6 mb-8"
        />
        <TemplatesGrid
          start={4}
          end={6}
          className="hidden md:grid grid-cols-3 gap-6 mb-8"
        />

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="inline-flex hover:text-white font-medium"
          >
            عرض جميع القوالب
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function TemplatesGrid({
  start,
  end,
  className,
}: {
  start: number;
  end: number;
  className?: string;
}) {
  return (
    <div className={`grid ${className}`}>
      {Array.from({ length: end - start + 1 }, (_, i) => i + start).map((i) => (
        <TemplateCard key={i} index={i} image={tempImages[i - 1]} />
      ))}
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
    <div className="group relative max-w-[280px] mx-auto w-full md:max-w-none">
      <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
        <Image src={image} alt={`Template ${index}`} fill />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-xl font-bold mb-2">
              القالب {index}
            </h3>
            <Button variant="secondary" size="sm">
              استخدم هذا القالب
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
