import React, { useState } from 'react';
import NavSearch from './NavSearch'
import Nav from './Nav'


function Header() {

    return (
        <header>
            <div className="header-wrap">

                <div className="header-top">
                    <div className="header-left">
                        <a className="logo" href="/"></a>
                        <div className="header-search">
                            <NavSearch />
                        </div>
                    </div>
                    <div className="header-right">
                        <Nav />
                    </div>

                </div>
                <div classname="header-item">
                    <ul>
                        <li className="cate-item"></li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

export default Header