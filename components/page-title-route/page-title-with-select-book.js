export default async function PageTitleWithSelectBook({ title, searchParams }) {
    const selectResult = (await searchParams)?.genre || ""
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book_category${!selectResult? "" : `?genre=${selectResult}`}`)
    const select = await res.json();
    console.log("select",select)

  return (
    <>
      <div className="flex items-center justify-between">
        <div className=" ">
          <h3 className="bg-gray-300 p-4 rounded-lg shadow w-fit text-[#087E8B] font-bold">
            {title}
          </h3>
        </div>

        <form 
          className="mt-4 mx-4 flex justify-between"
        >
          <div className="relative w-full">
            <select
              id="filterLearningMaterials"
              name="filterLearningMaterials"
              className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
            >
              <option hidden value="">
                Select a Book
              </option>
              <optgroup label="Select Category">
                {select.payload.map((item) => (
                <option key={item.id} value={item.id}>{item.book_cate_name}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </form>
      </div>

      <div className="w-full h-[1px] bg-[#087E8B] mt-5"></div>
    </>
  );
}
