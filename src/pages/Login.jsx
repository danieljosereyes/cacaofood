import PostRegister from "../helper/PostRegister";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // console.log({
    //     username,
    //     password,
    //     email
    // });
    PostRegister({
        username,
        password,
        email
    })
  };
  return (
    <form className="container--form">
      <input className="container--form_input" type="email" placeholder="Email" />
      <input className="container--form_input" type="password" placeholder="Contrasena" />
      <button className="container--form_button" type="submit">enviar</button>
    </form>
  );
}

export default Login;
