# 模仿 Pinkoi 介面的 React demo

Pinkoi 商品頁面：https://www.pinkoi.com/product/7QaYMPbE

> 從無到有的建立 react demo，並修改原始 pinkoi 的響應式設計，可搭配網站主題自行延伸建立其他商品頁。
> Demo 頁面：https://sheepychen.github.io/pinkoi-app/

**如何開始使用**

```javascript
$ git clone https://github.com/SheepyChen/pinkoi-app
$ cd pinkoi-app
$ npm install
$ npm run start

```

## 現有功能：

1. 點擊購物車按鈕加入購物車，更改數量以及在購物車頁面中調整數量。
2. 點擊熱門商品推薦中的商品愛心可以進入愛心的收藏頁面觀看收藏的商品。
   (目前為重新整理即消失)

### 如需更換字型，請修改 index.html 引用路徑

```javascript
<link rel="stylesheet" href="引用路徑">
<link rel="stylesheet" href="./css/index.css">
```

## 新增其他商品頁

請切換新增其他 product 分支

### 使用 npm-gh-pages 部署到 github pages

下載 npm-gh-pages

```javascript
npm install --save gh-pages
npm run deploy
```

### 過程遇到了什麼問題

1. 一開始著手切版過程中，會不知道該把 component 分到多小，在過程中慢慢觀察哪些是可以拆出來。
2. GitHub Page 如果要使用 Router，必須把 BrowserRouter 換成 HashRouter。
3. 購物車功能由於必須記錄的狀態比較多，因此使用 Context 去紀錄取得的資訊。
4. 熱門推薦商品使用的是 pexels 網站提供的 API，顯示由 pexel 提供的每小時更新的照片，點擊照片的愛心可以做到收藏效果，目前還差在取消愛心的功能。
5. 由於目前商品所使用的資訊來源跟熱門推薦商品的資訊來源不同，因此商品頁的主商品目前無法加入愛心收藏。
