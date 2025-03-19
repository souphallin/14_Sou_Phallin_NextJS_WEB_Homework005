import CardOldSchoolDetailComponent from "@/components/card-component/card-old-school-detail";

export default async function GetOldSchoolCartoonByID({params}){
    const {cartoonid} = params;

    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${cartoonid}`)
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