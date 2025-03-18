import CardOldSchoolComponent from "@/components/card-component/card-old-school";
import PageTitle from "@/components/card-component/page-title";

export default async function OldSchoolCategoryPage(){
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`)
    const oldschools = await res.json();
    console.log("OldSchool : ", oldschools)

    return(
        <>
        
            <PageTitle title="Old School Page"/>

            <div className="grid grid-cols-3 gap-10 p-10">
                            {oldschools.payload.map((items, index) => (
                                <CardOldSchoolComponent key={index} {...items}/>
                            ))}
            </div>
        
        </>
    )
}