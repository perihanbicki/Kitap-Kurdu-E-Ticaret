import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 f-3">
          <a href="/">Kitap Kurdu</a>
        </span>

        <div className="d-flex gap-2">
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/ürünler">Ürünler </NavLink>
          <NavLink to="/kategori">Kategori</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
