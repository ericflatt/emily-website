import * as React from "react"
import { Link } from "gatsby"
import "../styles/App.scss"

const TopNav = () => (
  <div className="top-nav">
      <div>
      <Link to="/">
        <li className="info-link">*EMILY HORROCKS</li>
      </Link>
      </div>
        <div className="top-info">
        <Link to="/info">
        <li className="info-link">INFO</li>
      </Link>
        </div>
  </div>
)

export default TopNav
