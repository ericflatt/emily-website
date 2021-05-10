import * as React from "react"
import { Link } from "gatsby"
import "../styles/App.scss"
import info from "../images/info.png"
import TopNav from "../components/topnav"

// import Seo from "../components/seo"

const IndexPage = () => (
  <div className="info">
      <TopNav />
    <div>
      <h1 className="nice">NICE TO MEET YOU!</h1>
    </div>
    <div className="info-container">
      <div>
        <p className="more-info">More Info</p>
        <ol className="info-nav">
          <a className="info-item" href="https://drive.google.com/file/d/1rpluX4RBb2-T-kPagK5y0wGsYD7OwZNI/view?usp=sharing" target="_blank">
            <li>Resume</li>
          </a>
          <a className="info-item" href="mailto:ehorrocks12@gmail.com">
            <li>Email</li>
          </a>
          <a className="info-item" href="https://www.linkedin.com/in/emily-horrocks-938059181/" target="_blank">
            <li>Linkedin</li>
          </a>
          <a className="info-item" href="https://www.instagram.com/esw1zzle/" target="_blank">
            <li>Instagram</li>
          </a>
        </ol>
      </div>
      <div>
        <p className="bio">
          Hi! I’m Emily Horrocks a senior graphic design student studying at
          SCAD and a multifaceted designer based in Atlanta. When I’m not
          designing I love to skateboard, make playlists and lots of fun
          pottery, and play guitar.
        </p>
      </div>
    </div>
    <div>
      <img className="info-img" src={info} alt="info" />
    </div>
  </div>
)

export default IndexPage
