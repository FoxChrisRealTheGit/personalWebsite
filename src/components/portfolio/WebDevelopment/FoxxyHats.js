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

import FoxxyHats from "../../../images/portfolio/webdevelopment/FoxxyHats.jpg";

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
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/foxxyhats">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                    {FoxxyHats}
                                    {"The homepage for Foxxy Hats"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Foxxy Hats | Wordpress | WooCommerce
                        </H42>
                                    <BulletList1>
                                        {"Not active"}
                                        {"Worked on seriously from 2015 - 2016"}
                                        {"Initially started in 2014"}
                                        {"Learned a lot about how to run a business"}
                                        {"Leanred even more about Webdesign and Ecommerce"}

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