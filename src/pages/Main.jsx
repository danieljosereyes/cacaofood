
function Section() {
  return (
    <section className="section">
      <article className="section_container">
        <p className="section--text">CACAOFOOD</p>
        <img
          className="section--image"
          src="https://th.bing.com/th/id/R.029c704fe1bc99ee7107c72f8ba437b7?rik=ApOpvHeEIM%2bk7Q&pid=ImgRaw&r=0"
          alt=""
        />
      </article>
      <article className="nosotros">
        <h2 className="nosotros_h2">COMIDA SALUDABLE</h2>
        <p className="nosotros_p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi et
          obcaecati minus eius sint perspiciatis distinctio similique, tempore
          corrupti fugit eveniet veniam perferendis. Quasi ducimus, repellat
          sint exercitationem voluptatum vitae? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet libero necessitatibus vitae dolorem
          modi consequatur exercitationem! Quam expedita, soluta ullam dolor
          facere ut explicabo esse sint consequatur maiores dolores neque?
        </p>
      </article>
      <article className="section_container">
        <img
          className="section--image"
          src="https://data2.1freewallpapers.com/download/pudding-banana-fruit-1280x720.jpg"
          alt=""
        />
      </article>
      <article className="video">
        <h2 className="nosotros_h2">PROYECTOS A FUTURO</h2>
        <iframe
          className="videoscase"
          src="https://www.youtube.com/embed/TzoZvKsr5wU?si=vxBxK8TtH8rkBu_y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </article>
    </section>
  );
}

export default Section;
