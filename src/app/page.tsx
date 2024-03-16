import Image from "next/image";
import veganBurguer from "@/../public/freshly-prepared-beef-steak-with-vegetables.jpg";
import macarons from "@/../public/macarons.jpg";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="section">
          <article className="section_container">
            <h1 className="section--text border-b scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
              CACAOFOOD
            </h1>
            <Image
              className="section--image"
              src={veganBurguer}
              alt="Vegan Burguer"
            />
          </article>
          <article className="nosotros">
            <h2 className="nosotros_text text-2xl font-semibold tracking-tight">
              COMIDA SALUDABLE
            </h2>
            <p className="nosotros_text leading-7 [&:not(:first-child)]">
              Justo en el paladar
            </p>
            <Button href="/menu" as={Link} color="success" variant="solid">
              Ver mas
            </Button>
          </article>
          <article className="section_container">
            <Image className="section--image" src={macarons} alt="macarons" />
          </article>
        </section>
      </main>
    </>
  );
}
