import React, { Component } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container,
    Holder,
    H31,
    HR,
} from 'react-stylux'

export default class GraphicDesign extends Component {

    render() {
        return (
            <section>
                <Header />
                <Container>
                    <HR height="300px" />
                    <H31>
                        Graphic Design
                    </H31>
                    <Holder
                        direction="column">


                    </Holder>
                    <HR height="300px" />
                </Container>
                <Footer />
            </section>
        )
    }
}