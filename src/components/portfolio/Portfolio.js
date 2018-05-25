import React from 'react';
import { Link } from 'react-router-dom';
import {
    Wrapper,
    Holder,
    Carousel,
    SubNavbar,
    H,
    P,
    Image,
    List,
    HR,
    A,
    PLQ,
} from 'react-stylux';

import psIcon from "../../images/portfolio/icons/SVG/psIcon.svg"
import aiIcon from "../../images/portfolio/icons/SVG/aiIcon.svg"
import cssIcon from "../../images/portfolio/icons/SVG/cssIcon.svg"
import reactIcon from "../../images/portfolio/icons/SVG/ReactIcon.svg"
import GoIcon from "../../images/portfolio/icons/SVG/GoIcon.svg"
import jsIcon from "../../images/portfolio/icons/SVG/jsIcon.svg"
import htmlIcon from "../../images/portfolio/icons/SVG/htmlIcon.svg"
import sqlIcon from "../../images/portfolio/icons/SVG/sqlIcon.svg"

import aristosPoster from "../../images/portfolio/webdevelopment/0.0.1-node-version.jpg"
import reactstyluximg from "../../images/portfolio/webdevelopment/reactStyluxTOC_LG.jpg"
import peaxgamesimg from "../../images/portfolio/webdevelopment/PeaxLogin_LG.jpg"
import ataraxyclothingimg from "../../images/portfolio/webdevelopment/AtaraxyClothingHomepage_LG.jpg"

import nightmaresposter from "../../images/portfolio/graphicdesign/nightmaresPoster.jpg"
import finalRestarauntProject from "../../images/portfolio/graphicdesign/FinalRestarauntProject.jpg";
import LanzaroteCalenderDesign from "../../images/portfolio/graphicdesign/LanzaroteCalenderDesign.jpg";
import MagazineCoverClones from "../../images/portfolio/graphicdesign/MagazineCoverClones.jpg"
//

export default function Portfolio() {
    return (
        <Wrapper>
            <Holder
                direction="column">
                <PLQ box="2">I'm believing past impossible
                No matter how statistically improbable
                Because
                When it all works out
                As long as I believe in myself
                I'm unstoppable
                    {"Me"}</PLQ>
                <Holder margin="50px 0 50px 0">
                    <Image box="2">
                        {psIcon}
                        {"The logo for adobe photoshop cc"}
                    </Image>
                    <Image box="2">
                        {aiIcon}
                        {"The logo for adobe illustrator cc"}
                    </Image>
                    <Image box="2">
                        {cssIcon}
                        {"The symbol for css"}
                    </Image>
                    <Image box="2">
                        {reactIcon}
                        {"The logo for React.js"}
                    </Image>
                    <Image box="2">
                        {GoIcon}
                        {"The icon for Go lang"}
                    </Image>
                    <Image box="2">
                        {jsIcon}
                        {"The symbol for javascript"}
                    </Image>
                    <Image box="2">
                        {htmlIcon}
                        {"The symbol for html 5"}
                    </Image>
                    <Image box="2">
                        {sqlIcon}
                        {"The symbol for SQL"}
                    </Image>
                </Holder>
                <SubNavbar
                    align='center'>
                    <a href="/portfolio#webdevelopment">Web Development/Design</a>
                    <a href="/portfolio#graphicdesign">Graphic Design</a>
                </SubNavbar>
                <Carousel box="4">
                    <Image
                        box="2"
                        size="md">
                        {ataraxyclothingimg}
                    </Image>
                    <Image
                        box="2"
                        size="md">
                        {nightmaresposter}
                    </Image>
                    <Image
                        box="2"
                        size="md">
                        {finalRestarauntProject}
                    </Image>
                    <Image
                        box="2"
                        size="md">
                        {MagazineCoverClones}
                    </Image>

                    <Image
                        box="2"
                        size="md">
                        {reactstyluximg}
                    </Image>
                    <Image
                        box="2"
                        size="md">
                        {peaxgamesimg}
                    </Image>
                    <Image
                        box="2"
                        size="md">
                        {aristosPoster}
                    </Image>
                    <Image
                        box="2"
                        size="md">
                        {LanzaroteCalenderDesign}
                    </Image>
                </Carousel>
                <Link to="/portfolio/webdevelopment">
                    <H id="webdevelopment"
                        margin="100px 0 20px 0">
                        Web Development/Design
                        </H>
                </Link>
                <Holder
                    direction="column">
                    <Holder
                        alignBlock1="flex-start">
                        <A width="85%" to="/portfolio/webdevelopment/aristos">
                            <Image
                                box="2"
                                size='sm'>
                                {aristosPoster}
                                {"The first draft logo for the Aristos Prject"}
                            </Image>
                        </A>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                Aristos Project | Nodejs
                                    </H>
                            <List>
                            {"In Alpha development stages"}
                            {"CMS and Website builder built in Nodejs"}
                            {"Working on support for more template types"}
                            </List>
                        </Holder>
                    </Holder>

                    <HR />
                </Holder>
                <Holder
                    direction="column">

                    <Holder
                        alignBlock1="flex-start">
                        <A width="85%" to="/portfolio/webdevelopment/reactstylux">
                            <Image
                                box="2"
                                size='lg'>
                                {reactstyluximg}
                                {"The Table of Contents on Github for react-stylux"}
                            </Image>
                        </A>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                react-stylux | React | Babel | NPM
                                    </H>
                            <List>
                                {"Still under development"}
                                {"Component library with layout mechanic"}
                                {"Uses style object to style components through props"}
                                {"This web page was built with react-stylux to test capability"}
                                <a href="https://github.com/Fox-Design-Agency/react-stylux" rel="noopener noreferrer" target="_blank">react-stylux Github</a>
                                <a href="https://www.npmjs.com/package/react-stylux" rel="noopener noreferrer" target="_blank">react-stylux NPM</a>
                            </List>
                        </Holder>
                    </Holder>

                    <HR />
                </Holder>
                <Holder
                    direction="column">

                    <Holder>
                        <A width="85%" to="/portfolio/webdevelopment/peaxgames">
                            <Image
                                box="2"
                                size='lg'>
                                {peaxgamesimg}
                                {"The landing page for peax games"}
                            </Image>
                        </A>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                Peax Games | React | Socket.io | Phaser
                                    </H>
                            <List>
                                {"Group project - I was responsible for Game Development"}
                                {"Html5 Game arcade built with Phaser for React"}
                                {"Had to create work arounds for Phaser to operate correctly"}
                                {"Studied OO concepts to build better game code structure"}
                                <a href="https://github.com/Game-Board-Guys/GameBoard" rel="noopener noreferrer" target="_blank">Peax Games Github</a>
                                <a href="http://peaxgames.com/" rel="noopener noreferrer" target="_blank">Peax Games Website</a>
                            </List>
                        </Holder>
                    </Holder>

                    <HR />
                </Holder>
                <Holder
                    direction="column">

                    <Holder>
                        <A width="85%" to="/portfolio/webdevelopment/ataraxyclothing">
                            <Image
                                box="2"
                                size='lg'>
                                {ataraxyclothingimg}
                                {"The homepage for ataraxyClothing"}
                            </Image>
                        </A>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                Ataraxy Clothing | React | react-styux | Stripe | AWS
                                    </H>
                            <List>
                                {"Won most technical award during personal project presentations"}
                                {"Designed a component library (react-stylux) to build this project"}
                                {"This is a full-stack application with complete stripe integration"}
                                <a href="https://github.com/FoxChrisRealTheGit/AtaraxyClothing" rel="noopener noreferrer" target="_blank">Ataraxy Clothing Github</a>
                                <a href="https://ataraxyclothing.com/" rel="noopener noreferrer" target="_blank">Ataraxy Clothing website</a>
                            </List>
                        </Holder>
                    </Holder>


                </Holder>
                <Link to="/portfolio/webdevelopment"><P>See More Web Development...</P></Link>
                <HR height="300px" />
                <Holder
                    direction='column'>
                    <Link to="/portfolio/graphicdesign">
                        <H
                            id="graphicdesign"
                            margin="100px 0 20px 0">
                            Graphic Design
                            </H>
                    </Link>
                    <Holder
                        direction="column">

                        <Holder>
                            <A width="85%" to="/portfolio/graphicdesign/nightmaresposter">
                                <Image
                                    box="2"
                                    size='lg'>
                                    {nightmaresposter}
                                    {"Play poster"}
                                </Image>
                            </A>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                    Play poster | Illustrator CC | Photoshop CC
                                        </H>
                                <List>
                                    {"Project for a friend's play"}
                                    {"Play was housed April 14th 2018"}
                                </List>
                            </Holder>
                        </Holder>

                        <HR />
                    </Holder>
                    <Holder
                        direction="column"
                    >
                        <A width="85%" to="/portfolio/graphicdesign/restarauntproject">
                            <Holder>
                                <Image
                                    box="2"
                                    size='lg'>
                                    {finalRestarauntProject}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H margin="0 0 50px 0">
                                        Final Restaraunt project | InDesign CC | Illustrator CC
                                            </H>
                                    <List>
                                        {'Menu'}
                                        {'Brochure'}
                                        {'Table Tent'}
                                    </List>
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
                                <Image
                                    box="2"
                                    size='lg'>
                                    {MagazineCoverClones}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H margin="0 0 50px 0">
                                        Magazine Cover Clones | Indesign CC | Illustrator CC
                                            </H>
                                    <List>
                                        {'List'}
                                    </List>
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
                                <Image
                                    box="2"
                                    size='lg'>
                                    {LanzaroteCalenderDesign}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H margin="0 0 50px 0">
                                        Lanzorette Calender Design | Illustrator CC
                                            </H>
                                    <List>
                                        {"Calender Challenge design from John McWade"}
                                        {"Sketched to finished project in around 30min"}
                                    </List>
                                </Holder>
                            </Holder>
                        </A>

                    </Holder>
                    <Link to="/portfolio/graphicdesign"><P>See More Graphic Design...</P></Link>
                </Holder>
            </Holder>
            <HR height="300px" />
        </Wrapper>
    )
}
