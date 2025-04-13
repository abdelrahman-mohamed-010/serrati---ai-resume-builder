import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <div className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-medium block mb-3">
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-gray-600 text-lg">
            تجارب حقيقية لأشخاص استفادوا من خدماتنا في تطوير حياتهم المهنية
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} index={i} />
          ))}
        </div>

        {/* Decorative elements - Fixed positioning to avoid overflow */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "أحمد محمد",
    role: "مهندس برمجيات",
    content:
      "منصة رائعة ساعدتني في الحصول على وظيفة أحلامي. القوالب احترافية والدعم ممتاز! أنصح بها بشدة لكل من يبحث عن تطوير سيرته الذاتية.",
    rating: 5,
    image: "/images/avatar1.jpg",
  },
  {
    name: "سارة أحمد",
    role: "مصممة جرافيك",
    content:
      "سهولة الاستخدام والتصميم الاحترافي جعل من تجربة إنشاء السيرة الذاتية ممتعة وفعالة. استطعت إنشاء سيرة ذاتية احترافية في وقت قياسي.",
    rating: 5,
    image: "/images/avatar2.jpg",
    featured: true,
  },
  {
    name: "خالد عبدالله",
    role: "محلل أعمال",
    content:
      "الذكاء الاصطناعي في المنصة ساعدني في تحسين محتوى سيرتي الذاتية بشكل كبير. حصلت على عدة عروض عمل بعد تحديث سيرتي الذاتية باستخدام المنصة.",
    rating: 4,
    image: "/images/avatar3.jpg",
  },
];

function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
  featured = false,
  index,
}: {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      <Card
        className={`p-8 h-full flex flex-col border-0 ${
          featured
            ? "bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg"
            : "bg-gray-50 hover:shadow-md"
        } rounded-2xl transition-all duration-300`}
      >
        {/* Quotation mark */}
        <div className="mb-6 text-secondary/20">
          <svg
            width="45"
            height="36"
            viewBox="0 0 45 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.34 36C9.008 36 5.544 34.584 2.948 31.752C0.988 29.52 0.00799999 26.64 0.00799999 23.112C0.00799999 17.208 2.156 12.096 6.452 7.776C10.748 3.312 16.516 0.719999 23.756 0L27.22 8.064C22.78 8.928 19.316 10.704 16.804 13.392C14.292 15.936 12.98 19.032 12.98 22.68C12.98 22.968 13.016 23.328 13.088 23.76C13.592 23.472 14.4 23.328 15.512 23.328C18.168 23.328 20.38 24.096 22.124 25.632C23.9 27.024 24.788 29.16 24.788 32.04C24.788 33.864 24.032 35.352 22.52 36.504C21.008 37.656 19.1 38.232 16.804 38.232C15.796 38.232 14.752 38.16 13.67 38.016L13.34 36ZM36.34 36C32.008 36 28.544 34.584 25.948 31.752C23.988 29.52 23.008 26.64 23.008 23.112C23.008 17.208 25.156 12.096 29.452 7.776C33.748 3.312 39.516 0.719999 46.756 0L50.22 8.064C45.78 8.928 42.316 10.704 39.804 13.392C37.292 15.936 35.98 19.032 35.98 22.68C35.98 22.968 36.016 23.328 36.088 23.76C36.592 23.472 37.4 23.328 38.512 23.328C41.168 23.328 43.38 24.096 45.124 25.632C46.9 27.024 47.788 29.16 47.788 32.04C47.788 33.864 47.032 35.352 45.52 36.504C44.008 37.656 42.1 38.232 39.804 38.232C38.796 38.232 37.752 38.16 36.67 38.016L36.34 36Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Content */}
        <p className="text-gray-600 text-lg mb-6 flex-grow">{content}</p>

        {/* Rating */}
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Profile */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-secondary/20 to-cyan-100 flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-lg font-bold text-secondary">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div className="mr-4">
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
