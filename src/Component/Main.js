import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import HotelDetail from "./HotelDetails";

const Main = () => {
  
  return (
    <div className="Main">
     <Header />
     <Outlet></Outlet>
     <Footer />
    </div>
  );
};

export default Main;
