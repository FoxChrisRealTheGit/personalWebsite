import React from "react"
import {Link }from "react-router-dom";

import {
    Container,
    Holder,
    HR,
    H31,
    P1,
} from "react-stylux"

export default function GenderedNovelView() {

    return (
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                <H31>
                    Gendered
                </H31>


                <Link to="/publications"><P1>Back to Publications...</P1></Link>
                </Holder>
                <HR height="300px" />
            </Container>
    )
}