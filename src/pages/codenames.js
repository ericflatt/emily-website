import * as React from "react"
import { Link } from "gatsby"
import "../styles/App.scss"
import two from "../images/codenames/IMAGE 2.png"
import three from "../images/codenames/IMAGE 3.png"
import arrow from "../images/arrow.png"
import video from "../images/codenames/video1_1.mp4"
import BottomNav from "../components/bottomNav"
import TopNav from "../components/topnav"

const JuniorProm = () => (
  <div>
    <TopNav />
    <div>
      <marquee className="work-container marquee">
        <h1 className="project-title">CODENAMES</h1>
      </marquee>
    </div>
    <div className="work-container">
      <div className="project-intro">
        <div>
          UX/UI Design Year: 2020 <br></br> My Role: Branding, designing and
          prototyping interface. <br></br> Team: Sarah Ray, Kruti Kadkol, Dani
          Bertero, Jordyn Miller, and Peter Chrzan
        </div>
        <div>
          Bring a card game into a mobile app. Codenames is a word game played
          with cards and two different teams of spies. By introducing in-game
          walkie-talkies, the option to compete and play with friends, and
          unlocking new elements, we were able to keep the feeling of playing
          the physical game into a digital space.
        </div>
      </div>
      <div className="project-images">
        <video loop autoPlay playsInline muted width="100%">
          <source src={video} alt="video" />
        </video>
        <img src={two} alt="codename" />
        <img src={three} alt="codename" />
        <iframe className="youtube" width="560" height="315" src="https://www.youtube.com/embed/PgqCMxAMCFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="process-book">
        <div>
          <p className="process-p">See how I came to this solution </p>
        </div>
        <div>
          <img src={arrow} alt="arrow" />
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1VFdr1MHXUOOjTajWD8VL38XzWdsGxQX7/view?usp=sharing"
            target="_blank"
          >
            <p className="process-p right-align">View my process book</p>
          </a>
        </div>
      </div>
      <BottomNav />
    </div>
  </div>
)

export default JuniorProm
