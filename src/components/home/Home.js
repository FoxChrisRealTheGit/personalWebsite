import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container1,
    Holder5,
    Holder1,
    Holder2,
    Holder7,
    Hero1,
    P1,
} from "react-stylux";

import aspen from '../../images/chrisinaspen.jpg';
export default class Home extends Component {
    render() {
        return (
            <section>
                <Header />
                <Container1>
                    <Holder7>
                        <Hero1
                            image={`url(${aspen})`}
                            height='300px' >
                        </Hero1>
                        <Holder5>
                            <Holder2>
                                <Holder5>
                                    <P1>
                                        something about development
                                </P1>
                                </Holder5>
                                <Holder5>
                                    <P1>
                                        Currently, I am working on my BA in Graphic Design. I have taught myself HTML, CSS, and JavaScript. This website was made in Dreamweaver utilizing the Bootstrap framework. I’ve also made logos, Brochures, Branding assets, and various stationary.
                                </P1>
                                </Holder5>
                                <Holder5>
                                    <P1>
                                        Recently, I finished my first novel. There is one other novel being worked on as well. I have well over 200 pages of various scripts, a few plays being worked on, and a collection of short stories near completion. Most days I can average 4k words. The most that I have written in a day is near 10k.
                                </P1>
                                </Holder5>
                            </Holder2>
                            <a href="/about"><P1 width="200px">Read More...</P1></a>
                        </Holder5>
                        <Holder5>
                            <Holder1>
                            </Holder1>
                        </Holder5>
                    </Holder7>
                </Container1>
                <Footer />
            </section >
        )
    }
}