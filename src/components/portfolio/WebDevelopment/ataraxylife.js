import React from "react"
import { Link } from "react-router-dom";

import {
    Wrapper,
    Holder,
    HR,
    P,
    A,
    Image,
    H,
    List,
} from "react-stylux"

import ataraxyLife from "../../../images/portfolio/webdevelopment/AtaraxyLifeHomepage.jpg";

export default function AtaraxyLifeView() {

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
                    <A width="85%" to="/portfolio/webdevelopment/ataraxylife">
                        <Holder>
                            <Image
                            box="2"
                                size='lg'>
                                {ataraxyLife}
                                {"The homepage for Ataraxy Life"}
                            </Image>
                            <Holder
                                direction="column">
                                <H margin="0 0 50px 0">
                                    Ataraxy Life | Shopify
                                    </H>
                                <List>
                                    {"Not active"}
                                    {"Worked on 2016 - 2017"}
                                    {"Evolution from Foxxy Hats"}
                                    {"Learned about drop shipping and marketing"}
                                    {"Learned about hosting and CMS' in more detail"}

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