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
    H42,
    BulletList1,
    Image,
} from "react-stylux"

import magazineCloneCovers from "../../../images/portfolio/graphicdesign/MagazineCoverClones.jpg";

export default function MagazineCloneCoverViews() {

    return (
        <section>
            <Header />
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        Magazine Cover Clones
                    </H31>

                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                            <Holder>
                                <Image
                                    type="square"
                                    size='lg'>
                                    {magazineCloneCovers}
                                    {"The homepage for 2 lies and 1 truth"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Magazine Cover Clones | Indesign CC | Illustrator CC
                                    </H42>
                                    <BulletList1>
                                        {"School Project"}

                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Link to="/portfolio/graphicdesign"><P1>Back to Graphic Design...</P1></Link>
                </Holder>
                <HR height="300px" />
            </Container>
            <Footer />
        </section>
    )
}