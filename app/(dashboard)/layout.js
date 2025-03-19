import DashboardSidebar from "@/components/dashboard-sidebar/dashboard-sidebar";
import SearchBar from "@/components/search-bar/search-bar";

export default function DashboardLayout({ children }) {
  return (
    <>
      {/* <div>{children}</div> */}
      <div className="grid grid-cols-7 bg-slate-500 min-h-screen">
        <aside className="col-span-2">
          <DashboardSidebar />
        </aside>

        {/* <section className="col-span-5 bg-gray-300 p-5 ">
          <div className="mb-4">
          </div>

          <div className="bg-white p-10 rounded-xl">
            <div className="flex-1 ">{children}</div>
          </div>
        </section> */}
        {children}
      </div>
    </>
  );
}
