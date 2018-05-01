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
    Image,
    BulletList1,
    H42,
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
                        Breakpoint Publishing
                    </H31>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/foxxyhats">
                            <Holder>
                                <Image
                                    type="square"
                                    size='lg'>
                                    {}
                                    {"The homepage for BreakPoint Publishing"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Breakpoint Publishing | React
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