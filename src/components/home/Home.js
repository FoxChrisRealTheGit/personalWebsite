import React from 'react';
import { Link } from 'react-router-dom';
import {
    Wrapper,
    Holder,
    Hero,
    H,
    Image,
    HR,
    Card,
    A,
    List,
} from "react-stylux";

import aspen from '../../images/chrisinaspen.jpg';

import genderedcover from "../../images/publications/BookCoverTwo.jpg"
import card1ComingSoon from "../../images/placeholders/card1ComingSoon.jpg";
import Developer from "../../images/placeholders/DeveloperCodeImage.jpg";
import Designer from "../../images/placeholders/DesignerImage.jpg";
import Writer from "../../images/placeholders/WriterImage.jpg";
import AristosCMS from "../../images/portfolio/webdevelopment/0.0.1-node-version.jpg";


export default function Home() {
    return (
        <Wrapper
            direction="column">
            <Holder
                direction='column'
                block1smdis="none">
                <Hero
                    image={`url(${aspen})`}
                    height='375px' >
                </Hero>
                <Holder
                    direction='column'>

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

                </Holder>


                <HR height="300px" />

                <Holder
                    direction='column'>
                    <Link to="/portfolio">
                        <H>
                            Most Recent Work
                        </H>
                    </Link>
                    <Holder>
                        <Link to="/portfolio/webdevelopment/aristos">
                            <Image
                                box="2"
                                size="lg">
                                {AristosCMS}
                            </Image>
                        </Link>
                        <Holder
                            direction='column'>
                            <Link to="/portfolio/webdevelopment/aristos">
                            <H>
                               Aristos CMS - Node
                            </H>
                            
                                <List>
                                    {"CMS built in Nodejs"}
                                </List>
                            </Link>
                        </Holder>
                    </Holder>

                </Holder>

                <HR height="300px" />

                <Holder
                    direction="column">
                    <Link to="/publications">
                        <H>Publications</H>
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
        </Wrapper>
    )
}