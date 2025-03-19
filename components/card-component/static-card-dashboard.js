import { Tag } from "iconsax-react";
import Link from "next/link";

export default function CardHome() {
  return (
    <div className="flex justify-around">
      <Link
        href="/book-categories"
        className="group relative block bg-black w-[300px] h-[400px] rounded-2xl"
      >
        <img
          alt="home"
          src="https://s3-alpha-sig.figma.com/img/c73c/a81c/dd317b2dcd79328efc4e3095489f2244?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r7t-Y5h1pPzQ6~trCDXoo92yuv5-rsGnsVKvTEwBjqTTWgiz3IqxD28GsmM5K6hzPZcWnXrojgFAXjHXvQHYgTBkVBA28kl0HzWX5DmcBGFSapwqkvyIPQc1AWlVTSY~AFqReHgoMOpm2yqiBkO-M6OtP-MJFL3B1xZwRNHUkU~Na2mLvNieMpt-3RBbS-KBvgUu7NV1uChT8bHDufXg0l8SUtS3f7IIwUesxq7rDLWh-l0PuvLyxIReg-lGEC5gLqTPo9c08X1Aa14yDHIQDxtBrpCKHgQfk68bvcbiuYMZHNHnT6t6AcdkoJlaJZQDV5ReMqZQ9ASGedc88b2LdQ__" // Use a string path to the image in public/
          width={400} // Required: match the container width
          height={500} // Required: match the container height
          className="absolute inset-0 w-full h-full rounded-2xl object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-2 sm:p-2 lg:p-2">
          <p className="text-[#087E8B] font-bold bg-white text-center w-fit py-2 px-2 rounded-2xl flex gap-2">
            <Tag size={24} color="#087E8B" />
            Book
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4 transform opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <p className="text-2xl text-white font-bold text-center">
            View all <br />
            Availible <br />
            Books
          </p>
        </div>
      </Link>
      <Link
        href="/old-school-cartoons"
        className="group relative block bg-black w-[300px] h-[400px] rounded-2xl"
      >
        <img
          alt="home"
          src="https://s3-alpha-sig.figma.com/img/65a1/7fc0/0c5a744cd7491aa1555996062a2e9f16?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HtiEYeNI1w7G5mddD4bdfyHiLPkOLtw0~nbdX-FJiLMWRpukSqklaVKMc8noRAr0UgaTz0DV02B0S8TtbpZgUXI4Rui3X-ObULjLcnMOkmPKMiePdd1S9~DRcLQmKNpgQQXimNNowRaercCmvLIUamrGP0Q4YJ-~c~7AmLdjkAByV9wakWLI05gzKBQmG9rSSudFJJFTCaO7Flm9Bhd4XAcMWWHyRJ9CDqZhJK1DBkBhBYjnZNXz43Nkrr1pWDYx~EejzD427Qk76CfVuH9WusFTVsPIQEo7wd-6zGFHh8mztYe8bsMva6ybPfbAxUVtLczYngPQSRhBtxvcnEzVfg__" // Use a string path to the image in public/
          width={400} // Required: match the container width
          height={500} // Required: match the container height
          className="absolute inset-0 w-full h-full rounded-2xl object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-2 sm:p-2 lg:p-2">
          <p className="text-[#087E8B] font-bold bg-white text-center w-fit py-2 px-2 rounded-2xl flex gap-2">
            <Tag size={24} color="#087E8B" />
            Cartoon
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4 transform opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <p className="text-2xl text-white font-bold text-center">
            View all <br />
            Availible <br />
            Cartoons
          </p>
        </div>
      </Link>
    </div>
  );
}
