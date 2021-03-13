import * as React from "react"
import Contacts from "../components/contacts"
import "../styles.scss"
// data
const links = [

  {
    text: "ReactJs ja Bootstrap portfolio",
    url: "/portfolio-bootstrap",
    description: "WebDev kurssin päätös projekti. Kurssilla opin JavaScriptin perusteita ja fullstack kehittämistä.",
    color: "#61DBFB",
  },
  {
    text: "JavaFX tietokannan hallinta ohjelma",
    url: "/javafx",
    description: "Ensimmäisen vuoden opiskeluiden projekti. Tietokannan hallinta käyttöliittymä. Ohjelmoinnin perusteita.",
    color: "#cc2d1f",
  },
]

const techs = [
  {
    text: "Java",
    desc: "Eniten kokemusta opintojen pohjalta. Tällä hetkellä ei ole projekteja jossa käytän Javaa, mutta olen käyttänyt ryhmäprojektissa Kotlinia.",
    color: "#61DBFB",
  },
  {
    text: "TypeScript ja JavaScript",
    desc: "Opinnoissa käytimme enimmäkseen JavaScriptiä. Opiskelin TypeScriptiä itsenäisesti, koska pidän tyypitetyistä kielistä.",
    color: "#61DBFB",
  },
  {
    text: "ReactJS",
    desc: "Olen tehnyt suurimman osan verkkoprojekteista Reactilla, tulevaisuudessa on suunnitelma oppia VueJS",
    color: "#cc2d1f",
  },
  {
    text: "Python",
    desc: "Vapaa-ajan työkalu ja oppimisväline.",
    color: "#61DBFB",
  },
]

const IndexPage = () => {
  return (
    <main>
      <title>Portfolio</title>
      <h1>Portfolio</h1>
      <h1>Juha Airaksinen</h1>
      <Contacts/>
      <p>Hei olen Joensuulainen kehittäjä opiskelemassa Karelian Ammattikorkeakoulussa. Opiskelen tietojenkäsittelytiedettä ja olen erikoistumassa verkkokehitykseen.</p>
      <h2>Projekteja:</h2>
      <ul>
        {links.map(link => (
          <li key={link.url} style={{color: link.color}}>
            <span>
              <a href={link.url}>{link.text}</a>
              <p>{link.description}</p>
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
      <h2>Kontaktitietoja ja sivustoja</h2>
      <p>Parhaiten yhteyden saa linkedin kautta.</p>
      <Contacts/>
    </main>
  )
}

export default IndexPage
