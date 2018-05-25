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

import aristosPoster from "../../../images/portfolio/webdevelopment/0.0.1-node-version.jpg";

export default function AristosView() {

    return (
        <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        Aristos CMS
                    </H>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/aristos">
                            <Holder
                                alignBlock1="flex-start">
                                <Image
                                box="2"
                                    size='lg'>
                                    {aristosPoster}
                                    {"The first draft logo for the Aristos Prject"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H margin="0 0 50px 0">
                                        Aristos CMS | Nodejs 
                                    </H>
                                    <List>
                                        {"In Alpha development stages"}
                                        {"CMS and Website builder built in Nodejs"}
                                        {"Working on support for more template types"}
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