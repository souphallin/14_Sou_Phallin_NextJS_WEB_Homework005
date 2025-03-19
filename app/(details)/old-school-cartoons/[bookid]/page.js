import CardBookCategoryDetailComponent from "@/components/card-component/card-book-category-detail";
import CardOldSchoolDetailComponent from "@/components/card-component/card-old-school-detail";

export default async function GetOldSchoolCartoonByID({params}){
    const {bookid} = params;

    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${bookid}`)
    const detail = await res.json();
  
    console.log("Detail : ", detail);

    return (
        <>
            <div>
                <CardOldSchoolDetailComponent {...detail}/>
            </div>
        </>
    )
}