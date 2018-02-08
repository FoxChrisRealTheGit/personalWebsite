import React, { Component } from 'react';
import {
    Container1,
    NavBar1,
    Holder5,
    H42,
} from 'react-stylux';


export default class Footer extends Component {
    render() {
        return (
            <Container1>
                <Holder5>
                    <H42>
                        Connect With Me!
                    </H42>
                    <NavBar1
                        navbarWidth='60%' >
                        <a href="https://facebook.com"></a>
                        <a href="https://twitter.com"></a>
                        <a href="https://instagram.com"></a>
                    </NavBar1>
                </Holder5>
            </Container1>
        )
    }
}