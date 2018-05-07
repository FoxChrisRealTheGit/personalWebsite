import React from 'react';
import {
    Container,
    Holder,
    Navbar1,
    Brand2,
} from 'react-stylux';

import { Link } from 'react-router-dom';

import tail from '../../images/SVG/foxtail2-1.svg';
export default function Header() {
    return (
        <Container>
            <Holder
                direction="column"
                smflexDir="row">
                <Link to="/">
                    <Brand2
                        size='sm'>
                        {tail}
                    </Brand2>
                </Link>
                <Navbar1
                    navbarWidth='60%'
                    count="3">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </Navbar1>
            </Holder>
        </Container>
    )
}
