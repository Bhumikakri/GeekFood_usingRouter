import './App.css';
import Home from './Component/HomePage/Home';
import Quote from './Component/Quotes/Quote';
import Resturant from "./Component/Resturant/Resturants";
import Food from "./Component/Foods";
import Contact from "./Component/ContactUs/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Component/Main';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Quote",
          element: <Quote />,
        },
        {
          path: "/Resturants",
          element: <Resturant />,
        },
        {
          path: "/Food",
          element: <Food />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
    // {
    //     path:"/Quote",
    //     element:<Quote />
    // },
    // {
    //     path:"/Resturant",
    //     element:<Resturant />
    // },
    // {
    //     path:"/Food",
    //     element:<Food />
    // },
    // {
    //     path:"/Contact",
    //     element:<Contact />
    // },
    // {
    //     path:"/hotel/:hotelsid",
    //     element:<HotelDetail />
    // }
  ]);
  return (
    <div className="App">
     <RouterProvider router={route} />
    </div>
  );
}

export default App;
