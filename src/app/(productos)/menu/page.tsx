import Menus from "@/components/Menus";

function Menu() {
  return (
    <main>
      <section>
        <article>
          <h2 className="text-2xl font-semibold tracking-tight">Platos</h2>
          <div className="container x mandatory-scroll-snapping" dir="ltr">
            <Menus />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">Ensaladas</h2>
          <div className="container x mandatory-scroll-snapping" dir="ltr">
            <Menus />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">Postres</h2>
          <div className="container x mandatory-scroll-snapping" dir="ltr">
            <Menus />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Menu;
