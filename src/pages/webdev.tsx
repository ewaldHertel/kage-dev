import React from "react";
import webdev from '../assets/image/wordpress-923188_1920-1024x683.jpg';
import notebook from '../assets/image/notebook-647761_1920-1024x685.png';
import reactRedux from '../assets/image/pngkit_react-logo-png_2224803.png';
import Image from "next/image";

const Webdev = () => {
    return(
        <section className="devContainer">
            <div className="overlay"/>
            <div>
                <h2>Web-<span>Entwicklung</span></h2>
                <div className="content">
                    <div>
                        <p>
                            In enger Zusammenarbeit setze ich für dich von kleinen Änderungen bis hin zur komplexen Web-Applikation jedes Projekt im Bereich der Webentwicklung um.
                            Eine Web-Applikation hat viele Vorteile gegenüber einer klassischen Software und wird seit Jahren immer beliebter.
                            Web-Applikationen sind fast immer verfügbar und auf allen gängigen Browsern lauffähig. Du benötigst nur einen Browser und in den meisten Fällen eine Internetleitung.
                            Egal ob auf dem Smartphone, dem Tablet oder dem Desktop PC – die Anwendung sieht immer gut aus und passt sich der jeweiligen Plattform an.
                        </p>
                    </div>
                    <div>
                        <Image src={webdev} alt="Backend" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <Image src={notebook} alt="Backend" />
                    </div>
                    <div>
                        <h3>Responsive-Design</h3>
                        <p>    Beim Responsive Design  handelt es sich um ein gestalterisches und technisches Paradigma zur Erstellung von Websites, sodass diese auf Eigenschaften des jeweils benutzten Endgeräts, vor allem Smartphones und Tabletcomputer, reagieren können.
                            In der heutigen Zeit ist die Mehrzahl der Nutzer mit einem mobilen Endgerät unterwegs. Egal ob Smartphone oder Tablet, deine Webseite sollte immer gut dastehen!
                            Sollte deine Webseite noch nicht responsive sein und somit nicht für mobile Geräte optimiert sein, schreib mich gerne an und ich schau mir deine Seite an und mache dir ein unverbindliches Angebot.
                        </p>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h3>React, Redux</h3>
                        <p>
                            React ist eine JavaScript-Softwarebibliothek, die ein Grundgerüst für die Ausgabe von UI-Komponenten von Webseiten zur Verfügung stellt.
                            Komponenten werden in React hierarchisch aufgebaut und können in dessen Syntax als selbst definierte JSX-Tags repräsentiert werden.
                            Diese Bibliothek nutze ich, um komplexe Web-Applikationen zu entwickeln. Um die Daten in der Applikation aktuell zu halten und den Verwaltungsaufwand und somit auch die Fehlerquellen zu minimieren nutze ich Redux.
                            Redux ist eine Daten-Schicht auf die aus der ganzen Applikation zugegriffen werden kann.
                            Sollte dich das Thema noch mehr Interessieren dann schreib mich an.
                        </p>
                    </div>
                    <div>
                        <Image src={reactRedux} alt="Backend" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Webdev;