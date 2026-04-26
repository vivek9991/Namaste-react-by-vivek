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
import CompanyDetails from "./components/CompanyDetails";
import CompanyDetailsClassBased from "./components/CompanyDetailsClassBased";

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
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "company",
            element: <CompanyDetails name="Vivek" />,
          },
        ],
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "cart",
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
