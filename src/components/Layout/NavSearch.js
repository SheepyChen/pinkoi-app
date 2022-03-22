import React from 'react'
function NavSearch() {
    return (
        <form method="get" action="/search">
            <input className="search-text" type="text" name="q" placeholder="搜尋好設計、體驗活動" />
            <span className="voice-icon"><i class="fa-solid fa-microphone"></i></span>
            <button className="submit">搜尋</button>
            <div className="trend">
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