import DashboardNavbar from "@/components/dashboard/navbar/DashboardNavbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
}
