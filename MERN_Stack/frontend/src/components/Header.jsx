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
                  <Link to= "/emplogin" ><FaUser/>Employee</Link>
              </li>
              <li>
                  <Link to="/admlogin"><FaUser />Admin</Link>
              </li>
          </ul>
    </header>
  )
}
export default Header   