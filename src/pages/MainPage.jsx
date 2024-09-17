/// import gif from "../assets/welcome.gif";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center ga-5 my-5">
      <h1>Hoşgeldiniz!</h1>

      <img className="img-fluid rounded" src={"/images/welcome.gif"} alt="" />
      <p>
        <Link to={`/ürünler`}>Ürünler Sayfasında</Link>yeni çıkan tüm kitaplara
        ulaşabilirsiniz.
      </p>
    </div>
  );
};

export default MainPage;
