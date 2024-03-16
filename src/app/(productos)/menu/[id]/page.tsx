type product = { title: string; img: string; price: string; id: string };
import Menus from "@/components/Menus";
import Image from "next/image";
import { getMenuById } from "@/dto/getData";
function IdMenu() {
  const { id, title, img, price } = getMenuById("1")[0];

  return (
    <div>
      <div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{price}</div>
        <img width="200px" src={`../${img}`} alt={title} />
     
      </div>
      <div className="container x mandatory-scroll-snapping" dir="ltr">
        <Menus />
      </div>
    </div>
  );
}

export default IdMenu;
