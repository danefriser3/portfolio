import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  const withLayout = (children: any) => {
    return (
      <>
        <Header />
        <div className="top-[61px] relative items-center flex flex-col justify-center mb-[140px]">
          {children}
        </div>
        <Footer />
      </>
    );
  };
  // Define routes accessible only to non-authenticated users
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ];

  // Provide the router configuration using RouterProvider
  return (
    <Routes>
      {routes.map((r) => (
        <Route path={r.path} element={withLayout(r.element)} />
      ))}
    </Routes>
  );
};

export default App;
