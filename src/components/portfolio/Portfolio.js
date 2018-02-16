import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {
    Container1,
    Holder8,
    H31,
    P3,
    Carousel4,
    SubNavBar1,
    H41,
} from 'react-stylux';

import HashLink from 'react-router-hash-link';


export default class Portfolio extends Component {
    render() {
        return (
            <section>
                <Header />
                <Container1>
                    <Holder8>
                        <H31>
                            Portfolio
                        </H31>
                        <P3>
                            Something about my portfolio
                        </P3>
                        <SubNavBar1
                            align='center'>
                            <a href="/#WebDevelopment">Web Development/Design</a>
                            <a href="#GraphicDesign">Graphic Design</a>
                        </SubNavBar1>
                        <Carousel4>
                        </Carousel4>
                        <H41>
                            Web Development/Design
                        </H41>
                        <div id="/#WebDevelopment"></div>

                    </Holder8>
                </Container1>
                <Footer />
            </section>
        )
    }
}