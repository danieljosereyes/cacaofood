"use client";
type List = [Menu, Menu, Menu, Menu, Menu];
type Menu = { title: string; img: string; price: string; id: string };

import { getAll } from "@/dto/getData";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";

const list: List = getAll();

function Menus() {
  const router = useRouter();
  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => router.push(`/menu/${item.id}`)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="sm"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Menus;
