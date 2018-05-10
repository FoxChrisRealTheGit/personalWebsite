import React from "react"
import {Link }from "react-router-dom";

import {
    Wrapper,
    Holder,
    HR,
    H,
    P,
    A,
    Image,
    List,
} from "react-stylux"

import peaxgamesimg from "../../../images/portfolio/webdevelopment/PeaxLogin_LG.jpg";

export default function PeaxGamesView() {

    return (
            <Wrapper>
            <HR height="300px" />
            <Holder
                    direction="column">
                <H>
                    Peax Games
                </H>
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
                <Link to="/portfolio/webdevelopment"><P>Back to Web Development...</P></Link>
                </Holder>
                <HR height="300px" />
            </Wrapper>
    )
}