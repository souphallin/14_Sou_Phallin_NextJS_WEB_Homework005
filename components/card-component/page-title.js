export default function PageTitle({title}) {
  return (
    <>
      <div className=" ">
        <h3 className="bg[#F5F7F8] p-4 rounded-lg shadow-md w-fit text-[#087E8B] font-bold">
          {title}
        </h3>
      </div>
      <div className="w-full h-[1px] bg-[#087E8B] mt-5"></div>
    </>
  );
}
