import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import {
    Container,
    Holder,
    Carousel4,
    SubNavbar1,
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

import aristosPoster from "../../images/placeholders/aristosPlaceholder.jpg"
import reactstyluximg from "../../images/portfolio/webdevelopment/reactStyluxTOC_LG.jpg"
import peaxgamesimg from "../../images/portfolio/webdevelopment/PeaxLogin_LG.jpg"
import ataraxyclothingimg from "../../images/portfolio/webdevelopment/AtaraxyClothingHomepage_LG.jpg"

import nightmaresposter from "../../images/portfolio/graphicdesign/nightmaresPoster.jpg"
import finalRestarauntProject from "../../images/portfolio/graphicdesign/FinalRestarauntProject.jpg";
import LanzaroteCalenderDesign from "../../images/portfolio/graphicdesign/LanzaroteCalenderDesign.jpg";
import MagazineCoverClones from "../../images/portfolio/graphicdesign/MagazineCoverClones.jpg"
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
                        <SubNavbar1
                            align='center'>
                            <a href="/portfolio#webdevelopment">Web Development/Design</a>
                            <a href="/portfolio#graphicdesign">Graphic Design</a>
                        </SubNavbar1>
                        <Carousel4>
                            <SquareImage
                                size="md">
                                {ataraxyclothingimg}
                            </SquareImage>
                            <SquareImage
                                size="md">
                                {nightmaresposter}
                            </SquareImage>
                            <SquareImage
                                size="md">
                                {finalRestarauntProject}
                            </SquareImage>
                            <SquareImage
                                size="md">
                                {MagazineCoverClones}
                            </SquareImage>

                            <SquareImage
                                size="md">
                                {reactstyluximg}
                            </SquareImage>
                            <SquareImage
                                size="md">
                                {peaxgamesimg}
                            </SquareImage>
                            <SquareImage
                                size="md">
                                {aristosPoster}
                            </SquareImage>
                            <SquareImage
                                size="md">
                                {LanzaroteCalenderDesign}
                            </SquareImage>
                        </Carousel4>
                        <H41 id="webdevelopment"
                            margin="100px 0 20px 0">
                            Web Development/Design
                        </H41>
                        <Holder
                            direction="column">

                            <Holder
                                alignBlock1="flex-start">
                                <A width="85%" to="/portfolio/webdevelopment/aristos">
                                    <SquareImage
                                        size='lg'>
                                        {aristosPoster}
                                        {"The first draft logo for the Aristos Prject"}
                                    </SquareImage>
                                </A>
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

                            <HR />
                        </Holder>
                        <Holder
                            direction="column">

                            <Holder
                                alignBlock1="flex-start">
                                <A width="85%" to="/portfolio/webdevelopment/reactstylux">
                                    <SquareImage
                                        size='lg'>
                                        {reactstyluximg}
                                        {"The Table of Contents on Github for react-stylux"}
                                    </SquareImage>
                                </A>
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

                            <HR />
                        </Holder>
                        <Holder
                            direction="column">

                            <Holder>
                                <A width="85%" to="/portfolio/webdevelopment/peaxgames">
                                    <SquareImage
                                        size='lg'>
                                        {peaxgamesimg}
                                        {"The landing page for peax games"}
                                    </SquareImage>
                                </A>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Peax Games | React | Socket.io | Phaser
                                    </H42>
                                    <BulletList1>
                                        {"Group project - I was responsible for Game Development"}
                                        {"Html5 Game arcade built with Phaser for React"}
                                        {"Had to create work arounds for Phaser to operate correctly"}
                                        {"Studied OO concepts to build better game code structure"}
                                        <a href="https://github.com/Game-Board-Guys/GameBoard" rel="noopener noreferrer" target="_blank">Peax Games Github</a>
                                        <a href="http://peaxgames.com/" rel="noopener noreferrer" target="_blank">Peax Games Website</a>
                                    </BulletList1>
                                </Holder>
                            </Holder>

                            <HR />
                        </Holder>
                        <Holder
                            direction="column">

                            <Holder>
                                <A width="85%" to="/portfolio/webdevelopment/ataraxyclothing">
                                    <SquareImage
                                        size='lg'>
                                        {ataraxyclothingimg}
                                        {"The homepage for ataraxyClothing"}
                                    </SquareImage>
                                </A>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Ataraxy Clothing | React | react-styux | Stripe
                                    </H42>
                                    <BulletList1>
                                        {"Won most technical award during personal project presentations"}
                                        {"Designed a component library (react-stylux) to build this project"}
                                        {"This is a full-stack application with complete stripe integration"}
                                        <a href="https://github.com/FoxChrisRealTheGit/AtaraxyClothing" rel="noopener noreferrer" target="_blank">Ataraxy Clothing Github</a>
                                        <a href="https://ataraxyclothing.com/" rel="noopener noreferrer" target="_blank">Ataraxy Clothing website</a>
                                    </BulletList1>
                                </Holder>
                            </Holder>


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

                                <Holder>
                                    <A width="85%" to="/portfolio/graphicdesign/nightmaresposter">
                                        <SquareImage
                                            size='lg'>
                                            {nightmaresposter}
                                            {"Play poster"}
                                        </SquareImage>
                                    </A>
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

                                <HR />
                            </Holder>
                            <Holder
                                direction="column"
                            >
                                <A width="85%" to="/portfolio/graphicdesign/restarauntproject">
                                    <Holder>
                                        <SquareImage
                                            size='lg'>
                                            {finalRestarauntProject}
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
                                <A width="85%" to="/portfolio/graphicdesign/magazineclonecovers">
                                    <Holder>
                                        <SquareImage
                                            size='lg'>
                                            {MagazineCoverClones}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Magazine Cover Clones | Indesign CC | Illustrator CC
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
                                <A width="85%" to="/portfolio/graphicdesign/lanzorettecalender">
                                    <Holder>
                                        <SquareImage
                                            size='lg'>
                                            {LanzaroteCalenderDesign}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Lanzorette Calender Design | Illustrator CC
                                        </H42>
                                            <BulletList1>
                                                {"Calender Challenge design from John McWade"}
                                                {"Sketched to finished project in around 30min"}
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