import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container1,
    Holder8,
    H31,
} from 'react-stylux';

export default class Publications extends Component {

    render() {
        return (
            <section>
                <Header />
                <Container1>
                    <Holder8>
                        <H31>
                            Publications
                        </H31>
                    </Holder8>
                </Container1>
                <Footer />
            </section>
        )
    }
}