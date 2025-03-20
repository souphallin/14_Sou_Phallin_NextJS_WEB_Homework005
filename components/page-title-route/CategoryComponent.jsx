import CardComponent from "@/components/card-component/card-component";
import Link from "next/link";

export default async function CategoryComponent({ searchParams }) {
  const searchResult = (await searchParams).search;
  console.log("search : ", searchResult);
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book${
      !searchResult ? "" : `?search=${searchResult}`
    }`
  );
  const categories = await res.json();
  return (
    <>
      <div className="grid grid-cols-2 gap-10 p-10 mx-auto overflow-auto">
        {categories.payload.map((items, index) => (
          <Link key={index} href={`/book-categories/${categories.id}`}>
            <CardComponent {...items} />
          </Link>
        ))}
      </div>
    </>
  );
}
