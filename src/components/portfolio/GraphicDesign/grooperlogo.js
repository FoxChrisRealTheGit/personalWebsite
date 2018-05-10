import React from "react"
import { Link } from "react-router-dom";

import {
    Wrapper,
    Holder,
    HR,
    H,
    P,
    A,
    Image,
    List
} from "react-stylux"

export default function GrooperLogoView() {

    return (
        <Wrapper>
            <HR height="300px" />
            <Holder
                direction="column">
                <H>
                    Grooper Logo
                </H>
                <Holder
                    direction="column">
                    <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                        <Holder>
                            <Image
                                box="2"
                                size='lg'>
                                {}
                                {"The homepage for 2 lies and 1 truth"}
                            </Image>
                            <Holder
                                direction="column">
                                <H box="4" margin="0 0 50px 0">
                                    Grooper Logo | Illustrator CC
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