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
                
                <Container>
                <HR height="300px" />
                        <Holder
                            direction='column'>
                           
                            <P1
                                padding='10%'>
                                I am an aspiring web developer working on my degree in graphic design. I have my ACE in Illustrator and a working familiarity with React, JavaScript, HTML, and CSS. Please see my NPM page for <a href="https://www.npmjs.com/~foxchrisrealthe" target="_blank">working packages</a>, and my <a href="https://github.com/FoxChrisRealTheGit" target="_blank">github</a> 
                            </P1> 
                            <Link to="">
                            </Link>
                        </Holder>
                    
                    <HR height="300px" />
                </Container>
                <Footer />
            </section>
        )
    }
}