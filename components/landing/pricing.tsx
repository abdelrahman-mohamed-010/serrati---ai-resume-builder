import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "المجانية",
    price: "0 ريال",
    description: "ابدأ رحلتك مع الميزات الأساسية",
    features: ["قالبين أساسيين", "تصدير PDF", "تخصيص محدود"],
    buttonText: "ابدأ مجاناً",
    variant: "default" as const,
  },
  {
    name: "الاحترافية",
    price: "29 ريال/شهرياً",
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
    <motion.div
      className="bg-white py-16 md:py-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">خطط الأسعار</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          اختر الخطة المناسبة لاحتياجاتك
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  buttonText,
  variant,
  badge,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  variant: "default" | "featured";
  badge?: string;
}) {
  return (
    <Card
      className={`relative border-2 ${
        variant === "featured"
          ? "border-secondary"
          : "hover:border-secondary transition-colors"
      } flex flex-col`}
    >
      {badge && (
        <div className="absolute -top-4 right-4">
          <Badge className="bg-secondary">{badge}</Badge>
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="text-3xl font-bold mb-4">{price}</div>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        <div className="flex-1">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          className={`w-full mt-6 ${
            variant === "featured" ? "bg-secondary hover:bg-secondary/90" : ""
          }`}
          variant={variant === "featured" ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}
