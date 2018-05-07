import React from "react"
import {Link }from "react-router-dom";

import {
    Container,
    Holder,
    HR,
    H31,
    P1,
    A,
    Image,
    H42,
    BulletList1,
} from "react-stylux"

import peaxgamesimg from "../../../images/portfolio/webdevelopment/PeaxLogin_LG.jpg";

export default function PeaxGamesView() {

    return (
            <Container>
            <HR height="300px" />
            <Holder
                    direction="column">
                <H31>
                    Peax Games
                </H31>
                <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/peaxgames">
                            <Holder>
                                <Image
                                    type="square"
                                    size='lg'>
                                    {peaxgamesimg}
                                    {"The landing page for peax games"}
                                </Image>
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
                <Link to="/portfolio/webdevelopment"><P1>Back to Web Development...</P1></Link>
                </Holder>
                <HR height="300px" />
            </Container>
    )
}