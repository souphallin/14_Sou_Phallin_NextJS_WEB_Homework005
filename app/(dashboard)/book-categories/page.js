import CardComponent from "@/components/card-component/card-component";
import PageTitle from "@/components/card-component/page-title";
import SearchBar from "@/components/search-bar/search-bar";
import Link from "next/link";

export default async function BookCategoryDetailPage({searchParams}) {

  const searchResult = (await searchParams).search
  // console.log("search : ", searchResult)

  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book${!searchResult ? "" : `?search=${searchResult}` }`) ;
  const categories = await res.json();

  // console.log("Category : " , categories)
  return (
    <>
      <section className="col-span-5 bg-gray-300 p-5 ">
        {/* Search Bar */}
        <div className="mb-4"><SearchBar /></div>

        <div className="bg-white p-10 rounded-xl">
          {/* Children Content */}
          <div className="flex-1 ">
            <PageTitle title="Book Category" />

            <div className="grid grid-cols-2 gap-10 p-10 mx-auto overflow-auto">
              {categories.payload.map((items, index) => (
                <Link key={index} href={`/book-categories/${categories.id}`}>
                  <CardComponent {...items} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
