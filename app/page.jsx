import PageTitle from "@/components/card-component/page-title";
import StaticCardDashboard from "@/components/card-component/static-card-dashboard";
import DashboardSidebar from "@/components/dashboard-sidebar/dashboard-sidebar";
import SearchBar from "@/components/search-bar/search-bar";

export default function HomePage() {
  return (
    <>

    <div className="grid grid-cols-7 bg-slate-500 min-h-screen ">
                    <aside className="col-span-2">
                      <DashboardSidebar />
                    </aside>
          
                    <section className="col-span-5 bg-[#F5F7F8] p-5 ">
                      {/* Search Bar */}
                      <div className="mb-4">
                        <SearchBar />
                      </div>
          
                      <div className="bg-white p-10 rounded-xl overflow-hidden">
                        <PageTitle title="Dashboard Page"/>
                        <div className="mt-20">
                          <StaticCardDashboard/>
                        </div>
                      </div>
                    </section>
                  </div>


      {/* <PageTitle title="Dashboard Page"/>
      <div className="mt-20">
        <StaticCardDashboard/>
      </div> */}
    </>
  );
}
