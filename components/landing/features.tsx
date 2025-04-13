import Image from "next/image";
import { motion } from "framer-motion";
import starIcon from "@/public/images/star.png";
import paperIcon from "@/public/images/paper.png";
import downloadIcon from "@/public/images/file.png";
import { ArrowRight } from "lucide-react";

export function Features() {
  return (
    <div className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-secondary font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ميزاتنا المتقدمة
          </motion.span>

          <motion.h2
            className="text-3xl md:text-5xl pb-2 font-bold mb-5 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            تجربة مميزة لإنشاء السيرة الذاتية
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              منصة متكاملة تجمع بين التصميم الاحترافي والذكاء الاصطناعي لتقديم
              أفضل تجربة
            </p>
          </motion.div>
        </div>

        {/* Features with staggered animation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-y-0 gap-x-8">
          {[
            {
              icon: paperIcon,
              title: "قوالب احترافية",
              description:
                "مجموعة متنوعة من القوالب المصممة بعناية لتناسب مختلف المجالات والوظائف",
              color: "from-gray-100 to-gray-50",
              iconBg: "bg-gray-900/5",
              linkText: "اكتشف القوالب",
              delay: 0,
            },
            {
              icon: starIcon,
              title: "تحسين ذكي",
              description:
                "محرك ذكاء اصطناعي متطور يساعدك في تحسين محتوى سيرتك الذاتية تلقائياً",
              color: "from-secondary/10 to-cyan-50",
              iconBg: "bg-secondary/5",
              linkText: "اكتشف المزيد",
              delay: 0.2,
              featured: true,
            },
            {
              icon: downloadIcon,
              title: "تصدير احترافي",
              description:
                "صدّر سيرتك الذاتية بتنسيقات متعددة وبجودة عالية تناسب المعايير العالمية",
              color: "from-gray-100 to-gray-50",
              iconBg: "bg-gray-900/5",
              linkText: "معرفة المزيد",
              delay: 0.4,
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="relative"
            >
              {/* Background pattern */}
              <div className="hidden lg:block absolute right-0 top-1/3 -z-10">
                {i < 2 && (
                  <svg
                    width="60"
                    height="140"
                    viewBox="0 0 60 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-30"
                  >
                    <path
                      d="M45 0L60 15M45 30L60 45M45 60L60 75M45 90L60 105M45 120L60 135"
                      stroke={feature.featured ? "#0284c7" : "#64748b"}
                      strokeWidth="2"
                    />
                    <path
                      d="M15 0L30 15M15 30L30 45M15 60L30 75M15 90L30 105M15 120L30 135"
                      stroke={feature.featured ? "#0284c7" : "#64748b"}
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>

              <div
                className={`h-full rounded-2xl p-8 border ${
                  feature.featured ? "border-secondary/30" : "border-gray-200"
                } 
                  transition-all duration-300 hover:shadow-lg hover:shadow-gray-100 bg-gradient-to-br ${
                    feature.color
                  }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.iconBg}`}
                  >
                    <Image
                      src={feature.icon}
                      alt={`${feature.title} icon`}
                      width={34}
                      height={34}
                      className="opacity-80"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-lg">
                  {feature.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className={`inline-flex items-center text-sm font-semibold ${
                    feature.featured ? "text-secondary" : "text-gray-900"
                  } hover:gap-2 transition-all`}
                >
                  {feature.linkText}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 mr-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
