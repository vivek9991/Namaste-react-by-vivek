import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestuarantInfo from "./components/RestuarantInfo";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restuarant/:id",
        element: <RestuarantInfo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
