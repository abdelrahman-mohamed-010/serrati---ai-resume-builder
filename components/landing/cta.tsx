import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ابدأ رحلتك المهنية اليوم
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          انضم إلى آلاف المستخدمين الذين يصممون سيرهم الذاتية باحترافية
        </p>
        <Link href="/builder">
          <Button
            size="lg"
            className="gap-2 text-lg bg-secondary hover:bg-secondary/90"
          >
            جرب مجاناً
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
