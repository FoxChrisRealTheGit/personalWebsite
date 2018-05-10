import React from "react"
import { Link } from "react-router-dom";

import {
    Wrapper,
    Holder,
    HR,
    P,
    A,
    H,
    List,
    Image,
} from "react-stylux"

import magazineCloneCovers from "../../../images/portfolio/graphicdesign/MagazineCoverClones.jpg";

export default function MagazineCloneCoverViews() {

    return (
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        Magazine Cover Clones
                    </H>

                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                            <Holder>
                                <Image
                                box="2"
                                    size='lg'>
                                    {magazineCloneCovers}
                                    {"The homepage for 2 lies and 1 truth"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H margin="0 0 50px 0">
                                        Magazine Cover Clones | Indesign CC | Illustrator CC
                                    </H>
                                    <List>
                                        {"School Project"}

                                    </List>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Link to="/portfolio/graphicdesign"><P>Back to Graphic Design...</P></Link>
                </Holder>
                <HR height="300px" />
            </Wrapper>
    )
}