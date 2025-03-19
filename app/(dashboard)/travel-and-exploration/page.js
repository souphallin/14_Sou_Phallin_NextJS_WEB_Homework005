import CardOldSchoolDetailComponent from "@/components/card-component/card-old-school-detail";
import PageTitle from "@/components/card-component/page-title";
import SearchBar from "@/components/search-bar/search-bar";

export default function TravelAndExploationPage(){
    return(
        <>
            <section className="col-span-5 bg-gray-300 p-5 ">
                    <div className="mb-4">
                      <SearchBar />
                    </div>
            
                    <div className="bg-white p-10 rounded-xl">
                      <div className="flex-1 ">
                        <PageTitle title="Travel And Exploration" />
                      </div>
                    </div>
                  </section>
        </>
    )
}