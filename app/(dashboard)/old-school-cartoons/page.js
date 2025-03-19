import CardOldSchoolComponent from "@/components/card-component/card-old-school";
import PageTitle from "@/components/card-component/page-title";
import SearchBar from "@/components/search-bar/search-bar";

export default async function OldSchoolCategoryPage({searchParams}){

    const searchResult = (await searchParams).search
    // console.log("Old School Search : " , searchResult)
    
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon${!searchResult ? "" : `?search=${searchResult}`}`)
    const oldschools = await res.json();
    // console.log("OldSchool : ", oldschools)

    return(
        <>
        
        <section className="col-span-5 bg-gray-300 p-5 ">
        {/* Search Bar */}
        <div className="mb-4"><SearchBar /></div>

        <div className="bg-white p-10 rounded-xl">
         

        <PageTitle title="Old School Page"/>

            <div className="grid grid-cols-3 gap-10 p-10">
                            {oldschools.payload.map((items, index) => (
                                <CardOldSchoolComponent key={index} {...items}/>
                            ))}
            </div>
        
        </div>
      </section>
    
        </>
    )
}