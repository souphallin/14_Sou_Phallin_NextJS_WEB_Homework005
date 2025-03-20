import OldSchoolDropDownComponent from "./OldSchoolDropDownComponent";

export default async function PageTitleWithSelectCartoon({ title }) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon_genre`
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

        <OldSchoolDropDownComponent select={select} />
      </div>

      <div className="w-full h-[1px] bg-[#087E8B] mt-5"></div>
    </>
  );
}
