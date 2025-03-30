import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <motion.div
      className="bg-white py-16 md:py-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          ماذا يقول عملاؤنا
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const testimonials = [
  {
    name: "أحمد محمد",
    role: "مهندس برمجيات",
    content:
      "منصة رائعة ساعدتني في الحصول على وظيفة أحلامي. القوالب احترافية والدعم ممتاز!",
  },
  {
    name: "سارة أحمد",
    role: "مصممة جرافيك",
    content:
      "سهولة الاستخدام والتصميم الاحترافي جعل من تجربة إنشاء السيرة الذاتية ممتعة وفعالة.",
  },
  {
    name: "خالد عبدالله",
    role: "محلل أعمال",
    content:
      "الذكاء الاصطناعي في المنصة ساعدني في تحسين محتوى سيرتي الذاتية بشكل كبير.",
  },
];

function TestimonialCard({
  name,
  role,
  content,
}: {
  name: string;
  role: string;
  content: string;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
        <div className="mr-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
    </Card>
  );
}
