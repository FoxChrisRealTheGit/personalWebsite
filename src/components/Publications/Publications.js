import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container,
    Holder,
    H31,
    HR,
} from 'react-stylux';

export default class Publications extends Component {

    render() {
        return (
            <section>
                <Header />
                <Container>
                <HR height="300px" />
                    <Holder>
                        <H31>
                            Publications
                        </H31>

                        
                    </Holder>
                    <HR height="300px" />
                </Container>
                <Footer />
            </section>
        )
    }
}