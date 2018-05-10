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

import aristosPoster from "../../../images/placeholders/aristosPlaceholder.jpg";

export default function AristosView() {

    return (
        <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        Aristos Project
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
                                        Aristos Project | Golang | AWS
                                    </H>
                                    <List>
                                        {"In initial development stages"}
                                        {"CMS and Website builder built in Golang"}
                                        {"All pages set up with HTTPS through Let's Encrypt"}
                                        {"Multiple encoders and decoders built for many file types"}
                                        {"Working on full AWS integration"}
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