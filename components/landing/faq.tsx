import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "هل الخدمة مجانية؟",
    answer:
      "نعم، يمكنك استخدام النسخة الأساسية مجاناً. هناك خطط مدفوعة للميزات المتقدمة.",
  },
  {
    question: "كيف يمكنني تصدير السيرة الذاتية؟",
    answer: "يمكنك تصدير سيرتك الذاتية بصيغة PDF عالية الجودة بضغطة زر واحدة.",
  },
  {
    question: "هل يمكنني تعديل القوالب؟",
    answer: "نعم، جميع القوالب قابلة للتخصيص بالكامل لتناسب احتياجاتك.",
  },
  {
    question: "كيف يعمل الذكاء الاصطناعي في تحسين السيرة الذاتية؟",
    answer:
      "يقوم الذكاء الاصطناعي بتحليل محتوى سيرتك الذاتية واقتراح تحسينات للصياغة والمحتوى.",
  },
];

export function FAQ() {
  return (
    <motion.div
      className="bg-gray-50 py-16 md:py-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          الأسئلة الشائعة
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
              className="bg-white rounded-lg"
            >
              <AccordionTrigger className="px-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}
