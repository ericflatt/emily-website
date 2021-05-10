import * as React from "react"
import { Link } from "gatsby"
import "../styles/App.scss"

// import Seo from "../components/seo"

const IndexPage = () => (
  <div className="hero">
    <div className="container">
      <div className="hero-nav">
        <div>
          <h1 className="selected-works">SELECTED WORKS</h1>
          <ol className="hero-list">
            <Link className="hero-link" to="/juniorprom">
              <li>JUNIOR PROM</li>
            </Link>
            <Link className="hero-link" to="/cowboypocketguide">
              <li>COWBOY POCKET GUIDE</li>
            </Link>
            <Link className="hero-link" to="/mailchimp">
              <li>MAILCHIMP</li>
            </Link>
            <Link className="hero-link" to="/codenames">
              <li>CODENAMES</li>
            </Link>
            {/* <Link className="hero-link" to="/heard">
              <li className="nav-item">HEARD</li>
            </Link> */}
          </ol>
        </div>
        <div className="info">
        <Link className="hero-link" to="/info">
              <li style={{color:"white"}} className="nav-item info-link">Info</li>
            </Link>
          
        </div>
      </div>
    </div>
    <marquee className="marquee-hero">
      <h1 className="emily">*Emily Horrocks</h1>
    </marquee>
  </div>
)

export default IndexPage
