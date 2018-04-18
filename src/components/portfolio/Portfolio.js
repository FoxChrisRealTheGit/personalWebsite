import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import {
    Container,
    Holder,
    Carousel4,
    SubNavBar1,
    H41,
    H42,
    P1,
    SquareImage,
    BulletList1,
    HR,
    A,
    P4,
} from 'react-stylux';

import psIcon from "../../images/portfolio/icons/SVG/psIcon.svg"
import aiIcon from "../../images/portfolio/icons/SVG/aiIcon.svg"
import cssIcon from "../../images/portfolio/icons/SVG/cssIcon.svg"
import reactIcon from "../../images/portfolio/icons/SVG/ReactIcon.svg"
import GoIcon from "../../images/portfolio/icons/SVG/GoIcon.svg"
import jsIcon from "../../images/portfolio/icons/SVG/jsIcon.svg"
import htmlIcon from "../../images/portfolio/icons/SVG/htmlIcon.svg"
import sqlIcon from "../../images/portfolio/icons/SVG/sqlIcon.svg"

import reactstyluximg from "../../images/portfolio/webdevelopment/reactStyluxTOC_LG.jpg"
import peaxgamesimg from "../../images/portfolio/webdevelopment/PeaxLogin_LG.jpg"
import ataraxyclothingimg from "../../images/portfolio/webdevelopment/AtaraxyClothingHomepage_LG.jpg"

import nightmaresposter from "../../images/portfolio/graphicdesign/1.4_final.svg"
//
//
//
//

export default class Portfolio extends Component {
    render() {
        return (
            <section>
                <Header />
                <Container>
                    <Holder
                        direction="column">
                        <Holder direction="column">
                            <P4>I'm believing past impossible</P4>
                            <P4>No matter how statistically improbable</P4>
                            <P4>Because</P4>
                            <P4>When it all works out</P4>
                            <P4>As long as I believe in myself</P4>
                            <P4>I'm unstoppable</P4>
                        </Holder>
                        <Holder margin="50px 0 50px 0">
                            <SquareImage>
                            {psIcon}
                            {"The logo for adobe photoshop cc"}
                            </SquareImage>
                            <SquareImage>
                            {aiIcon}
                            {"The logo for adobe illustrator cc"}
                            </SquareImage>
                            <SquareImage>
                            {cssIcon}
                            {"The symbol for css"}
                            </SquareImage>
                            <SquareImage>
                            {reactIcon}
                            {"The logo for React.js"}
                            </SquareImage>
                            <SquareImage>
                            {GoIcon}
                            {"The icon for Go lang"}
                            </SquareImage>
                            <SquareImage>
                            {jsIcon}
                            {"The symbol for javascript"}
                            </SquareImage>
                            <SquareImage>
                            {htmlIcon}
                            {"The symbol for html 5"}
                            </SquareImage>
                            <SquareImage>
                            {sqlIcon}
                            {"The symbol for SQL"}
                            </SquareImage>
                        </Holder>
                        <SubNavBar1
                            align='center'>
                            <a href="/portfolio#webdevelopment">Web Development/Design</a>
                            <a href="/portfolio#graphicdesign">Graphic Design</a>
                        </SubNavBar1>
                        <Carousel4>
                        </Carousel4>
                        <H41 id="webdevelopment" 
                            margin="100px 0 20px 0">
                            Web Development/Design
                        </H41>
                        <Holder
                            direction="column">
                            <A width="85%" to="/portfolio/webdevelopment/reactstylux">
                            <Holder
                                alignBlock1= "flex-start">
                                <SquareImage
                                    size='lg'>
                                    {reactstyluximg}
                                    {"The Table of Contents on Github for react-stylux"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        react-stylux | React | NPM | Babel
                                    </H42>
                                    <BulletList1>
                                        {'Component library with layout mechanic'}
                                        {'Uses style object to style components through props'}
                                        {'Still under development'}
                                        {"This web page was built with react-stylux"}
                                        {'https://github.com/Fox-Design-Agency/react-stylux'}
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
                                        {'Html5 Game arcade built with Phaser for React'}
                                        {'Had to create work arounds for Phaser to operate correctly'}
                                        {'Group project - I was responsible for Game Development'}
                                        {'https://github.com/Game-Board-Guys/GameBoard'}
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
                                        {'Won most technical award during presentations'}
                                        {'Designed a component library to build this project'}
                                        {'This is a full-stack application with complete stripe integration'}
                                        {"Built using react-stylux"}
                                        {'https://github.com/FoxChrisRealTheGit/AtaraxyClothing'}
                                    </BulletList1>
                                </Holder>
                            </Holder>
                            </A>
                            
                        </Holder>
                        <Link to="/portfolio/webdevelopment"><P1>See More Web Development...</P1></Link>
                        <HR height="300px" />
                        <Holder
                            direction='column'>
                            <H41
                                id="graphicdesign"
                                margin="100px 0 20px 0">
                                Graphic Design
                            </H41>
                            <Holder
                                direction="column">
                                <A width="85%" to="/portfolio/graphicdesign/nightmaresposter">
                                <Holder>
                                    <SquareImage
                                        size='lg'>
                                        {nightmaresposter}
                                        {"Play poster"}
                                    </SquareImage>
                                    <Holder
                                        direction="column">
                                        <H42 margin="0 0 50px 0">
                                            Play poster | Illustrator CC | Photoshop CC
                                        </H42>
                                        <BulletList1>
                                        {"Project for a friend's play"}
                                        {"Play was housed April 14th 2018"}
                                    </BulletList1>
                                    </Holder>
                                </Holder>
                                </A>
                                <HR />
                            </Holder>
                            <Holder
                                direction="column"
                            >
                            <A width="85%" to="/portfolio/graphicdesign/restarauntproject">
                                <Holder>
                                    <SquareImage
                                        size='lg'>
                                    </SquareImage>
                                    <Holder
                                        direction="column">
                                        <H42 margin="0 0 50px 0">
                                            Final Restaraunt project | InDesign CC | Illustrator CC
                                        </H42>
                                        <BulletList1>
                                            {'Menu'}
                                            {'Brochure'}
                                            {'Table Tent'}
                                        </BulletList1>
                                    </Holder>
                                </Holder>
                                </A>
                                <HR />
                            </Holder>
                            <Holder
                                direction="column"
                            >
                            <A width="85%" to="/portfolio/graphicdesign/lanzorettecalender">
                                <Holder>
                                    <SquareImage
                                        size='lg'>
                                    </SquareImage>
                                    <Holder
                                        direction="column">
                                        <H42 margin="0 0 50px 0">
                                            Another project
                                        </H42>
                                        <BulletList1>
                                            {'List'}
                                        </BulletList1>
                                    </Holder>
                                </Holder>
                                </A>
                                <HR />
                            </Holder>
                            <Holder
                                direction="column"
                            >
                            <A width="85%" to="/portfolio/graphicdesign/grooperlogo">
                                <Holder>
                                    <SquareImage
                                        size='lg'>
                                    </SquareImage>
                                    <Holder
                                        direction="column">
                                        <H42 margin="0 0 50px 0">
                                            Another project
                                        </H42>
                                        <BulletList1>
                                            {'List'}
                                        </BulletList1>
                                    </Holder>
                                </Holder>
                                </A>
                            </Holder>
                            <Link to="/portfolio/graphicdesign"><P1>See More Graphic Design...</P1></Link>
                        </Holder>
                    </Holder>
                    <HR height="300px" />
                </Container>
                <Footer />
            </section>
        )
    }
}