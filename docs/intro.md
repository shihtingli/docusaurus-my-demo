---
sidebar_position: 1
---

# Docusaurus

## Install

```console
npx @docusaurus/init@latest init [name] [template]
```

```console
npx @docusaurus/init@latest init my-demo classic
```

```console
cd my-demo
npm install
npm start
```

## Typescript Support

```console
npm install --save-dev typescript @docusaurus/module-type-aliases @types/react @types/react-router-dom @types/react-helmet @tsconfig/docusaurus
```

Then add **tsconfig.json** to your project root with the following content:

```javascript

{
  "extends": "@tsconfig/docusaurus/tsconfig.json",
  "include": ["src/"]
}

```
