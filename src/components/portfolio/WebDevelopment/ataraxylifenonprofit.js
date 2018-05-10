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
    List,
} from "react-stylux"

import AtaraxyLife from "../../../images/portfolio/webdevelopment/AtaraxyLifeNonProfitBeliefs.jpg";

export default function FoxxyHatsView() {

    return (
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        Ataraxy Life
                    </H>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/foxxyhats">
                            <Holder>
                                <Image
                                box="2"
                                    size='lg'>
                                    {AtaraxyLife}
                                    {"The homepage for the new Ataraxy Life"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H margin="0 0 50px 0">
                                        Ataraxy Life | React
                                    </H>
                                    <List>
                                        {"Just starting"}

                                    </List>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Link to="/portfolio/webdevelopment"><P>Back to Web Development...</P></Link>
                </Holder>
                <HR height="300px" />
            </Wrapper>
    )
}