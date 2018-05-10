import React from "react"
import {Link }from "react-router-dom";

import {
    Wrapper,
    Holder,
    HR,
    H,
    P,
    A,
    List,
    Image,
} from "react-stylux"

import ataraxyclothingimg from "../../../images/portfolio/webdevelopment/AtaraxyClothingHomepage_LG.jpg";

export default function AtaraxyClothingView() {

    return (
            <Wrapper>
            <HR height="300px" />
            <Holder
                    direction="column">
                <H>
                   Ataraxy Clothing
                </H>
                <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/ataraxyclothing">
                            <Holder>
                                <Image
                                box="2"
                                    size='lg'>
                                    {ataraxyclothingimg}
                                    {"The homepage for ataraxyClothing"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H margin="0 0 50px 0">
                                        Ataraxy Clothing | React | react-styux | Stripe
                                    </H>
                                    <List>
                                        {"Won most technical award during personal project presentations"}
                                        {"Designed a component library (react-stylux) to build this project"}
                                        {"This is a full-stack application with complete stripe integration"}
                                        <a href="https://github.com/FoxChrisRealTheGit/AtaraxyClothing" rel="noopener noreferrer" target="_blank">Ataraxy Clothing Github</a>
                                        <a href="https://ataraxyclothing.com/" rel="noopener noreferrer" target="_blank">Ataraxy Clothing website</a>
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