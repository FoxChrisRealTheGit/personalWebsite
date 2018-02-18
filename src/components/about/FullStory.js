import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container,
    Holder,
    H32,
    P1,
} from 'react-stylux';

export default class FullStory extends Component {
    render() {
        return (
            <section>
                <Header />
                <Container>
                    <Holder
                        direction='column'>
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
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}