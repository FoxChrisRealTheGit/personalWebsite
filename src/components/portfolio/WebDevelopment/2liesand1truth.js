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

import twoLiesMark1 from "../../../images/portfolio/webdevelopment/twoLiesMarketing.jpg";

export default function twoliesandonetruthView() {

    return (
            <Wrapper>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H>
                        2 Lies and 1 Truth Podcast
                </H>
                <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                    <Holder>
                        <Image
                        box="2"
                            size='lg'>
                            {twoLiesMark1}
                            {"The homepage for 2 lies and 1 truth"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                2 Lies and 1 Truth | Wordpress
                            </H>
                            <List>
                            {"Not active"}
                                {"Worked on from 2017 - 2017"}
                                {"Set up a basic Wordpress website to work with RSS feed for podcast"}
                                {"Would update homepage for new episodes"}
                                {"Learned alot about marketing and the importance of quality"}

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