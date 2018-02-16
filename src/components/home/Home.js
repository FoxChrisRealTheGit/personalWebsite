import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container1,
    Holder5,
    Holder1,
    Holder2,
    Holder6,
    Holder8,
    Hero1,
    H32,
    P1,
    SquareImage,
} from "react-stylux";

import aspen from '../../images/chrisinaspen.jpg';;

export default class Home extends Component {
    render() {
        return (
            <section>
                <Header />
                <Container1>
                    <Holder8>
                        <Hero1
                            image={`url(${aspen})`}
                            height='375px' >
                        </Hero1>
                        <Holder5>
                            <Holder2>
                                <Holder5>
                                    <P1>
                                        I am currently attending Dev Mountain and have learned React, Javascript, html, and css. After a month and a half of instruction I decided to create my own NPM package. This resulted in the creation of Stylux, which is how this website is put together.
                                    </P1>
                                </Holder5>
                                <Holder5>
                                    <P1>
                                        Currently, I am working on my BA in Graphic Design. I have played around witht eh creaton of various print material, but I am very interested in UX considerations surrounded web design. VR is also extremly facinating to me at the present moment.
                                    </P1>
                                </Holder5>
                                <Holder5>
                                    <P1>
                                        I regulary perform spoken word poetry and ttry to perform when I can. I enjoy being in front of people and working with crowds. I have well over 200 pages of various scripts, a few plays being worked on, a completed novel, and a collection of short stories near completion.
                                    </P1>
                                </Holder5>
                            </Holder2>
                            <a href="/about"><P1 width="200px">Read More...</P1></a>
                        </Holder5>
                        <Holder5>
                            <Holder1>
                                <SquareImage
                                    size="lg">
                                    {}
                                </SquareImage>
                                <Holder5>
                                    <H32>
                                        Most Recent Work
                                    </H32>
                                    <P1>
                                        My most recent project
                                    </P1>
                                </Holder5>
                            </Holder1>
                            <a href="/portfolio"><P1 width="350px" >Check out my Portfolio...</P1></a>
                        </Holder5>
                        <Holder6>
                            <H32></H32>
                            <Holder2>
                                <Holder5>
                                    <SquareImage>
                                        </SquareImage>
                                    <P1>
                                        Alone
                                    </P1>
                                </Holder5>
                                <Holder5>
                                    <P1>
                                        Crypto-currency: a history
                                    </P1>
                                </Holder5>
                                <Holder5>
                                    <P1>
                                        Gendered
                                    </P1>
                                </Holder5>
                            </Holder2>
                        </Holder6>
                        <a href="/publications"><P1 width="400px">Check Out My Publications...</P1></a>
                    </Holder8>
                </Container1>
                <Footer />
            </section >
        )
    }
}