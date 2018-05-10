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

import nightmaresPoster from "../../../images/portfolio/graphicdesign/nightmaresPoster.jpg";

export default function NightmaresPosterView() {

    return (
            <Wrapper> 
            <HR height="300px" />
            <Holder
                    direction="column">
                <H>
                    Nightmares Poster
                </H>
                <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                    <Holder>
                        <Image
                        box="2"
                            size='lg'>
                            {nightmaresPoster}
                            {"The homepage for 2 lies and 1 truth"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                            Nightmares Poster | Illustrator CC
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