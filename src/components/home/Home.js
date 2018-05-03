import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import {
    Container,
    Holder,
    Hero1,
    H32,
    Image,
    HR,
    Card,
    A,
    BulletList1,
} from "react-stylux";

import aspen from '../../images/chrisinaspen.jpg';

import genderedcover from "../../images/publications/BookCoverTwo.jpg"
import card1ComingSoon from "../../images/placeholders/card1ComingSoon.jpg";
import Developer from "../../images/placeholders/DeveloperCodeImage.jpg";
import Designer from "../../images/placeholders/DesignerImage.jpg";
import Writer from "../../images/placeholders/WriterImage.jpg";
import AtaraxyLife from "../../images/portfolio/webdevelopment/AtaraxyLifeNonProfitBeliefs.jpg";

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
                                    <Card>
                                        {Developer}
                                        {"Placeholder for a developer type image"}
                                        {"Developer"}
                                        {"I am a very self-motivated web developer with knowledge of Golang, ReactJs, Javascript, HTML, CSS, RESTful, Express, and NodeJS. Currently, I am exploring various computer science topics and data structure solutions. Kali Linux also has my interest."}

                                    </Card>
                                    <Card>
                                        {Designer}
                                        {"Placeholder for a designer type image"}
                                        {"Designer"}
                                        {"Currently, I am working on my BA in Graphic Design. I have played around with the creation of various print material, but I am very interested in the UX considerations surrounding web design. VR is also extremely fascinating to me at the present moment."}
                                    </Card>
                                    <Card>
                                        {Writer}
                                        {"Placeholder for a writer type image"}
                                        {"Writer"}
                                        {"I regularly perform spoken word poetry and try to tell stories when I can. I enjoy being in front of people and working with crowds. I have well over 200 pages of various scripts, a few plays being worked on, a completed novel, and a collection of short stories near completion."}
                                    </Card>
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
                                    <Image
                                        type="square"
                                        size="lg">
                                        {AtaraxyLife}
                                    </Image>
                                </Link>
                                <Holder
                                    direction='column'>

                                    <Link to="/portfolio/webdevelopment/ataraxylife-nonprofit">
                                        <BulletList1>
                                            {"Non-Profit for Suicide Prevention and happiness advocation"}
                                        </BulletList1>
                                    </Link>
                                </Holder>
                            </Holder>

                        </Holder>

                        <HR height="300px" />

                        <Holder
                            direction="column">
                            <Link to="/publications">
                                <H32>Publications</H32>
                            </Link>
                            <Holder>
                                <Link to="/publications" className="publicationTag">
                                    <Card>
                                        {card1ComingSoon}
                                        {"Alone Book Cover"}
                                        Alone
                                        </Card>
                                </Link>
                                <Link to="/publications" className="publicationTag">
                                    <Card>
                                        {card1ComingSoon}
                                        {"Crypto-Currency: A History Book Cover"}
                                        Crypto-currency: a history
                                   </Card>
                                </Link>
                                <Link to="/publications" className="publicationTag">
                                    <Card>
                                        {genderedcover}
                                        {"Gendered Book cover"}

                                    </Card>
                                </Link>
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