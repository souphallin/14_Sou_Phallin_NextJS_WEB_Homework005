"use client";
import Form from "next/form";
import { useRouter } from "next/navigation";

export default function OldSchoolDropDownComponent({select}){
  const router = useRouter();

    return(
        <>
        <Form
          className="mt-4 mx-4 flex justify-between"
        >
          <div className="relative w-full">
            <select
            onChange={e => router.replace(`/old-school-cartoons?genre=${e.target.value}`)}
              id="filterLearningMaterials"
              name="filterLearningMaterials"
              className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
            >
              <option hidden value="">
                Select a Cartoon
              </option>
              <optgroup label="Select Category">
                {select.payload.map((item) => (
                <option key={item.id} value={item.id}>{item.cartoon_genre}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </Form>
        
        </>
    )
}