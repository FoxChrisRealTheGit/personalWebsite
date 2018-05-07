import React from "react"
import { Link } from "react-router-dom";

import {
    Container,
    Holder,
    HR,
    H31,
    P1,
    A,
    Image,
    H42,
    BulletList1,
} from "react-stylux"

import aristosPoster from "../../../images/placeholders/aristosPlaceholder.jpg";

export default function AristosView() {

    return (
        <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        Aristos Project
                    </H31>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/aristos">
                            <Holder
                                alignBlock1="flex-start">
                                <Image
                                    type="square"
                                    size='lg'>
                                    {aristosPoster}
                                    {"The first draft logo for the Aristos Prject"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H42 margin="0 0 50px 0">
                                        Aristos Project | Golang | AWS
                                    </H42>
                                    <BulletList1>
                                        {"In initial development stages"}
                                        {"CMS and Website builder built in Golang"}
                                        {"All pages set up with HTTPS through Let's Encrypt"}
                                        {"Multiple encoders and decoders built for many file types"}
                                        {"Working on full AWS integration"}
                                    </BulletList1>
                                </Holder>
                            </Holder>
                        </A>
                        <HR />
                    </Holder>
                    <Link to="/portfolio/webdevelopment"><P1>Back to Web Development...</P1></Link>
                </Holder>
                <HR height="300px" />
            </Container>
    )
}