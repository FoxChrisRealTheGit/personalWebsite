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
    A,
    BulletList1,
    H42,
    SquareImage,
} from "react-stylux"

import ataraxyclothingimg from "../../../images/portfolio/webdevelopment/AtaraxyClothingHomepage_LG.jpg";

export default function AtaraxyClothingView() {

    return (
        <section>
            <Header />
            <Container>
            <HR height="300px" />
            <Holder
                    direction="column">
                <H31>
                   Ataraxy Clothing
                </H31>
                <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/ataraxyclothing">
                            <Holder>
                                <SquareImage
                                    size='lg'>
                                    {ataraxyclothingimg}
                                    {"The homepage for ataraxyClothing"}
                                </SquareImage>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Ataraxy Clothing | React | react-styux | Stripe
                                    </H42>
                                    <BulletList1>
                                        {"Won most technical award during personal project presentations"}
                                        {"Designed a component library (react-stylux) to build this project"}
                                        {"This is a full-stack application with complete stripe integration"}
                                        <a href="https://github.com/FoxChrisRealTheGit/AtaraxyClothing" rel="noopener noreferrer" target="_blank">Ataraxy Clothing Github</a>
                                        <a href="https://ataraxyclothing.com/" rel="noopener noreferrer" target="_blank">Ataraxy Clothing website</a>
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