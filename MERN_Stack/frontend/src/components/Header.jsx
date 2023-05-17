import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa" // import specifically from Font Awesome
import { Link } from "react-router-dom"

function Header() {
  return (
      <header className="header">
          <div className="logo">
              <Link to= '/'>Smart Dial</Link>
          </div>
          <ul>
              <li>
                  <Link to= "/login" ><FaSignInAlt/>Login</Link>
              </li>
              <li>
                  <Link to="/register"><FaUser />Register</Link>
              </li>
          </ul>
    </header>
  )
}
export default Header   