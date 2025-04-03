import Link from "next/link";
import { Home, FileText, BarChart3, Settings, Menu } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md hidden lg:block border-r border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold text-secondary">سيرتي</h2>
          </div>
          <nav className="mt-6">
            <ul className="text-right">
              <li className="px-6 py-3 bg-gray-50 border-r-4 border-secondary">
                <Link
                  href="/dashboard"
                  className="flex items-center justify-end gap-2"
                >
                  <span className="text-secondary">لوحة التحكم</span>
                  <Home className="w-5 h-5 text-secondary" />
                </Link>
              </li>
              <li className="px-6 py-3">
                <Link href="#" className="flex items-center justify-end gap-2">
                  <span className="text-gray-600">السير الذاتية</span>
                  <FileText className="w-5 h-5 text-gray-600" />
                </Link>
              </li>
              <li className="px-6 py-3">
                <Link href="#" className="flex items-center justify-end gap-2">
                  <span className="text-gray-600">الإحصائيات</span>
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                </Link>
              </li>
              <li className="px-6 py-3">
                <Link href="#" className="flex items-center justify-end gap-2">
                  <span className="text-gray-600">الإعدادات</span>
                  <Settings className="w-5 h-5 text-gray-600" />
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          {/* Mobile header */}
          <div className="lg:hidden bg-white p-4 shadow-md border-b">
            <div className="flex items-center justify-between">
              <button className="p-2 rounded-md hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </button>
              <h2 className="text-xl font-bold text-secondary">سيرتي</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
