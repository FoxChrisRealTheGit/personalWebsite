import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import {
    Container,
    Holder,
    H31,
    P3,
    Carousel4,
    SubNavBar1,
    H41,
    H42,
    P1,
    SquareImage,
    BulletList1,
} from 'react-stylux';


export default class Portfolio extends Component {
    render() {
        return (
            <section>
                <Header />
                <Container>
                    <Holder
                        direction="column">
                        <H31>
                            Portfolio
                        </H31>
                        <P3>
                            Something about my portfolio
                        </P3>
                        <Holder>
                            <SquareImage>
                            </SquareImage>
                            <SquareImage>
                            </SquareImage>
                            <SquareImage>
                            </SquareImage>
                            <SquareImage>
                            </SquareImage>
                            <SquareImage>
                            </SquareImage>
                            <SquareImage>
                            </SquareImage>
                            <SquareImage>
                            </SquareImage>
                        </Holder>
                        <SubNavBar1
                            align='center'>
                            <a href="/portfolio#webdevelopment">Web Development/Design</a>
                            <a href="/portfolio#graphicdesign">Graphic Design</a>
                        </SubNavBar1>
                        <Carousel4>
                        </Carousel4>
                        <H41 id="webdevelopment">
                            Web Development/Design
                        </H41>
                        <Holder
                            direction="column">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42>
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
                        </Holder>
                        <Holder
                            direction="column">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42>
                                        Ataraxy Clothing | React | react-styux | Stripe
                                    </H42>
                                    <BulletList1>
                                        {'Won most technical award during presentations'}
                                        {'Designed a component library to build this project'}
                                        {'This is a full-stack application with complete stripe integratio'}
                                        {'https://github.com/FoxChrisRealTheGit/AtaraxyClothing'}
                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </Holder>
                        <Link to="/portfolio/webdevelopment"><P1>See More Web Development...</P1></Link>
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
                                    <SquareImage
                                        size='lg'>
                                    </SquareImage>
                                    <Holder
                                        direction="column">
                                        <H42>
                                            Play poster
                                        </H42>
                                        <P1>
                                            project description
                                        </P1>
                                    </Holder>
                                </Holder>
                            </Holder>
                            <Holder
                                direction="column"
                            >
                                <Holder>
                                    <SquareImage
                                        size='lg'>
                                    </SquareImage>
                                    <Holder
                                        direction="column">
                                        <H42>
                                            Final Restaraunt project
                                        </H42>
                                        <BulletList1>
                                            {'Menu'}
                                            {'Brochure'}
                                            {'Table Tent'}
                                        </BulletList1>
                                    </Holder>
                                </Holder>
                            </Holder>
                            <Holder
                                direction="column"
                            >
                                <Holder>
                                    <SquareImage
                                        size='lg'>
                                    </SquareImage>
                                    <Holder
                                        direction="column">
                                        <H42>
                                            Another project
                                        </H42>
                                        <BulletList1>
                                            {'List'}
                                        </BulletList1>
                                    </Holder>
                                </Holder>
                            </Holder>
                            <Link to="/portfolio/graphicdesign"><P1>See More Graphic Design...</P1></Link>
                        </Holder>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}