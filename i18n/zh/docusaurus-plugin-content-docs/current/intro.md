---
sidebar_position: 1
---

# Docusaurus 第一步!!

## 安裝

```console
npx @docusaurus/init@latest init [name] [template]
```

```console
npx @docusaurus/init@latest init my-demo classic
```

```console
cd my-demo
npm install
npm start --poll true
```

## Typescript 支持

```console
npm install --save-dev typescript @docusaurus/module-type-aliases @types/react @types/react-router-dom @types/react-helmet @tsconfig/docusaurus
```

加入 **tsconfig.json** 到你的專案根目錄，並加入以下內容:

```javascript

{
  "extends": "@tsconfig/docusaurus/tsconfig.json",
  "include": ["src/"]
}

```
