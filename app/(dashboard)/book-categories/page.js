import CardCategoryComponent from "@/components/card-component/card-category";
import CardComponent from "@/components/card-component/card-component";
import PageTitle from "@/components/card-component/page-title";

export default async function BookCategoryDetailPage() {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
  const categories = await res.json();
  return (
    <>
      <PageTitle title="Book Category" />

      <div className="grid grid-cols-2 gap-10 p-10 mx-auto">
        {categories.payload.map((items, index) => (
          <CardComponent key={index} {...items} />
        ))}
      </div>
    </>
  );
}
