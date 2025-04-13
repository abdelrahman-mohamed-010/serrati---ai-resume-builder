import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "المجانية",
    price: "0 ريال",
    period: "للأبد",
    description: "ابدأ رحلتك مع الميزات الأساسية",
    features: ["قالبين أساسيين", "تصدير PDF", "تخصيص محدود"],
    buttonText: "ابدأ مجاناً",
    variant: "default" as const,
  },
  {
    name: "الاحترافية",
    price: "29 ريال",
    period: "شهرياً",
    description: "لمن يبحث عن المزيد من الاحترافية",
    features: [
      "جميع القوالب",
      "تحسين بالذكاء الاصطناعي",
      "تخصيص غير محدود",
      "دعم متميز",
    ],
    buttonText: "ابدأ الآن",
    variant: "featured" as const,
    badge: "الأكثر شعبية",
  },
  {
    name: "المؤسسات",
    price: "اتصل بنا",
    period: "",
    description: "حلول مخصصة للشركات",
    features: [
      "جميع ميزات الخطة الاحترافية",
      "تخصيص حسب الطلب",
      "دعم على مدار الساعة",
      "تدريب للفريق",
    ],
    buttonText: "اتصل بنا",
    variant: "default" as const,
  },
];

export function Pricing() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50 py-24 relative overflow-hidden">
      {/* Background decoration - Fixed positioning to avoid overflow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-medium block mb-3">
            خطط الأسعار
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            اختر الخطة المناسبة لاحتياجاتك
          </h2>
          <p className="text-gray-600 text-lg">
            خطط مرنة تناسب احتياجاتك المختلفة، مع إمكانية الترقية أو الإلغاء في
            أي وقت
          </p>
        </motion.div>

        {/* Pricing cards - Fix overflow issues */}
        <div className="grid md:grid-cols-3 gap-8 overflow-x-visible">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} {...plan} index={i} />
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block bg-gray-50 py-2 px-4 rounded-full">
            <p className="text-gray-600 text-sm flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ضمان استرداد المال خلال 30 يوماً
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  variant,
  badge,
  index,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  variant: "default" | "featured";
  badge?: string;
  index: number;
}) {
  const isFeatured = variant === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full pt-4 relative" // Added relative positioning for badge placement
    >
      {/* Badge positioned outside the Card but within the motion.div */}
      {badge && (
        <div className="absolute -top-1 left-0 right-0 flex justify-center z-20">
          <Badge className="bg-secondary border-0 text-white px-3 py-1 text-xs font-semibold">
            {badge}
          </Badge>
        </div>
      )}

      <Card
        className={`relative rounded-2xl overflow-hidden flex flex-col h-full ${
          isFeatured
            ? "shadow-xl shadow-secondary/10 border-secondary/30 scale-105 z-10"
            : "shadow-md border-gray-200 hover:shadow-lg hover:border-gray-300"
        }`}
      >
        <div
          className={`p-8 flex-1 ${
            isFeatured ? "bg-gradient-to-br from-white to-secondary/5" : ""
          }`}
        >
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-4xl font-bold">{price}</span>
              {period && <span className="text-gray-500 mr-2">/{period}</span>}
            </div>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 rounded-full p-1 ${
                      isFeatured ? "bg-secondary/10" : "bg-gray-100"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 ${
                        isFeatured ? "text-secondary" : "text-gray-700"
                      }`}
                    />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-8 pb-8 ${
            isFeatured ? "bg-gradient-to-br from-white to-secondary/5" : ""
          }`}
        >
          <Button
            className={`w-full py-6 text-base ${
              isFeatured
                ? "bg-secondary hover:bg-secondary/90 text-white"
                : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-800"
            }`}
          >
            {buttonText}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
