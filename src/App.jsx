import { useEffect, useState } from "react";
import {
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";
import loadable from "@loadable/component";

const Contact = loadable(() => import("./pages/Contact"));
const About = loadable(() => import("./pages/About"));
const Resume = loadable(() => import("./pages/Resume"));
const Home = loadable(() => import("./pages/Home"));
const HelpYourself = loadable(() => import("./pages/HelpYourself"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/pfolio/" element={<Root />}>
        <Route index element={<Home />} />
        <Route exact path="/pfolio/contact" element={<Contact />} />
        <Route exact path="/pfolio/about" element={<About />} />
        <Route exact path="/pfolio/resume" element={<Resume />} />
        <Route exact path="/pfolio/helpyourself" element={<HelpYourself />} />
      </Route>
    )
  );
  return (
    <>
      <div className="router--provider">
        <RouterProvider router={router} />
      </div>

      <Outlet />
    </>
  );
}

const Root = () => {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }
  const scrollDirection = useScrollDirection();

  return (
    <div className="container">
      <div className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
        <div className="header_link_container">
          <Link className="header_link" to="/pfolio/">
            Home
          </Link>
          <Link className="header_link" to="/pfolio/contact">
            Contact
          </Link>
          <Link className="header_link" to="/pfolio/about">
            About
          </Link>
        </div>

        <div className="header_link_container">
          <Link className="header_link" to="/pfolio/resume">
            Resume
          </Link>
          <Link className="header_link" to="/pfolio/helpyourself">
            HelpYourself
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
