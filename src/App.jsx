import { useEffect, useState} from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Link, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';

import "./App.css";
import Resume from './pages/Resume';






function App() {
  // const [count, setCount] = useState(0);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path='/pfolio/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route exact path="/pfolio/contact" element={<Contact/>}/>
        <Route exact path="/pfolio/about" element={<About/>}/>
        <Route exact path="/pfolio/resume" element={<Resume/>}/>
      </Route>
    )
  )
  return (

    <>

      
      <div className='router--provider'>
      {/* basename={import.meta.env.DEV ? '/' : '/pfolio/'} */}
          <RouterProvider  router={router}/>
        </div>
      <Outlet/>
      
    </>
  );
}

const Root=()=> {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  }
  const scrollDirection = useScrollDirection();


  
  return(
    <>
    <div className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}>
      <Link to='/pfolio/'>Home</Link>
      <Link to='/pfolio/contact'>Contacts</Link>
      <Link to='/pfolio/about'>About</Link>
      <Link to='/pfolio/resume'>Resume</Link>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default App;
