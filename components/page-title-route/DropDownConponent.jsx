"use client";

import Form from "next/form";
import { usePathname, useRouter } from "next/navigation";

export default function DropDownConponent({ select }) {
  const router = useRouter();

  return (
    <>
      <Form  className="mt-4 mx-4 flex justify-between">
        <div className="relative w-full">
          <select
            onChange={e => router.replace(`/book-categories?query=${e.target.value}`)}
            id="dropdown"
            name="dropdown"
            className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
          >
            <option hidden value="">
              Select a Book
            </option>
            <optgroup label="Select Category">
              {select?.payload?.map((item) => (
                <option key={item.id} value={item.id} >
                  {item.book_cate_name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </Form>
    </>
  );
}
