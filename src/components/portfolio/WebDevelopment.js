import React, { Component } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container,
    Holder,
    HR,
    H31,
} from 'react-stylux'

export default class WebDevelopment extends Component {

    render() {
        return (
            <section>
                <Header />
                <Container>
                <HR height="300px" />
                    <H31>
                        Web Development
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