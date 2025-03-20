import DropDownConponent from "./DropDownConponent";

export default async function PageTitleWithSelectBook({ title, searchParams }) {
  const selectResult = (await searchParams)?.genre || "";
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book_category${
      !selectResult ? "" : `?genre=${selectResult} `
    }`
  );
  const select = await res.json();
  console.log("select", select);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className=" ">
          <h3 className="bg-[#F5F7F8] p-4 rounded-lg shadow-md w-fit text-[#087E8B] font-bold">
            {title}
          </h3>
        </div>
        <DropDownConponent select={select} />

      </div>

      <div className="w-full h-[1px] bg-[#087E8B] mt-5"></div>
    </>
  );
}
