import React from "react"
import {Link }from "react-router-dom";

import {
    Wrapper,
    Holder,
    HR,
    H,
    P,
    A,
    Image,
    List,
} from "react-stylux"
import FinalRestarauntProject from "../../../images/portfolio/graphicdesign/FinalRestarauntProject.jpg";
export default function RestarauntProjectView() {

    return (
            <Wrapper>
            <HR height="300px" />
            <Holder
                    direction="column">
                <H>
                    Restaraunt Project
                </H>
                <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                    <Holder>
                        <Image
                        box="2"
                            size='lg'>
                            {FinalRestarauntProject}
                            {"The homepage for 2 lies and 1 truth"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                            Restaraunt Project | Indesign CC | Illustrator CC
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