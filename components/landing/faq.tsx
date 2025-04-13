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
      "نعم، يمكنك استخدام النسخة الأساسية مجاناً. هناك خطط مدفوعة للميزات المتقدمة والقوالب الإضافية. يمكنك الترقية في أي وقت حسب احتياجاتك.",
  },
  {
    question: "كيف يمكنني تصدير السيرة الذاتية؟",
    answer:
      "يمكنك تصدير سيرتك الذاتية بصيغة PDF عالية الجودة بضغطة زر واحدة. تتوفر أيضاً خيارات إضافية للتصدير في الخطط المدفوعة مثل صيغ Word و DOCX.",
  },
  {
    question: "هل يمكنني تعديل القوالب؟",
    answer:
      "نعم، جميع القوالب قابلة للتخصيص بالكامل لتناسب احتياجاتك. يمكنك تعديل الألوان والخطوط والتخطيط بما يتناسب مع أسلوبك الشخصي.",
  },
  {
    question: "كيف يعمل الذكاء الاصطناعي في تحسين السيرة الذاتية؟",
    answer:
      "يقوم الذكاء الاصطناعي بتحليل محتوى سيرتك الذاتية واقتراح تحسينات للصياغة والمحتوى. كما يقدم توصيات لتعزيز فرصك في اجتياز أنظمة تتبع المتقدمين (ATS) التي تستخدمها الشركات الكبرى.",
  },
  {
    question: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
    answer:
      "نعم، يمكنك إلغاء اشتراكك في أي وقت بكل سهولة من خلال لوحة التحكم الخاصة بك. لن تكون هناك أي رسوم إضافية بعد الإلغاء.",
  },
  {
    question: "هل تقدمون حلولاً للشركات والمؤسسات؟",
    answer:
      "نعم، نقدم حلولاً مخصصة للشركات والمؤسسات التعليمية. يرجى التواصل مع فريق المبيعات للحصول على عرض سعر مخصص يناسب احتياجات مؤسستك.",
  },
];

export function FAQ() {
  return (
    <div className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Background elements - Contained within the section */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transform -translate-x-1/4"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/4"></div>

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
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            كل ما تحتاج معرفته
          </h2>
          <p className="text-gray-600 text-lg">
            إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
          </p>
        </motion.div>

        {/* FAQ Grid - Fix overflow issues */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 overflow-x-visible">
          {/* First column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.slice(0, 3).map((item, index) => (
                <AccordionItem
                  key={`col1-item-${index}`}
                  value={`col1-item-${index}`}
                  className="bg-white rounded-xl shadow-sm border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <span className="text-right text-lg font-medium text-gray-900 group-hover:text-secondary transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Second column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.slice(3).map((item, index) => (
                <AccordionItem
                  key={`col2-item-${index}`}
                  value={`col2-item-${index}`}
                  className="bg-white rounded-xl shadow-sm border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <span className="text-right text-lg font-medium text-gray-900 group-hover:text-secondary transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Contact support */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600">
            لم تجد الإجابة على سؤالك؟{" "}
            <a
              href="/contact"
              className="text-secondary font-medium hover:underline"
            >
              تواصل مع فريق الدعم
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
