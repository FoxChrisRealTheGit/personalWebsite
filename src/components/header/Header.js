import React, { Component } from 'react';
import {
    Container1,
    Holder5,
    NavBar1,
    Brand2,
} from 'react-stylux';

import tail from '../../images/SVG/foxtail2-1.svg';
export default class Header extends Component {
    render() {
        return (
            <Container1>
                <Holder5>
                    <a href="/">
                        <Brand2
                            size='sm'>
                        {tail}
                        </Brand2>
                    </a>
                    <NavBar1
                        navbarWidth='60%' >
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/resume">Resume</a>
                        <a href="/portfolio">Portfolio</a>
                    </NavBar1>
                </Holder5>
            </Container1>
        )
    }
}