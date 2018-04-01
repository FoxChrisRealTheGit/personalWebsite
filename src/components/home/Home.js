import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import {
    Container,
    Holder,
    Hero1,
    H32,
    P1,
    SquareImage,
    HR,
    Card1,
} from "react-stylux";

import aspen from '../../images/chrisinaspen.jpg';;

export default class Home extends Component {
    render() {

        return (
            <section>
                <Header />
                <Container
                    direction="column">
                    <Holder
                        direction='column'>
                        <Hero1
                            image={`url(${aspen})`}
                            height='375px' >
                        </Hero1>
                       <Holder
                            direction='column'> 
                            <a href="/about">
                            <Holder>
                                <Card1>
                                    {aspen}
                                    {"Christopher in aspen"}
                                    {'I am currently attending Dev Mountain and have learned React, Javascript, html, and css. After a month and a half of instruction I decided to create my own NPM package. This resulted in the creation of Stylux, which is how this website is put together.'}

                                </Card1>
                                <Card1>
                                    {}
                                    {}
                                    Currently, I am working on my BA in Graphic Design. I have played around witht eh creaton of various print material, but I am very interested in UX considerations surrounded web design. VR is also extremly facinating to me at the present moment.
                                   </Card1>
                                <Card1>
                                    {}
                                    I regulary perform spoken word poetry and ttry to perform when I can. I enjoy being in front of people and working with crowds. I have well over 200 pages of various scripts, a few plays being worked on, a completed novel, and a collection of short stories near completion.
                                   </Card1>
                            </Holder>
  </a>
                        </Holder>
                      

                        <HR height="300px" />
                       
                        <Holder
                            direction='column'>
                             <a href="/portfolio">
                            <Holder>
                                <SquareImage
                                    size="lg">
                                    {}
                                </SquareImage>
                                <Holder
                                    direction='column'
                                    alignBlock1='flex-start'
                                >
                                    <H32>
                                        Most Recent Work
                                    </H32>

                                    <P1>
                                        My most recent project
                                    </P1>
                                </Holder>
                            </Holder>
                             </a>
                        </Holder>
                       
                        <HR height="300px" />
                        
                        <Holder
                            direction="column">
                            <a href="/publications">
                            <H32>Publications</H32>
                            <Holder>
                                <Holder
                                    direction='column'>
                                    <SquareImage
                                        size="md">
                                        {}
                                    </SquareImage>
                                    <P1>
                                        Alone
                                    </P1>
                                </Holder>
                                <Holder
                                    direction='column'>
                                    <SquareImage
                                        size="md">
                                        {}
                                    </SquareImage>
                                    <P1>
                                        Crypto-currency: a history
                                    </P1>
                                </Holder>
                                <Holder
                                    direction='column'>
                                    <SquareImage
                                        size="md">
                                        {}
                                    </SquareImage>
                                    <P1>
                                        Gendered
                                    </P1>
                                </Holder>
                            </Holder>
                            </a>
                        </Holder> 
                        
                    </Holder>
                    <HR height="300px" />
                </Container>
                
                <Footer />
            </section>
        )
    }
}