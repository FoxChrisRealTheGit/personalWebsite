import React from 'react';
import { Link } from 'react-router-dom';
import {
    Wrapper,
    Holder,
    P,
    HR,
} from 'react-stylux';

export default function About() {
    return (
        <Wrapper>
            <HR height="300px" />
            <Holder
                direction='column'>

                <P
                    padding='10%'>
                    I am an aspiring web developer working on my degree in graphic design. I have my ACE in Illustrator and a working familiarity with React, JavaScript, HTML, and CSS. Please see my NPM page for <a href="https://www.npmjs.com/~foxchrisrealthe" target="_blank" rel="noopener noreferrer">working packages</a>, and my <a href="https://github.com/FoxChrisRealTheGit" target="_blank" rel="noopener noreferrer">github</a>
                </P>
                <Link to="">
                </Link>
            </Holder>

            <HR height="300px" />
        </Wrapper>
    )
}