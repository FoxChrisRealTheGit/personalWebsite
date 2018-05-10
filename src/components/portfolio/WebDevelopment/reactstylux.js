import React from "react"
import {Link }from "react-router-dom";

import {
    Wrapper,
    Holder,
    HR,
    P,
    A,
    Image,
    H,
    List
} from "react-stylux"

import reactstyluximg from "../../../images/portfolio/webdevelopment/reactStyluxTOC_LG.jpg";

export default function reactstyluxView() {

    return (
            <Wrapper>
            <HR height="300px" />
            <Holder
                    direction="column">
                <H>
                    react-stylux
                </H>
                <Holder
                direction="column">
                <A width="85%" to="/portfolio/webdevelopment/reactstylux">
                    <Holder
                        alignBlock1="flex-start">
                        <Image
                        box="2"
                            size='lg'>
                            {reactstyluximg}
                            {"The Table of Contents on Github for react-stylux"}
                        </Image>
                        <Holder
                            direction="column">
                            <H margin="0 0 50px 0">
                                react-stylux | React | Babel | NPM
                            </H>
                            <List>
                                {"Still under development"}
                                {"Component library with layout mechanic"}
                                {"Uses style object to style components through props"}
                                {"This web page was built with react-stylux to test capability"}
                                <a href="https://github.com/Fox-Design-Agency/react-stylux" rel="noopener noreferrer" target="_blank">react-stylux Github</a>
                                <a href="https://www.npmjs.com/package/react-stylux" rel="noopener noreferrer" target="_blank">react-stylux NPM</a>
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