import DashboardSidebar from "@/components/dashboard-sidebar/dashboard-sidebar";
import SearchBar from "@/components/search-bar/search-bar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-7  min-h-screen">
        <aside className="col-span-2">
          <DashboardSidebar />
        </aside>
        {children}
      </div>
    </>
  );
}
