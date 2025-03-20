export default async function OptionComponent() {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book_category
      }`
  );
  const select = await res.json();
  console.log("select", select);
  return (
    <>
      {select.payload.map((item) => (
        <option key={item.id} value={item.id}>
          {item.book_cate_name}
        </option>
      ))}
    </>
  );
}
