import CardBookCategoryDetailComponent from "@/components/card-component/card-book-category-detail";

export default async function GetBookCategoryByID(){
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`)
    const categories = await res.json();

    // const {bookId} = await item;
    // const api = await response(bookId);
    // const book = api.payload;
    return (
        <>

            {categories.map((category) => (
                <CardBookCategoryDetailComponent
                    key={category.id}
                    id={category.id}
                    title={category.name}
                />
            ))}
        

        </>
    )
}