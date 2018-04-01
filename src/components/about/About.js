import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import {
    Container,
    Holder,
    P1,
    Hero1,
    HR,
} from 'react-stylux';

import standing from '../../images/Resume_About/PhotoOfChris.JPG';
export default class About extends Component {
    render() {

        return (
            <section>
                <Header />
                <a href="/about/fullstory"><Hero1
                    image={`url(${standing})`}
                    height='300px' >
                    {''}
                </Hero1></a>
                <Container>
                        <Holder
                            direction='column'>
                            <P1
                                padding='10%'>
                                I am an aspiring web developer working on my degree in graphic design. I have my ACE in Illustrator and a working familiarity with React, JavaScript, HTML, and CSS. Please see my NPM page for <a href="https://www.npmjs.com/~foxchrisrealthe">working packages</a>, and my <a href="https://github.com/FoxChrisRealTheGit">github</a> 
                            </P1>
                        </Holder>
                    
                    <HR height="300px" />
                </Container>
                <Footer />
            </section>
        )
    }
}