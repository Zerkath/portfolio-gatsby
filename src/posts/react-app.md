---
title: "React ja Bootstrap projekti"
---
# Ensimmäinen verkkokehitys ryhmä projekti

Agile kurssilla teimme ryhmässä laivan upotus pelin jota voi pelata seuraavassa osoitteessa:

[https://laivan-upotus.herokuapp.com/](https://laivan-upotus.herokuapp.com/)

Projektin kehitys aikaa oli noin 6 viikkoa samalla opeteltiin scrum käytänteitä.

Uusina asioita joita oppi projektin aikana socketit, redux ja deployment.

## Näkymiä
Sovelluksessa on kirjatumisnäyttö ja pelaaja saa itselleen väliaikaisen nimen joka näkyy toiselle pelaajalle.

![kirjautuminen](../images/kirjautuminen.png)

Kun käyttäjä on kirjautunut sisään hän voi luoda huoneen tai liittyä johonkin toiseen huoneeseen. 
Huoneeseen sallitaan vain 2 pelaajaa samanaikaisesti.

![huoneet](../images/huoneet.png)

Luonti näkymällä voidaan kirjoittaa vapaavalintainen huoneen nimi. 
Huoneen nimi on varattu ja saman nimistä ei voi luoda ennenkuin nimi on vapautunut.

![luonti](../images/luonti.png)

Luonnin jälkeen pelaaja pääsee laivan asetteluun odotellessaan toista pelaajaa.

![asettelu](../images/laivan-asettelu.png)

Kun molemmat pelaajat ovat asettaneet laivat peli alkaa ja vuoro vaihtuu pelaajien välillä kunnes jompikumpi on voittanut.

![peli](../images/peli.png)

Pelin päätyttyä pelaajat näkevät tuloksen tässä näkymässä.

![tulos](../images/end-screen.png)

Sovellus toimii myös mobiili laitteilla asettelu asettaa peli kentät päällekkäin tässä on mobiili laite kuva:

![mobiili](../images/mobiili-app.jpeg)


Repository ei ole tällä hetkellä avoin, joten en sitä tänne voi linkata. 