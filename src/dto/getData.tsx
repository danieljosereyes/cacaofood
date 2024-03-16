import db from "@/db/productos.json";

type product = { title: string; img: string; price: string; id: string };

export function getAll() {
  const jsonString = JSON.stringify(db);
  const parse = JSON.parse(jsonString);
  return parse["lista"]["Platos"];
}
export function getMenuById(id: string) {
  const jsonString = JSON.stringify(db);
  const parse = JSON.parse(jsonString);
  const platos = parse["lista"]["Platos"];
  return platos.filter((e: product) => e.id === id);
}
