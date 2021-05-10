import * as React from "react"
import { Link } from "gatsby"
import "../styles/App.scss"
import one from "../images/mailchimp/HOMEPAGE THUMBNAIL_IMAGE 1.jpeg"
import two from "../images/mailchimp/Image 2.jpeg"
import three from "../images/mailchimp/Image 3.jpeg"
import four from "../images/mailchimp/Image 4.jpeg"
// import arrow from "../images/arrow.png"
import BottomNav from "../components/bottomNav"
import TopNav from "../components/topnav"

const JuniorProm = () => (
  <div>
      <TopNav />
    <div>
      <h1 className="project-title">MAILCHIMP</h1>
    </div>
    <div className="work-container">
      <div className="project-intro">
        <div>
          Year: 2020 <br></br> Creative Directors: Chris Sanlin and Ross Zietz
          <br></br>Photographer: Albrica Tierra
        </div>
        <div>
          This was a project that I worked on during my time as a brand design
          intern at Mailchimp. This sweatshirt was designed with the intention
          to unite and comfort employees during uncertain and scary times. By
          using contrasting typography and unified flowers the design touches on
          coming together despite differences and uncertainties, and comfort
          through the colors. The sweatshirt was designed for the Mailchimp
          Rainbow Room, a store for employee’s accomplishments.
        </div>
      </div>
      <div className="project-images two-column">
        <img src={one} alt="project" />
        <img src={two} alt="project" />
        <img src={three} alt="project" />
        <img src={four} alt="project" />
      </div>
      {/* <div className="process-book">
        <div>
          <p className="process-p">See how I came to this solution </p>
        </div>
        <div>
          <img src={arrow} alt="arrow" />
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1hecucxHyT8LPno3MvTNATExcOu4EJX-x/view?usp=sharing"
            target="_blank"
          >
            <p className="process-p right-align">View my process book</p>
          </a>
        </div>
      </div> */}
      <BottomNav />
    </div>
  </div>
)

export default JuniorProm
