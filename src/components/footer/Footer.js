import React from 'react';
import {
    Wrapper,
    Navbar,
    Holder,
    H,
    P,
} from 'react-stylux';


export default function Footer() {
    return (
        <Wrapper>
            <Holder
                direction="column">
                <H>
                    Connect With Me!
                    </H>
                <Navbar
                    navbarWidth='60%' >
                    <a href="https://facebook.com/FoxDesignAgency/" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://twitter.com/foxchrisrealthe" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/FoxChrisRealTheGit" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://linkedin.com/in/foxchrisrealthe" target="_blank" rel="noopener noreferrer"></a>
                </Navbar>
                <P box="2">Copyright &copy; 2018 - All Rights Reserved FoxChrisRealThe- Website Design by: <a href="https://FoxDesignAgency.com" target="_blank" rel="noopener noreferrer">Fox Design Agency</a></P>
            </Holder>
        </Wrapper>
    )
}
