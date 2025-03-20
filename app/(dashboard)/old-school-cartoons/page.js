import CardOldSchoolComponent from "@/components/card-component/card-old-school";
import PageTitleWithSelectCartoon from "@/components/page-title-route/page-title-with-select-cartoon";
import SearchBar from "@/components/search-bar/search-bar";

export default async function OldSchoolCategoryPage({ searchParams }) {
  const searchResult = (await searchParams).search;
  // console.log("Old School Search : " , await searchParams)
  const dropdownResult = (await searchParams).genre;

  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon${
      !dropdownResult && !searchResult
        ? ""
        : dropdownResult
        ? `?query=${dropdownResult}`
        : `?search=${searchResult}`
    }`
  );
  const oldschools = await res.json();
  // console.log("OldSchool : ", oldschools)

  return (
    <>
      <section className="col-span-5 p-5 ">
        <div className="mb-4">
          <SearchBar />
        </div>

        <div className="bg-white p-10 rounded-xl">
          <PageTitleWithSelectCartoon title="Old School Page" />

          <div className="grid grid-cols-3 gap-10 p-10">
            {oldschools.payload.map((items, index) => (
              <CardOldSchoolComponent key={index} {...items} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
