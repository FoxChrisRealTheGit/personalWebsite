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
    BulletList1
} from "react-stylux"

import reactstyluximg from "../../../images/portfolio/webdevelopment/reactStyluxTOC_LG.jpg";

export default function reactstyluxView() {

    return (
            <Container>
            <HR height="300px" />
            <Holder
                    direction="column">
                <H31>
                    react-stylux
                </H31>
                <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/reactstylux">
                    <Holder
                        alignBlock1="flex-start">
                        <Image
                            type="square"
                            size='lg'>
                            {reactstyluximg}
                            {"The Table of Contents on Github for react-stylux"}
                        </Image>
                        <Holder
                            direction="column">
                            <H42 margin="0 0 50px 0">
                                react-stylux | React | Babel | NPM
                            </H42>
                            <BulletList1>
                                {"Still under development"}
                                {"Component library with layout mechanic"}
                                {"Uses style object to style components through props"}
                                {"This web page was built with react-stylux to test capability"}
                                <a href="https://github.com/Fox-Design-Agency/react-stylux" rel="noopener noreferrer" target="_blank">react-stylux Github</a>
                                <a href="https://www.npmjs.com/package/react-stylux" rel="noopener noreferrer" target="_blank">react-stylux NPM</a>
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