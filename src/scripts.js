import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import * as React from "react";
import RestuarantInfo from "./components/RestuarantInfo";
import CompanyDetails from "./components/CompanyDetails";
import CompanyDetailsClassBased from "./components/CompanyDetailsClassBased";
import DummyRestuarants from "./components/DummyRestuarants";
import { userContext } from "./contextData";
import reduxStore from "./store";
import { Provider } from "react-redux";
const Cart = lazy(() => import("./components/Cart"));

const App = () => {
  const [userName, setUserName] = React.useState("Vivek");
  return (
    <Provider store={reduxStore}>
      <Header />
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Outlet />
      </userContext.Provider>
      <Footer />
    </Provider>
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
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
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
