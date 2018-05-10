import React from "react"
import { Link } from "react-router-dom";

import {
    Wrapper,
    Holder,
    HR,
    H,
    P,
} from "react-stylux"

export default function IWantedToDieNovelView() {

    return (
        <Wrapper>
            <HR height="300px" />
            <Holder
                direction="column">
                <H>
                    I Wanted to Die
                </H>


                <Link to="/publications"><P>Back to Publications...</P></Link>
            </Holder>
            <HR height="300px" />
        </Wrapper>
    )
}