import React, { Component } from 'react';
import {
    Container1,
    NavBar1,
    Holder6,
    H42,
    P2,
} from 'react-stylux';


export default class Footer extends Component {
    render() {
        return (
            <Container1>
                <Holder6>
                    <H42>
                        Connect With Me!
                    </H42>
                    <NavBar1
                        navbarWidth='60%' >
                        <a href="https://facebook.com/FoxDesignAgency/" target="blank"></a>
                        <a href="https://twitter.com/foxchrisrealthe" target="blank"></a>
                        <a href="https://linkedin.com/in/foxchrisrealthe" target="blank"></a>
                    </NavBar1>
                    <P2>Copyright C 2018 - All Rights Reserved - <a href="">Fox Design Agency</a></P2>
                </Holder6>
            </Container1>
        )
    }
}