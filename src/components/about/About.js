import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {
    Container,
    Holder,
    P1,
    Hero1,
} from 'react-stylux';

import standing from '../../images/Resume_About/PhotoOfChris.JPG';
export default class About extends Component {
    render() {

        return (
            <section>
                <Header />
                <Hero1
                    image={`url(${standing})`}
                    height='300px' >
                    {''}
                </Hero1>
                <Container>
                    <Holder>
                        <a href="/about/fullstory"><P1 width='250px'>Read My Full Story...</P1></a>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}