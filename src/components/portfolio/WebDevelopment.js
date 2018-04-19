import React, { Component } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {Link} from "react-router-dom";

import "../../css/main.css";

import {
    Container,
    Holder,
    HR,
    H31,
    A,
    BulletList1,
    SquareImage,
    H42,
} from 'react-stylux'

import aristosPoster from "../../images/placeholders/aristosPlaceholder.jpg"
import reactstyluximg from "../../images/portfolio/webdevelopment/reactStyluxTOC_LG.jpg"
import peaxgamesimg from "../../images/portfolio/webdevelopment/PeaxLogin_LG.jpg"
import ataraxyclothingimg from "../../images/portfolio/webdevelopment/AtaraxyClothingHomepage_LG.jpg"
import twoLiesMark1 from "../../images/portfolio/webdevelopment/twoLiesMarketing.jpg";
import ataraxyLife from "../../images/portfolio/webdevelopment/AtaraxyLifeHomepage.jpg";
import FoxxyHats from "../../images/portfolio/webdevelopment/FoxxyHats.jpg";

export default class WebDevelopment extends Component {

    render() {
        return (
            <section>
                <Header />
                <Container>
                    <HR height="300px" />
                    <H31>
                        Web Development
                    </H31>
                    <Holder
                        direction="column">
                        <Holder
                        className="pagination" 
                        width="200px">
                            <Link to="/portfolio/webdevelopment">&laquo;</Link>
                            <Link to="/portfolio/webdevelopment">1</Link>
                            <Link to="/portfolio/webdevelopment">&raquo;</Link>
                        </Holder>
                        <A width="85%" to="/portfolio/webdevelopment/aristos">
                            <Holder
                                alignBlock1="flex-start">
                                <SquareImage
                                    size='lg'>
                                    {aristosPoster}
                                    {"The first draft logo for the Aristos Prject"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Aristos Project | Golang | AWS
                                    </H42>
                                    <BulletList1>
                                        {"In initial development stages"}
                                        {"CMS and Website builder built in Golang"}
                                        {"All pages set up with HTTPS through Let's Encrypt"}
                                        {"Multiple encoders and decoders built for many file types"}
                                        {"Working on full AWS integration"}
                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/reactstylux">
                            <Holder
                                alignBlock1="flex-start">
                                <SquareImage
                                    size='lg'>
                                    {reactstyluximg}
                                    {"The Table of Contents on Github for react-stylux"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        react-stylux | React | Babel | NPM
                                    </H42>
                                    <BulletList1>
                                        {"Still under development"}
                                        {"Component library with layout mechanic"}
                                        {"Uses style object to style components through props"}
                                        {"This web page was built with react-stylux to test capability"}
                                        <a href="https://github.com/Fox-Design-Agency/react-stylux" rel="noopener noreferrer" target="_blank">react-stylux Github</a>
                                        <a href="https://www.npmjs.com/package/react-stylux" rel="noopener noreferrer" target="_blank">react-stylux NPM</a>
                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/peaxgames">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                    {peaxgamesimg}
                                    {"The landing page for peax games"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Peax Games | React | Socket.io | Phaser
                                    </H42>
                                    <BulletList1>
                                    {"semi-active"}
                                        {"Group project - I was responsible for Game Development"}
                                        {"Html5 Game arcade built with Phaser for React"}
                                        {"Had to create work arounds for Phaser to operate correctly"}
                                        {"Studied OO concepts to build better game code structure"}
                                        <a href="https://github.com/Game-Board-Guys/GameBoard" rel="noopener noreferrer" target="_blank">Peax Games Github</a>
                                        <a href="http://peaxgames.com/" rel="noopener noreferrer" target="_blank">Peax Games Website</a>
                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/ataraxyclothing">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                    {ataraxyclothingimg}
                                    {"The homepage for ataraxyClothing"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Ataraxy Clothing | React | react-styux | Stripe
                                    </H42>
                                    <BulletList1>
                                        {"Won most technical award during personal project presentations"}
                                        {"Designed a component library (react-stylux) to build this project"}
                                        {"This is a full-stack application with complete stripe integration"}
                                        {"Currently rewritting the backend with Golang"}
                                        <a href="https://github.com/FoxChrisRealTheGit/AtaraxyClothing" rel="noopener noreferrer" target="_blank">Ataraxy Clothing Github</a>
                                        <a href="https://ataraxyclothing.com/" rel="noopener noreferrer" target="_blank">Ataraxy Clothing website</a>
                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                    {twoLiesMark1}
                                    {"The homepage for 2 lies and 1 truth"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        2 Lies and 1 Truth | Wordpress
                                    </H42>
                                    <BulletList1>
                                    {"Not active"}
                                        {"Worked on from 2017 - 2017"}
                                        {"Set up a basic Wordpress website to work with RSS feed for podcast"}
                                        {"Would update homepage for new episodes"}
                                        {"Learned alot about marketing and the importance of quality"}

                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/ataraxylife">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                    {ataraxyLife}
                                    {"The homepage for Ataraxy Life"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Ataraxy Life | Shopify
                                    </H42>
                                    <BulletList1>
                                    {"Not active"}
                                        {"Worked on 2016 - 2017"}
                                        {"Evolution from Foxxy Hats"}
                                        {"Learned about drop shipping and marketing"}
                                        {"Learned about hosting and CMS' in more detail"}

                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/foxxyhats">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                    {FoxxyHats}
                                    {"The homepage for Foxxy Hats"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Foxxy Hats | Wordpress | WooCommerce
                                </H42>
                                    <BulletList1>
                                    {"Not active"}
                                        {"Worked on seriously from 2015 - 2016"}
                                        {"Initially started in 2014"}
                                        {"Learned a lot about how to run a business"}
                                        {"Leanred even more about Webdesign and Ecommerce"}

                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <Holder
                        className="pagination" 
                        width="200px">
                            <Link to="/portfolio/webdevelopment">&laquo;</Link>
                            <Link to="/portfolio/webdevelopment">1</Link>
                            <Link to="/portfolio/webdevelopment">&raquo;</Link>
                        </Holder>
                    </Holder>
                    <HR height="300px" />
                </Container>
                <Footer />
            </section>
        )
    }
}