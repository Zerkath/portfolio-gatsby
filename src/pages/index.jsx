import React from "react"
import { Contacts } from "../components/contacts";
import { Helmet } from "react-helmet"
import "../styles.scss"
// data
const links = [

  {
    text: "Gatsby Portfolio",
    url: "https://github.com/Zerkath/portfolio-gatsby",
    repo: "https://github.com/Zerkath/portfolio-gatsby",
    description: "Halusin oppia Gatsbyn perusteet ja luoda tehokkaan portfolion.",
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
    description: "Vapaa-ajan projekti jossa tutuistuin TypeScriptiin ensimmäistä kertaa sekä perus WebSocketien toimintaan.",
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
    desc: "Kareliassa Java on olio-ohjelmoinnin oppimiskieli ja on täten ehkä kaikkein tutuin minulle tällä hetkellä.",
    color: "#EA8C10",
  },
  {
    text: "TypeScript ja JavaScript",
    desc: "WebDev kurssilla opin JavaScriptin perusteet ja itsenäisesti tutuistuin TypeScriptiin.",
    color: "#2F74C0",
  },
  {
    text: "ReactJS",
    desc: "Olen tehnyt suurimman osan verkkoprojekteista Reactilla, tulevaisuudessa on suunnitelma oppia myös VueJS. Reactissa olen käyttänyt Bootstrappiä ja Ant Design komponentteja.",
    color: "#57D2F3",
  },
  {
    text: "Python",
    desc: "Vapaa-ajan työkalu ja oppimisväline. En ole vielä tehnyt suurempaa projektia Pythonia käyttäen, mutta olen hyödyntänyt sitä kaikenlaisiin pieniin tehtäviin.",
    color: "#FFDB4D",
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
        <h1>Juha Airaksinen <Contacts/></h1>
        
        <p>Hei olen Joensuulainen kehittäjä opiskelemassa Karelian Ammattikorkeakoulussa. Opiskelen tietojenkäsittelytiedettä ja olen erikoistumassa verkkokehitykseen.</p>
        <p>Tykkään kehittää backendejä ja frontendejä. Yritän avartaa omaa osaamistani uusissa projekteissa.</p>
        <p></p>
        <h2>Projekteja:</h2>
        <ul>
          {links.map(link => (
            <li key={link.url} style={{color: link.color}}>
              <span>
                <a href={link.url}>{link.text}</a>
                <p>{link.description} <a href={link.repo}>repo</a></p>
              </span>
            </li>
          ))}
        </ul>
        <h2>Teknologioita:</h2>
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
        <h2>Linkkejä:</h2>
        <p>Ota yhteyttä sähköpostitse: juha.airaksinen1@gmail.com</p>
        <Contacts/>
      </main>
    </>
  )
}

export default IndexPage
