import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header>
            <div class="header-wrap">
                <div class="header-top">
                    <div class="header-left">
                        <a class="logo" href="/"></a>
                        <div class="header-search">
                            <form method="get" action="/search">
                                <input class="search-text" type="text" name="q" placeholder="搜尋好設計、體驗活動" />
                                <span class="voice-icon"><i class="fa-solid fa-microphone"></i></span>
                                <button class="submit">搜尋</button>
                                <div class="trend">
                                    <a href="#">女人節</a>
                                    <a href="#">口罩</a>
                                    <a href="#">文具新品</a>
                                    <a href="#">露營</a>
                                    <a href="#">信用卡優惠</a>
                                    <a href="#">海外免運</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="header-right">
                        <div className="user icon"><i class="fa-solid fa-user"></i></div>
                        <a class="favlist icon" href=""><i class="fa-solid fa-heart"></i></a>
                        <div className="notification icon"><i class="fa-solid fa-bell"></i></div>
                        <a class="cart icon" href=""><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li class="nav-item"></li>
                        <li class="nav-item"></li>
                        <li class="nav-item"></li>
                        <li class="nav-item"></li>
                        <li class="nav-item"></li>
                        <li class="nav-item"></li>
                        <li class="nav-item"></li>
                        <li class="nav-item"></li>
                        <li class="nav-item"></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav