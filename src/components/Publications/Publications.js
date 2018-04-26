import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import {
    Container,
    Holder,
    H31,
    H42,
    HR,
    A,
    SquareImage,
    BulletList1,
} from 'react-stylux';
import Gendered from "../../images/publications/BookCoverTwo.jpg";
import ComingSoon from "../../images/placeholders/ComingSoon500Square.jpg";

export default class Publications extends Component {

    render() {
        return (
            <section>
                <Header />
                <Container>
                    <HR height="300px" />
                    <Holder
                        direction="column">
                        <H31>
                            Publications
                        </H31>
                        <HR />
                        <H42>Fiction</H42>
                        <HR />
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for Alone"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Alone
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>
                            </Holder>
                            <HR />
                        </Holder>
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {Gendered}
                                            {"The cover for Gendered"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Gendered
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: 49,558"}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>
                            </Holder>
                        </Holder>
                    </Holder>
                    <Holder direction="column">
                        <HR />
                        <H42>Non-Fiction</H42>
                        <HR />
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for I Wanted to Die"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                I Wanted to Die
                                        </H42>
                                            <BulletList1>
                                                {"Current word count: 83"}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>
                            </Holder>
                            <HR />
                        </Holder>
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for CryptoCurrency: A History"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                CryptoCurrency: A History
                                        </H42>
                                            <BulletList1>
                                                {"Current word count: 23,029"}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>
                            </Holder>
                        </Holder>
                    </Holder>
                    <Holder direction="column">
                        <HR />
                        <H42>Short Stories</H42>
                        <HR />
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for Under The Apple Tree"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Under the Apple Tree
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: 24,620"}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>
                            </Holder>
                        </Holder>
                    </Holder>
                    <Holder direction="column">
                        <HR />
                        <H42>Poetry</H42>
                        <HR />
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for Poetry Collection I"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Poetry Collection I
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>
                            </Holder>
                        </Holder>
                    </Holder>
                    <Holder direction="column">
                        <HR />
                        <H42>Plays</H42>
                        <HR />
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for Melanine and Joanne"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Melanine and Joanne
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>
                            </Holder>
                        </Holder>
                    </Holder>
                    <Holder direction="column">
                        <HR />
                        <H42>Misc Scripts</H42>
                        <HR />
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {ComingSoon}
                                            {"An Image from Dad and Other Dad"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Dad and Other Dad
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                                {"Seasons: 1"}
                                                {"Episodes: 10"}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>

                            </Holder>
                            <HR />
                        </Holder>
                        <Holder
                            direction="column">
                            <Holder
                                direction="column">
                                <A width="85%" to="">
                                    <Holder
                                        alignBlock1="flex-start">
                                        <SquareImage
                                            size='lg'>
                                            {ComingSoon}
                                            {"An Image from Roommates"}
                                        </SquareImage>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Roommates
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                                {"Seasons: 1"}
                                                {"Episodes: 10"}
                                            </BulletList1>
                                        </Holder>
                                    </Holder>
                                </A>
                            </Holder>
                        </Holder>
                    </Holder>
                    <HR height="300px" />
                </Container>
                <Footer />
            </section>
        )
    }
}