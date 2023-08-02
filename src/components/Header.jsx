
import { useEffect, useState} from 'react';

// function Header() {
//   return (
//     <div className="header">
        // <div className="header-wrapper">
        //     <a href="#">Damir</a>
        //     <a href="#">About</a>
        //     <a href="#">Contact</a>
            
        // </div>
//     </div>
//   )
// }
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

function Header() {
    const scrollDirection = useScrollDirection();
    
    return (
      <div className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}>
         <div className="header-wrapper">
         <div>Disappearing Header</div>
            <a href="#">Damir</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Resume</a>
        </div>
        
      </div>
    )
  }

export default Header