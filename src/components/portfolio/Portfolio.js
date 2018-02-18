import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
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
                                        Project title
                                    </H42>
                                    <P1>
                                        project description
                                    </P1>
                                </Holder>
                            </Holder>
                        </Holder>
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
                                            Project title
                                        </H42>
                                        <P1>
                                            project description
                                        </P1>
                                    </Holder>
                                </Holder>
                            </Holder>
                        </Holder>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}