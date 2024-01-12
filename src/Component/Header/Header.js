import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="Contents">
          <div className="logo">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <h2>GeekFoods</h2>
          </div>

          <div className="navOptions">
            <Link to="/" className="active" style={{ textdecoration: "none" }}>
              Home
            </Link>
            <Link to="/Quote">Quote</Link>
            <Link to="/Resturants">Resturants</Link>

            <Link to="/Food">Foods</Link>

            <Link to="/Contact">Contact</Link>
          </div>

          <div className="navBtn">
            <button>Get started</button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
