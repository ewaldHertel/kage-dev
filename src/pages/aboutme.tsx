import React, {useEffect} from 'react'
import profile from '../assets/image/profile.png';
import office from '../assets/image/office.jpg';
import Image from 'next/image'

function AboutMe() {
    useEffect(() => {
        const dots = document.getElementById('dotList');
        if(dots){
            dots.remove();
        }
    }, [])
    return (
        <div className="aboutme">
            <div className="overlay"/>
            <div>
                <h2>About <span>Me</span></h2>
                <div className="container">
                    <div>
                        <Image src={profile} alt="Profil Bild" />
                    </div>

                    <div>
                        <p className="partial">
                            Ich bin ein Web-, Softwareentwickler aus Siegen.
                            Mein Wissen habe ich mir über die Jahre selber angeeignet und erweitere mein Wissen stätig weiter.
                            Solltest du Skills benötigen, die unten nicht aufgeführt sind, sprich mich an, vielleicht steht es in der Pipeline.

                        </p>
                        <p className="partial">
                            Das Unternehmen Kage Dev wurde Anfang 2021 gegründet. Begriffserklärung: Kage bedeutet Schatten im Japanischen und wird auch so ausgesprochen wie es geschrieben wird.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h3>So wird gearbeitet</h3>
                        <p className="partial">
                            Mein Büro ist technisch auf dem neuesten Stand und verfügt über eine gute Breitband Verbindung.

                            Ich arbeite sowohl mit MacOS als auch mit Windows. Die Server laufen mit einem Linux Derivat. Dementsprechend fühle ich mich auf den meisten Systemen zu Hause.

                            Für die Entwicklung nutze ich in den meisten fällen, VS Code als Editor. Für Design Sachen nutze ich Adobe CC. Die Kommunikation läuft in den meisten Fällen mit Microsoft Produkten.
                        </p>
                    </div>
                    <div>
                        <Image src={office} alt="Büro" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
