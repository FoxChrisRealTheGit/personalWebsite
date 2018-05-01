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
    Image,
    H42,
    BulletList1,
} from "react-stylux"

import ataraxyLife from "../../../images/portfolio/webdevelopment/AtaraxyLifeHomepage.jpg";

export default function AtaraxyLifeView() {

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
                        <A width="85%" to="/portfolio/webdevelopment/ataraxylife">
                            <Holder>
                                <Image
                                    type="square"
                                    size='lg'>
                                    {ataraxyLife}
                                    {"The homepage for Ataraxy Life"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Ataraxy Life | Shopify
                                    </H42>
                                    <BulletList1>
                                    {"Not active"}
                                        {"Worked on 2016 - 2017"}
                                        {"Evolution from Foxxy Hats"}
                                        {"Learned about drop shipping and marketing"}
                                        {"Learned about hosting and CMS' in more detail"}

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