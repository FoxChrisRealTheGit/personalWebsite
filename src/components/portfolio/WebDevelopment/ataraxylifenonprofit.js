import React from "react"
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";

import {
    Container,
    Holder,
    HR,
    H31,
    P1,
    A,
    SquareImage,
    BulletList1,
    H42,
} from "react-stylux"

import AtaraxyLife from "../../../images/portfolio/webdevelopment/AtaraxyLifeNonProfitBeliefs.jpg";

export default function FoxxyHatsView() {

    return (
        <section>
            <Header />
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        Ataraxy Life
                    </H31>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/foxxyhats">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                    {AtaraxyLife}
                                    {"The homepage for the new Ataraxy Life"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Ataraxy Life | React
                                    </H42>
                                    <BulletList1>
                                        {"Just starting"}

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
            <Footer />
        </section>
    )
}