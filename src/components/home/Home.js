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
    A,
} from "react-stylux";

import aspen from '../../images/chrisinaspen.jpg';

import genderedcover from "../../images/publications/BookCoverTwo.jpg"
import card1ComingSoon from "../../images/placeholders/card1ComingSoon.jpg";
import aristosPlaceholder from "../../images/placeholders/aristosPlaceholder.jpg";

export default class Home extends Component {
    render() {

        return (
            <section>
                <Header />
                <Container
                    direction="column">
                    <Holder
                        direction='column'
                        block1smdis="none">
                        <Hero1
                            image={`url(${aspen})`}
                            height='375px' >
                        </Hero1>
                        <Holder
                            direction='column'>
                            <A width="1200px" to="/about">
                                <Holder>
                                    <Card1>
                                        {card1ComingSoon}
                                        {"Placeholder for a developer type image"}
                                        {"Developer"}
                                        {"I am a very self-motivated web developer with knowledge of Golang, ReactJs, Javascript, HTML, CSS, RESTful, Express, and NodeJS. Currently, I am exploring various computer science topics and data structure solutions. Kali Linux also has my interest."}

                                    </Card1>
                                    <Card1>
                                        {card1ComingSoon}
                                        {"Placeholder for a designer type image"}
                                        {"Designer"}
                                        {"Currently, I am working on my BA in Graphic Design. I have played around with the creation of various print material, but I am very interested in the UX considerations surrounding web design. VR is also extremely fascinating to me at the present moment."}
                                   </Card1>
                                    <Card1>
                                        {card1ComingSoon}
                                        {"Placeholder for a writer type image"}
                                        {"Writer"}
                                        {"I regularly perform spoken word poetry and try to tell stories when I can. I enjoy being in front of people and working with crowds. I have well over 200 pages of various scripts, a few plays being worked on, a completed novel, and a collection of short stories near completion."}
                                   </Card1>
                                </Holder>
                            </A>
                        </Holder>


                        <HR height="300px" />

                        <Holder
                            direction='column'>
                            <Link to="/portfolio">
                                <H32>
                                    Most Recent Work
                                </H32>
                            </Link>
                            <Holder>
                                <Link to="/portfolio">
                                    <SquareImage
                                        size="lg">
                                        {aristosPlaceholder}
                                    </SquareImage>
                                </Link>
                                <Holder
                                    direction='column'>

                                    <Link to="/portfolio">
                                        <P1>
                                            Aristos CMS
                                        </P1>
                                    </Link>
                                </Holder>
                            </Holder>

                        </Holder>

                        <HR height="300px" />

                        <Holder
                            direction="column">
                            <a href="/publications">
                                <H32>Publications</H32>
                            </a>
                            <Holder>
                                <a href="#" className="publicationTag">
                                    <Card1>
                                        {card1ComingSoon}
                                        {"Alone Book Cover"}
                                        Alone
                                        </Card1>
                                </a>
                                <a href="#" className="publicationTag">
                                    <Card1>
                                        {card1ComingSoon}
                                        {"Crypto-Currency: A History Book Cover"}
                                        Crypto-currency: a history
                                   </Card1>
                                </a>
                                <a href="#" className="publicationTag">
                                    <Card1>
                                        {genderedcover}
                                        {"Gendered Book cover"}

                                    </Card1>
                                </a>
                            </Holder>

                        </Holder>

                    </Holder>
                    <HR height="300px" />
                </Container>

                <Footer />
            </section>
        )
    }
}