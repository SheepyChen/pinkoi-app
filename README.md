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

1.一開始著手切版過程中，會不知道該把 component 分到多小，然後在過程中慢慢觀察哪些是可以拆出來。 2.
