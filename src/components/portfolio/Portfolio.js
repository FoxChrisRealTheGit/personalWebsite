import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {
    Container,
    Holder,
    H31,
    P3,
    Carousel4,
    SubNavBar1,
    H41,
} from 'react-stylux';

import { HashLink as Link } from 'react-router-hash-link';


export default class Portfolio extends Component {
    render() {
        return (
            <section>
                <Header />
                <Container>
                    <Holder
                        direction="column">
                        <H31>
                            Portfolio
                        </H31>
                        <P3>
                            Something about my portfolio
                        </P3>
                        <SubNavBar1
                            align='center'>
                            <Link smooth to="/portfolio#webdevelopment">Web Development/Design</Link>
                            <a href="#GraphicDesign">Graphic Design</a>
                        </SubNavBar1>
                        <Carousel4>
                        </Carousel4>
                        <H41>
                            Web Development/Design
                        </H41>
                        <div id="webdevelopment"></div>

                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}