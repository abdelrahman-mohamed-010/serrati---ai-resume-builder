import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TermsList } from "../../components/terms/terms-list";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="max-w-4xl mx-auto z-10 relative">
        <Card className="p-8 bg-gray-900 border border-gray-800 shadow-xl">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            الشروط والأحكام
          </h1>
          <TermsList />
          <div className="mt-8 text-center">
            <Link
              href="/sign-up"
              className="text-secondary hover:text-secondary/90 text-sm"
            >
              العودة إلى صفحة التسجيل
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
