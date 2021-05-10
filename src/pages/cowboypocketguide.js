import * as React from "react"
import { Link } from "gatsby"
import "../styles/App.scss"
import one from "../images/cowboy/Image 1.jpg"
import two from "../images/cowboy/Image 2.jpg"
import three from "../images/cowboy/Image 3.jpg"
import four from "../images/cowboy/Image 4.jpg"
import five from "../images/cowboy/Image 5.jpg"
import six from "../images/cowboy/Image 6.jpg"
import seven from "../images/cowboy/Image 7.jpg"
import eight from "../images/cowboy/Image 8.jpg"
import nine from "../images/cowboy/Image 9.jpg"
import ten from "../images/cowboy/Image 10.jpg"
import eleven from "../images/cowboy/Image 11.jpg"
import twelve from "../images/cowboy/Image 12.jpg"
import arrow from "../images/arrow.png"
import BottomNav from "../components/bottomNav"
import TopNav from "../components/topnav"

const JuniorProm = () => (
  <div>
    <TopNav />
    <div>
      <h1 className="project-title">COWBOY POCKET GUIDE</h1>
    </div>
    <div className="work-container">
      <div className="project-intro">
        <div>
          Publication Design Year: 2020 <br></br> Photographer: Rachel Proctor <br></br> Model:
          Sydney Solis
        </div>
        <div>
        This book is meant to evoke the idea of duality, combining modern cowboy fashion that is heavily prevalent in pop-culture, within the guidelines of the more traditional aspects of cowboys and cowboy culture. 
        </div>
      </div>
      <div className="project-images two-column">
        <img src={one} alt="project" />
        <img src={two} alt="project" />
        <img src={three} alt="project" />
        <img src={four} alt="project" />
        <img src={five} alt="project" />
        <img src={six} alt="project" />
        <img src={seven} alt="project" />
        <img src={eight} alt="project" />
        <img src={nine} alt="project" />
        <img src={ten} alt="project" />
        <img src={eleven} alt="project" />
        <img src={twelve} alt="project" />
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
