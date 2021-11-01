import React from "react";
import Image from 'next/image';
import backend from '../assets/image/web-4861605_1920-1024x683.jpg';
import api from '../assets/image/smartphone-6272608-1024x526.jpg';

const Backenddev = () => {
    return(
        <section className="devContainer">
            <div className="overlay"/>
            <div>
                <h2>Backend-<span>Entwicklung</span></h2>
                <div className="content">
                    <div>
                        <p>
                            In der Software- und Webentwicklung dient eine Schnittstelle zur Kommunikation und Übertragung von Daten.
                            In bestimmten Fällen ist es sinnvoll, unterschiedliche Systeme miteinander zu verbinden. Dadurch können Daten oder Funktionen gemeinsam genutzt werden.
                            Um einen Datenaustausch zwischen zwei sich völlig fremden Systemen zu realisieren.
                            Das ist ein wichtiger Schritt in der Digitalisierung.
                        </p>
                    </div>
                    <div>
                        <Image src={backend} alt="Backend" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <Image src={api} alt="API" />
                    </div>
                    <div>
                        <h3>API</h3>
                        <p>
                            Schnittstellen (kurz APIs) erleichtern milliardenfach pro Tag den Datentransfer zwischen Systemen und dienen als wichtige Zugangspunkte, die Unternehmen mit Kunden, Auftragnehmern und Mitarbeitern verbinden.
                            APIs sind als wichtige Werkzeuge für Unternehmen zu verstehen.
                            Sie rationalisieren organisatorische Abläufe und sorgen u. a. für höhere Prozesseffizienz und Markenbekanntheit und reduzieren die Antwortzeit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Backenddev;