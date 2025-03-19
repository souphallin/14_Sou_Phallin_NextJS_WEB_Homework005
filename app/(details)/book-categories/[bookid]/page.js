import CardBookCategoryDetailComponent from "@/components/card-component/card-book-category-detail";

export default async function GetBookCategoryByID({params}){
    const {bookid} = params;

    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${bookid}`)
    const detail = await res.json();
  
    console.log("Detail : ", detail);

    return (
        <>
            <div>
                <CardBookCategoryDetailComponent {...detail}/>
            </div>
        </>
    )
}


// export default function DetailPage(){
//     return (
//         <>
//         <div>Hello</div>
//         </>
//     )
// }
