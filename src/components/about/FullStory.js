import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container1,
    Holder13,
    H32,
    P1,
} from 'react-stylux';

export default class FullStory extends Component {
    render() {
        return (
            <section>
                <Header />
                <Container1>
                    <Holder13>
                        <H32>
                            The Start
                        </H32>
                        <P1>

                        </P1>
                        <H32>
                            The Start
                        </H32>
                        <P1>
                        </P1>
                    </Holder13>
                </Container1>
                <Footer />
            </section>
        )
    }
}