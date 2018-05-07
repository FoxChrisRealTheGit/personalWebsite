import React from "react"
import {Link }from "react-router-dom";

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

import twoLiesMark1 from "../../../images/portfolio/webdevelopment/twoLiesMarketing.jpg";

export default function twoliesandonetruthView() {

    return (
            <Container>
                <HR height="300px" />
                <Holder
                    direction="column">
                    <H31>
                        2 Lies and 1 Truth Podcast
                </H31>
                <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/twoliesandonetruth">
                    <Holder>
                        <Image
                            type="square"
                            size='lg'>
                            {twoLiesMark1}
                            {"The homepage for 2 lies and 1 truth"}
                        </Image>
                        <Holder
                            direction="column">
                            <H42 margin="0 0 50px 0">
                                2 Lies and 1 Truth | Wordpress
                            </H42>
                            <BulletList1>
                            {"Not active"}
                                {"Worked on from 2017 - 2017"}
                                {"Set up a basic Wordpress website to work with RSS feed for podcast"}
                                {"Would update homepage for new episodes"}
                                {"Learned alot about marketing and the importance of quality"}

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