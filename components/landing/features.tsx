import Image from "next/image";
import { motion } from "framer-motion";
import starIcon from "@/public/images/star.png";
import paperIcon from "@/public/images/paper.png";
import downloadIcon from "@/public/images/file.png";
import { StaticImageData } from "next/image";

export function Features() {
  return (
    <motion.div
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            تجربة مميزة لإنشاء السيرة الذاتية
          </h2>
          <p className="text-gray-600 text-lg max-md:text-sm max-w-2xl mx-auto">
            منصة متكاملة تجمع بين التصميم الاحترافي والذكاء الاصطناعي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={paperIcon}
            title="قوالب احترافية"
            description="مجموعة متنوعة من القوالب المصممة بعناية لتناسب مختلف المجالات"
            variant="default"
          />
          <FeatureCard
            icon={starIcon}
            title="تحسين ذكي"
            description="محرك ذكاء اصطناعي متطور يساعدك في تحسين محتوى سيرتك الذاتية تلقائياً"
            variant="highlight"
          />
          <FeatureCard
            icon={downloadIcon}
            title="تصدير احترافي"
            description="صدّر سيرتك الذاتية بتنسيقات متعددة وبجودة عالية تناسب المعايير العالمية"
            variant="default"
          />
        </div>
      </div>
    </motion.div>
  );
}

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  variant: "default" | "highlight";
}

function FeatureCard({ icon, title, description, variant }: FeatureCardProps) {
  const isHighlight = variant === "highlight";
  return (
    <div className="relative group">
      <div
        className={`absolute inset-0.5 bg-gradient-to-r ${
          isHighlight
            ? "from-secondary/10 to-cyan-50"
            : "from-gray-100 to-gray-50"
        } rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500`}
      ></div>
      <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-500">
        <div className="mb-6">
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${
              isHighlight
                ? "bg-secondary/5"
                : "bg-gray-900/5"
            }`}
          >
            <Image
              src={icon}
              alt={`${title} icon`}
              width={32}
              height={32}
              className="opacity-75"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        <span
          className={`text-sm font-medium cursor-pointer ${
            isHighlight ? "text-secondary/75" : "text-gray-900/75"
          }`}
        >
          {isHighlight ? "اكتشف المزيد" : "اكتشف القوالب"}
        </span>
      </div>
    </div>
  );
}
