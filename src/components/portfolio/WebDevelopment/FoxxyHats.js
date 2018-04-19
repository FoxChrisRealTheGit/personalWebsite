import React from "react"
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import {Link }from "react-router-dom";

import {
    Container,
    Holder,
    HR,
    H31,
    P1,
} from "react-stylux"

export default function FoxxyHatsView() {

    return (
        <section>
            <Header />
            <Container>
            <HR height="300px" />
            <Holder
                    direction="column">
                <H31>
                    Foxxy Hats
                </H31>
                <Link to="/portfolio/webdevelopment"><P1>Back to Web Development...</P1></Link>
                </Holder>
                <HR height="300px" />
            </Container>
            <Footer />
        </section>
    )
}