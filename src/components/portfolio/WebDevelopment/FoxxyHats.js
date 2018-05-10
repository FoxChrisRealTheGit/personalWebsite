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

import FoxxyHats from "../../../images/portfolio/webdevelopment/FoxxyHats.jpg";

export default function FoxxyHatsView() {

    return (
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        Foxxy Hats
                </H>
                    <Holder
                        direction="column">
                        <A width="85%" to="/portfolio/webdevelopment/foxxyhats">
                            <Holder>
                                <Image
                                box="2"
                                    size='lg'>
                                    {FoxxyHats}
                                    {"The homepage for Foxxy Hats"}
                                </Image>
                                <Holder
                                    direction="column">
                                    <H margin="0 0 50px 0">
                                        Foxxy Hats | Wordpress | WooCommerce
                                    </H>
                                    <List>
                                        {"Not active"}
                                        {"Worked on seriously from 2015 - 2016"}
                                        {"Initially started in 2014"}
                                        {"Learned a lot about how to run a business"}
                                        {"Leanred even more about Webdesign and Ecommerce"}

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