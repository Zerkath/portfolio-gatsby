import React from "react"
import { Contacts } from "../components/contacts";
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles.scss"
// data
const links = [

  {
    text: "Gatsby Portfolio",
    url: "/portfolio-gatsby",
    repo: "https://github.com/Zerkath/portfolio-gatsby",
    description: "Tarvitsin uuden portfolion ja opettelin samalla gatsbyä.",
    color: "#663299",
  },
  {
    text: "ReactJs & Bootstrap Portfolio",
    url: "/portfolio-bootstrap",
    repo: "https://gitlab.com/juha_airaksinen/portfolio-kurssi",
    description: "WebDev kurssin päätöstehtävä. Luotu käyttäen Bootstrap elementtejä.",
    color: "#57D2F3",
  },
  {
    text: "Typescript ja WebSocket oppimisprojekti",
    url: "/socket-controller",
    repo: "https://github.com/Zerkath/cc-socket-controller",
    description: "Vapaa-ajan projekti jossa tutuistuin TypeScriptiin ja WebSocketteihin",
    color: "#2F74C0",
  },
  {
    text: "JavaFX tietokannan hallinta ohjelma",
    url: "/javafx-sql",
    repo: "https://gitlab.com/juha_airaksinen/userinterfacesql",
    description: "Ensimmäisen vuoden opiskeluiden projekti. Käyttöliittymä tietokannan hallintaan. Ohjelmoinnin perusteita.",
    color: "#EA8C10",
  },
]

const techs = [
  {
    text: "Java",
    desc: "Kareliassa Java on olio-ohjelmoinnin opetuskieli ja tunnen Javan yksityiskohdat parhaiten. Myös vähän kokemusta Kotlinista.",
    color: "#EA8C10",
  },
  {
    text: "TypeScript ja JavaScript",
    desc: "WebDev kurssilla opin JavaScriptin perusteet ja itsenäisesti tutuistuin TypeScriptiin. Käytän TypeScriptiä tällä hetkellä eniten.",
    color: "#2F74C0",
  },
  {
    text: "ReactJS",
    desc: "Olen tehnyt suurimman osan verkkoprojekteista Reactilla, tulevaisuudessa on suunnitelma oppia myös VueJS. Reactissa olen käyttänyt Bootstrappiä ja Ant Design komponentteja.",
    color: "#57D2F3",
  },
]

const IndexPage = () => {
  return (
    <>
      <Helmet htmlAttributes={{lang: "fi"}}>
        <title>Juhan Portfolio</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <main>
        <meta name="description" content="Juha Airaksisen Portfolio sivusto"/>
        <h1>Juha Airaksinen</h1>
        <p>Hei olen Joensuulainen kehittäjä opiskelemassa Karelian Ammattikorkeakoulussa tietojenkäsittelytiedettä ja olen erikoistumassa verkkokehitykseen.</p>
        {/* <p>Tykkään kehittää backendejä ja frontendejä. Yritän avartaa omaa osaamistani uusissa projekteissa.</p> */}
        <h2>Projekteja:</h2>
        <ul>
          {links.map(link => (
            <li key={link.url} style={{color: link.color}}>
              <span>
                <Link to={link.url}>{link.text}</Link>
                <p>{link.description} <a href={link.repo}>repo</a></p>
              </span>
            </li>
          ))}
        </ul>
        <h2>Osaamisia:</h2>
        <ul>
          {techs.map(item => (
            <li key={item.text} style={{color: item.color}}>
              <span>
                <p>{item.text}</p>
                <t>{item.desc}</t>
              </span>
            </li> 
          ))}
        </ul>
        <h2>Kontakti tietoja:</h2>
        <p>Ota yhteyttä sähköpostitse: juha.airaksinen1@gmail.com</p>
        <Contacts/>
      </main>
    </>
  )
}

export default IndexPage
