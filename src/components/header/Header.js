import React from 'react';
import {
    Wrapper,
    Holder,
    Navbar,
    Brand,
} from 'react-stylux';

import { Link } from 'react-router-dom';

import tail from '../../images/SVG/foxtail2-1.svg';
export default function Header() {
    return (
        <Wrapper>
            <Holder
                direction="column"
                smflexDir="row">
                <Link to="/">
                    <Brand

                        size='sm'>
                        {tail}
                    </Brand>
                </Link>
                <Navbar
                    box="2"
                    totalWidth='60%'
                    count="3" >
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </Navbar>
            </Holder>
        </Wrapper>
    )
}
