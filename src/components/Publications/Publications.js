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
    Image,
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for Alone"}
                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Alone
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                                {"Detective Mystery"}
                                                {"Eldwin Mcklusky is getting out of the private investigator field when a desperate family comes to him. Hesitant, he takes on the toughest case in his life, and uncovers an impossible truth. Did the Cold War really end? Would anyone care?"}
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {Gendered}
                                            {"The cover for Gendered"}
                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Gendered
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: 49,558"}
                                                {"Young adult dystopian"}
                                                {""}
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for I Wanted to Die"}
                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                I Wanted to Die
                                        </H42>
                                            <BulletList1>
                                                {"Current word count: 83"}
                                                {"True Story, Self-Help"}
                                                {"I tell the story of my suicide and subsequent recovery to operating in the world."}
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for CryptoCurrency: A History"}
                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                CryptoCurrency: A History
                                        </H42>
                                            <BulletList1>
                                                {"Current word count: 23,029"}
                                                {"History"}
                                                {"This book covers various aspects of Crypto Currency by first identifying what a currency is in the modern definition, the historical foundations for currency, how currency is valued, and definitions of Crypto Currency. The history of bitcoin is also explored by examing the impact of the dark net markets and Silk Road. The book finishes by discusing how to get and use Crypto Currency as a Currency and not a commodity; however, currency trading is also discussed but no actual strategies are discused. This is not a get rich quick book, but is a worthwhiel read if you want to learn more about this facinating thing in modern society."}
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for Under The Apple Tree"}
                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Under the Apple Tree
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: 24,620"}
                                                {"Short Stories"}
                                                {"Seventeen mind bending stories with so many twists and turns that you will begin to question reality."}
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for Poetry Collection I"}

                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Poetry Collection I
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                                {"Poetry"}
                                                {"A few hundred pages of bad poetry"}
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {ComingSoon}
                                            {"The cover for Melanine and Joanne"}
                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Melanine and Joanne
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                                {"Modern Love Story"}
                                                {"The guy always gets the girl, but what about the girl getting the girl? Melanine's mom warned her about the people in this town, but its college, its her life."}
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {ComingSoon}
                                            {"An Image from Dad and Other Dad"}
                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Dad and Other Dad
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                                {"Seasons: 1"}
                                                {"Episodes: 10"}
                                                {"Follow the hilarious journey of two Dads raising their adopted son."}
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
                                        <Image
                                            type="square"
                                            size='lg'>
                                            {ComingSoon}
                                            {"An Image from Roommates"}
                                        </Image>
                                        <Holder
                                            direction="column">
                                            <H42 margin="0 0 50px 0">
                                                Roommates
                                            </H42>
                                            <BulletList1>
                                                {"Current word count: "}
                                                {"Seasons: 1"}
                                                {"Episodes: 10"}
                                                {"Love, loss, and friends. A dark comedy about two roommates navigating their lives."}
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