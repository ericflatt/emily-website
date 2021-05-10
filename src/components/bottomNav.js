import * as React from "react"
import { Link } from "gatsby"
import "../styles/App.scss"

const BottomNav = () => (
  <div>
    <ol className="bottom-nav">
      <Link to="/juniorprom">
        <li className="nav-item">JUNIOR PROM</li>
      </Link>
      <Link to="/cowboypocketguide">
        <li className="nav-item">COWBOY POCKET GUIDE</li>
      </Link>
      <Link to="/mailchimp">
        <li className="nav-item">MAILCHIMP</li>
      </Link>
      <Link to="/codenames">
        <li className="nav-item">CODENAMES</li>
      </Link>
      {/* <Link to="/heard">
        <li className="nav-item">HEARD</li>
      </Link> */}
    </ol>
  </div>
)

export default BottomNav
