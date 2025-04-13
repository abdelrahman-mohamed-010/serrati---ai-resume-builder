import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background gradient with contained blur elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-16 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center">
              <motion.span
                className="inline-block text-secondary bg-secondary/20 px-4 py-1 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                ابدأ الآن
              </motion.span>

              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                حان الوقت لبناء مستقبلك المهني
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                انضم إلى آلاف المستخدمين الذين يصممون سيرهم الذاتية باحترافية
                ويحصلون على الوظائف التي يطمحون إليها
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/builder">
                  <Button
                    size="lg"
                    className="gap-2 text-lg bg-gradient-to-r from-secondary to-cyan-500 hover:from-secondary/90 hover:to-cyan-500/90 border-0 py-6 px-8 font-medium shadow-lg text-white"
                  >
                    جرب مجاناً الآن
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>

                <Link href="/templates">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-lg border-white/20 bg-white/10 backdrop-blur hover:bg-white/20 py-6 px-8 font-medium text-white"
                  >
                    استكشف القوالب
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="mt-8 flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full bg-gray-300 border-2 border-white relative z-${
                        10 - i
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-300">انضم إلى +5000 مستخدم سعيد</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
