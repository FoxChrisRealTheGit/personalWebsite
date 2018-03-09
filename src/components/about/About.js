import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom';
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
                    <Holder
                        direction='column'>
                        <P1
                           padding='10%'>
                            I am an aspiring web developer working on my degree in graphic design. I have my ACE in Illustrator and a working familiarity with React, JavaScript, HTML, and CSS. Please see my NPM page for working packages: https://www.npmjs.com/~foxchrisrealthe
                            and my github: https://github.com/FoxChrisRealTheGit
                        </P1>
                        <Link to="/about/fullstory"><P1 width='250px'>Read My Full Story...</P1></Link>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}