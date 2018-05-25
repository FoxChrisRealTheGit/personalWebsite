import React from 'react'
import { Link } from "react-router-dom";

import "../../css/main.css";

import {
    Wrapper,
    Holder,
    HR,
    A,
    List,
    Image,
    H,
} from 'react-stylux'


import AtaraxyLifeNonprofit from "../../images/portfolio/webdevelopment/AtaraxyLifeNonProfitBeliefs.jpg";
import aristosPoster from "../../images/portfolio/webdevelopment/0.0.1-node-version.jpg"
import reactstyluximg from "../../images/portfolio/webdevelopment/reactStyluxTOC_LG.jpg"
import peaxgamesimg from "../../images/portfolio/webdevelopment/PeaxLogin_LG.jpg"
import ataraxyclothingimg from "../../images/portfolio/webdevelopment/AtaraxyClothingHomepage_LG.jpg"
import twoLiesMark1 from "../../images/portfolio/webdevelopment/twoLiesMarketing.jpg";
import ataraxyLife from "../../images/portfolio/webdevelopment/AtaraxyLifeHomepage.jpg";
import FoxxyHats from "../../images/portfolio/webdevelopment/FoxxyHats.jpg";

export default function WebDevelopment() {
    return (
        <Wrapper>
            <HR height="300px" />
            <H>
                Web Development
                    </H>
            <Holder
                direction="column">
                <Holder
                    className="pagination"
                    width="200px">
                    <Link to="/portfolio/webdevelopment">&laquo;</Link>
                    <Link to="/portfolio/webdevelopment">1</Link>
                    <Link to="/portfolio/webdevelopment">&raquo;</Link>
                </Holder>
                <Holder
                    direction="column">
                    <A width="85%" to="/portfolio/webdevelopment/breakpointpublishing">
                        <Holder
                            alignBlock1="flex-start">
                            <Image
                            box="2"
                                size='lg'>
                                {}
                                {"The homepage for Breakpoint Publishing"}
                            </Image>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                    Breakpoint Publishing | React | AWS
                                    </H>
                                <List>
                                    {"Just starting"}
                                </List>
                            </Holder>
                        </Holder>
                    </A>
                    <HR />
                </Holder>
                <Holder
                    direction="column">
                    <A width="85%" to="/portfolio/webdevelopment/ataraxylife-nonprofit">
                        <Holder
                            alignBlock1="flex-start">
                            <Image
                            box="2"
                                size='lg'>
                                {AtaraxyLifeNonprofit}
                                {"The homepage for ataraxy life non profit"}
                            </Image>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                    Ataraxy Life | React | AWS
                                    </H>
                                <List>
                                    {"Non-Profit for Suicide prevention and happiness advocation"}
                                </List>
                            </Holder>
                        </Holder>
                    </A>
                    <HR />
                </Holder>
                <A width="85%" to="/portfolio/webdevelopment/aristos">
                    <Holder
                        alignBlock1="flex-start">
                        <Image
                        box="2"
                            size='lg'>
                            {aristosPoster}
                            {"The first draft logo for the Aristos Prject"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                Aristos CMS | Nodejs 
                                    </H>
                            <List>
                            {"In Alpha development stages"}
                            {"CMS and Website builder built in Nodejs"}
                            {"Working on support for more template types"}
                            </List>
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
                        <Image
                        box="2"
                            size='lg'>
                            {reactstyluximg}
                            {"The Table of Contents on Github for react-stylux"}
                        </Image>
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
                </A>
                <HR />
            </Holder>
            <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/peaxgames">
                    <Holder>
                        <Image
                        box="2"
                            size='lg'>
                            {peaxgamesimg}
                            {"The landing page for peax games"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                Peax Games | React | Socket.io | Phaser 
                                    </H>
                            <List>
                                {"semi-active"}
                                {"Group project - I was responsible for Game Development"}
                                {"Html5 Game arcade built with Phaser for React"}
                                {"Had to create work arounds for Phaser to operate correctly"}
                                {"Studied OO concepts to build better game code structure"}
                                <a href="https://github.com/Game-Board-Guys/GameBoard" rel="noopener noreferrer" target="_blank">Peax Games Github</a>
                                <a href="http://peaxgames.com/" rel="noopener noreferrer" target="_blank">Peax Games Website</a>
                            </List>
                        </Holder>
                    </Holder>
                </A>
                <HR />
            </Holder>
            <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/ataraxyclothing">
                    <Holder>
                        <Image
                        box="2"
                            size='lg'>
                            {ataraxyclothingimg}
                            {"The homepage for ataraxyClothing"}
                        </Image>
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
                </A>
                <HR />
            </Holder>
            <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                    <Holder>
                        <Image
                        box="2"
                            size='lg'>
                            {twoLiesMark1}
                            {"The homepage for 2 lies and 1 truth"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                2 Lies and 1 Truth | Wordpress
                                    </H>
                            <List>
                                {"Not active"}
                                {"Worked on from 2017 - 2017"}
                                {"Set up a basic Wordpress website to work with RSS feed for podcast"}
                                {"Would update homepage for new episodes"}
                                {"Learned alot about marketing and the importance of quality"}

                            </List>
                        </Holder>
                    </Holder>
                </A>
                <HR />
            </Holder>
            <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/ataraxylife">
                    <Holder>
                        <Image
                        box="2"
                            size='lg'>
                            {ataraxyLife}
                            {"The homepage for Ataraxy Life"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                Ataraxy Life | Shopify
                                    </H>
                            <List>
                                {"Not active"}
                                {"Worked on 2016 - 2017"}
                                {"Evolution from Foxxy Hats"}
                                {"Learned about drop shipping and marketing"}
                                {"Learned about hosting and CMS' in more detail"}

                            </List>
                        </Holder>
                    </Holder>
                </A>
                <HR />
            </Holder>
            <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/foxxyhats">
                    <Holder>
                        <Image
                        box="2"
                            size='lg'>
                            {FoxxyHats}
                            {"The homepage for Foxxy Hats"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                Foxxy Hats | Wordpress | WooCommerce
                                </H>
                            <List>
                                {"Not active"}
                                {"Worked on seriously from 2015 - 2016"}
                                {"Initially started in 2014"}
                                {"Learned a lot about how to run a business"}
                                {"Leanred even more about Webdesign and Ecommerce"}

                            </List>
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
        </Wrapper>
    )
}
