# 模仿Pinkoi介面的React demo

Pinkoi商品頁面：https://www.pinkoi.com/product/7QaYMPbE

> 從無到有的建立react demo，並修改原始pinkoi的響應式設計，可搭配網站主題自行延伸建立其他商品頁。

**如何開始使用**
```javascript
$ git clone https://github.com/SheepyChen/pinkoi-app
$ cd pinkoi-app
$ npm install

```

### 初始化npm

```javascript
npm init 
```

### 安装react環境

- react ：主要框架
- react-dom ：React的DOM

```javascript
npm install --save react react-dom

```

## 新增其他商品頁

請切換新增其他 product 分支

### 如需更換字型，請修改index.html引用路徑
```javascript
<link rel="stylesheet" href="引用路徑">
<link rel="stylesheet" href="./css/index.css">
```

### 使用npm-gh-pages部署到github pages

下載 npm-gh-pages
```javascript
npm install --save gh-pages
npm run deploy
```

### 目錄架構設計

### 過程遇到了什麼問題

