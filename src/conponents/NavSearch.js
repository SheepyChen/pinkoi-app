import React from 'react'
function NavSearch() {
    return (
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

    )
}
export default NavSearch