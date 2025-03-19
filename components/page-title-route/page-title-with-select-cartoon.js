export default async function PageTitleWithSelectCartoon({ title }) {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre`)
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
                Select a Cartoon
              </option>
              <optgroup label="Select Category">
                {select.payload.map((item, index) => (
                <option key={index} value="filter-01">{item.cartoon_genre}</option>
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
