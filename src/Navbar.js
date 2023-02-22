import { Link, useLocation} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Website03
            </Link>
            <ul>
                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
      <li className={isActive ? "active" : null}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

// function CustomLink({ to, children, ...props }) {
//     const path = window.location.pathname

//     return (
//         <li className={path === to ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>  
//     )
// }