import Link from "next/link";


export default function CardComponent(items) {

  return (
    <>
        <Link href="#" className="cursor-pointer">
          <section className="flex items-center justify-center bg-opacity-25 mt-32">
            <div className=" bg-[#F5F7F8] rounded-xl border border-[#e6e6e6] font-['Poppins'] p-3 flex gap-10">
              <div className=" grid grid-cols-7 gap-4">
                <div className="relative col-span-3 flex flex-col justify-between h-[140px]">
                  <div className="">
                    <img
                      className="absolute -top-[120px] h-52 w-52 rounded-2xl"
                      src={items.image}
                      alt=""
                    />
                  </div>
                  <Link href={`/book-categories/${items.id}`} className=" rounded-full text-sm text-center py-2 bg-[#BFD7EA] text-[#0B3954] cursor-pointer">
                    READ FULL ARTICLE
                  </Link>
                </div>
                <div className="col-span-4 items-center justify-center gap-2">
                  <h2 className="text-[#0B3954] text-lg line-clamp-1 font-bold font-['Poppins']">
                    {items.book_title}
                  </h2>
                  <div className="mt-1">
                    <span className="text-[#0B3954] text-xs font-normal leading-normal line-clamp-6">
                      {items.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Link>
    </>
  );
}
