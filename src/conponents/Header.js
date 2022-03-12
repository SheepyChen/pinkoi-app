import React, { useState } from 'react';
import NavSearch from './NavSearch'
import Nav from './Nav'
import { ReactComponent as BellIcon } from '../pic/bell-regular.svg';

function Header() {

    return (
        <header>
            <div class="header-wrap">
                <div class="header-top">
                    <div class="header-left">
                        <a class="logo" href="/"></a>
                        <div class="header-search">
                            <NavSearch />
                        </div>
                    </div>
                    <div class="header-right">
                        <Nav />
                    </div>

                </div>
                <div classname="header-item">
                    <ul>
                        <li class="cate-item"></li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

export default Header