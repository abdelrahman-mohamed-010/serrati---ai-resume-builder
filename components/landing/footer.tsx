import Link from "next/link";

const quickLinks = [
  { text: "الرئيسية", href: "/" },
  { text: "القوالب", href: "/templates" },
  { text: "الأسعار", href: "/pricing" },
  { text: "من نحن", href: "/about" }
];

const supportLinks = [
  { text: "الأسئلة الشائعة", href: "/faq" },
  { text: "اتصل بنا", href: "/contact" },
  { text: "سياسة الخصوصية", href: "/privacy" },
  { text: "الشروط والأحكام", href: "/terms" }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">سيرتي</h3>
            <p className="text-gray-400">
              منصتك المتكاملة لإنشاء سير ذاتية احترافية
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2 text-gray-400">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-gray-400">
              <p>البريد الإلكتروني: info@seerati.com</p>
              <p>الهاتف: +966 XX XXX XXXX</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} سيرتي. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
