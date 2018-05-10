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

import Lanzarote from "../../../images/portfolio/graphicdesign/LanzaroteCalenderDesign.jpg";

export default function LanzoretteCalenderView() {

    return (
        <Wrapper>
            <HR height="300px" />
            <Holder
                direction="column">
                <H>
                    Lanzorette Calender Design
                </H>
                <Holder
                    direction="column">
                    <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                        <Holder>
                            <Image
                            box="2"
                                size='lg'>
                                {Lanzarote}
                                {"The homepage for 2 lies and 1 truth"}
                            </Image>
                            <Holder
                                direction="column">
                                <H box="4" margin="0 0 50px 0">
                                    Lanzorette Calender Design | Illustrator CC
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