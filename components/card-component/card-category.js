import { Card, Image } from "@heroui/react";
import Link from "next/link";

export default function CardCategoryComponent(items) {
  return (
    <>
      <Link href="#" className="cursor-pointer">
        <Card className="">
          <Image
            removewrapper=""
            alt="Card background"
            className="z-0 w-full h-[460px] object-cover"
            src={items.image}
          />
        </Card>
      </Link>
    </>
  );
}
