import React, { Component } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container,
    Holder,
    H31
} from 'react-stylux'

export default class WebDevelopment extends Component {

    render() {
        return (
            <section>
                <Header />
                <Container>
                    <H31>
                        Web Development
                    </H31>

                </Container>
                <Footer />
            </section>
        )
    }
}