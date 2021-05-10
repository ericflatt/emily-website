import * as React from "react"
import { Link } from "gatsby"
import "../styles/App.scss"
import one from "../images/prom/IMAGE1.png"
import two from "../images/prom/IMAGE2.png"
import three from "../images/prom/IMAGE3.png"
import four from "../images/prom/IMAGE4.png"
import five from "../images/prom/IMAGE5.png"
import six from "../images/prom/IMAGE6.png"
import arrow from "../images/arrow.png"
import BottomNav from "../components/bottomNav"
import TopNav from "../components/topnav"

const JuniorProm = () => (
<div>
    <TopNav />
    <div>
        <h1 className="project-title">JUNIOR PROM</h1>
    </div>
  <div className="work-container">
    <div className="project-intro">
      <div>
        Brand + Identity Design Year: 2021 <br></br> Photographer: Kendra Frankle <br></br> Models:
        Brianna Roberts, Sophie Berner, Ynessa Rhodes
      </div>
      <div>Branding for an indie-pop band. This project involved establishing a brand and band identity, vinyl design, various merchandise, and advertisements. Junior Prom as both a band and a brand evokes excitement and a unique style.</div>
    </div>
    <div className="project-images">
        <img src={one} alt="project" />
        <img src={two} alt="project" />
        <img src={three} alt="project" />
        <img src={four} alt="project" />
        <img src={five} alt="project" />
        <img src={six} alt="project" />
    </div>
    <div className="process-book">
        <div>
            <p className="process-p">See how I came to this solution </p>
        </div>
        <div>
        <img src={arrow} alt="arrow" />
       </div>
       <div>
          <a href="https://drive.google.com/file/d/1hecucxHyT8LPno3MvTNATExcOu4EJX-x/view?usp=sharing" target="_blank"><p className="process-p right-align">View my process book</p></a> 
       </div>
    </div>
    <BottomNav />
  </div>
  </div>
)

export default JuniorProm
