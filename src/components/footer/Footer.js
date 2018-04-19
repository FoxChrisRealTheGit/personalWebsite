import React, { Component } from 'react';
import {
    Container,
    NavBar1,
    Holder,
    H42,
    P2,
} from 'react-stylux';


export default class Footer extends Component {
    render() {
        return (
            <Container>
                <Holder
                    direction="column">
                    <H42>
                        Connect With Me!
                    </H42>
                    <NavBar1
                        navbarWidth='60%' >
                        <a href="https://facebook.com/FoxDesignAgency/" target="_blank" rel="noopener noreferrer"></a>
                        <a href="https://twitter.com/foxchrisrealthe" target="_blank" rel="noopener noreferrer"></a>
                        <a href="https://github.com/FoxChrisRealTheGit" target="_blank" rel="noopener noreferrer"></a>
                        <a href="https://linkedin.com/in/foxchrisrealthe"target="_blank" rel="noopener noreferrer"></a>
                    </NavBar1>
                    <P2>Copyright &copy; 2018 - All Rights Reserved - <a href="https://FoxDesignAgency.com" target="_blank" rel="noopener noreferrer">Fox Design Agency</a></P2>
                </Holder>
            </Container>
        )
    }
}