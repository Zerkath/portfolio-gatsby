import React from "react"
import { Contacts } from "../components/contacts";
import { ProfileImage } from "../components/profile"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles.scss"

const links = [

  {
    text: "Gatsby Portfolio",
    url: "/portfolio-gatsby/",
    repo: "https://github.com/Zerkath/portfolio-gatsby",
    description: "I wanted to recreate my earlier portfolio website with different content and technologies. Also with more experience in web development",
    color: "#663299",
  },
  {
    text: "ReactJs & Bootstrap multiplayer App",
    url: "/react-app/",
    description: "Warship game created with React and SocketIO, first agile project. No public access to source code.",
    color: "#CCFF04"
  },
  {
    text: "ReactJs & Bootstrap Portfolio",
    url: "/portfolio-bootstrap/",
    repo: "https://gitlab.com/juha_airaksinen/portfolio-kurssi",
    description: "Last assigment in web development course, a simple portfolio website made with React and Bootstrap.",
    color: "#57D2F3",
  },
  {
    text: "Typescript ja WebSocket personal learning project",
    url: "/socket-controller/",
    repo: "https://github.com/Zerkath/cc-socket-controller",
    description: "Free-time project that I used to experiment with TypeScript and WebSockets",
    color: "#2F74C0",
  },
  {
    text: "JavaFX user interface for SQL data entry",
    url: "/javafx-sql/",
    repo: "https://gitlab.com/juha_airaksinen/userinterfacesql",
    description: "First year user interface project, mostly basics of developing software.",
    color: "#EA8C10",
  },
]

const techs = [
  {
    text: "Java",
    desc: "The language I am most comfortable with",
    color: "#EA8C10",
  },
  {
    text: "TypeScript and JavaScript",
    desc: "I have experience in both, but I prefer TypeScript",
    color: "#2F74C0",
  },
  {
    text: "ReactJS",
    desc: "Most of my webdev projects are done with React",
    color: "#57D2F3",
  },
]

const IndexPage = () => {
  return (
    <>
      <Helmet htmlAttributes={{lang: "en"}}>
        <title>Airaksinen Portfolio</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <main>
        <meta name="description" content="Juha Airaksinen Portfolio"/>

        <div className="sub-section header">
          <div>
            <h1>Juha Airaksinen</h1>
            <p>Hello! I am a Information Technology student at Karelia UAS</p>
            <Contacts/>
          </div>
          <div>
            <ProfileImage/>
          </div>
        </div>

        <div className="sub-section">
          <h2>Some of my projects:</h2>
          <ul>
            {links.map(link => (
              <li key={link.url} style={{color: link.color}}>
                <span>
                  <Link to={link.url}>{link.text}</Link>
                  <p>{link.description} </p>
                  {link.repo !== undefined &&
                    <p><a href={link.repo}>Repository</a></p>
                  }
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sub-section">
          <h2>Skills:</h2>
          <ul>
            {techs.map(item => (
              <li key={item.text} style={{color: item.color}}>
                <span>
                  <text>{item.text}</text>
                  <p>{item.desc}</p>
                </span>
              </li> 
            ))}
          </ul>

          
        </div>
        <div className="sub-section">
          <h2>Contact information:</h2>
          <p>Email: juha.airaksinen1@gmail.com</p>
          <Contacts/>
        </div>
      </main>
    </>
  )
}

export default IndexPage