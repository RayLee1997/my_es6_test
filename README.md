# Typescript node 入门教程001

## ES2015教程

https://es6.ruanyifeng.com/

## npm 初始化
```
npm init -y && npm install typescript ts-node --save-dev
```

## 编译运行

- 直接通过 npx ts-node es6_001.ts 不会输出代码日志；
- 需要先通过 npx tsc es6_001.ts 编译ts脚本为js文件；
- 再运行node js脚本才能输出 console.log

```

npx tsc es6_001.ts --outDir dist && node dist/es6_001.js

```