import React, {useEffect} from 'react'

function Contact() {
    useEffect(() => {
        const dots = document.getElementById('dotList');
        if(dots){
            dots.remove();
        }
    }, [])
    return (
        <div className="contact">
            <div className="overlay"/>
            <section className=''>
                <div className="text">
                    <h2><span>C</span>ontact</h2>
                    <section className="container">
                        <div>
                            <i className="fa fa-envelope fa-3x"/>
                            <a href="mailto: contact@fullstack-ninja.de">
                                contact@kage-dev.de
                            </a>
                        </div>
                        <div>
                            <i className="fa fa-mobile fa-3x"/>
                            <p className="phone">(+49) 0176/8146 1516</p>
                        </div>
                        <div>
                            <i className="fab fa-facebook-messenger fa-3x"/>
                            <a href="https://fb.com/msg/EwaldHertel" target="_blank" rel="noreferrer">
                                Messenger Kage Dev
                            </a>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Contact
