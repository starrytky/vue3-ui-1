# 总结

## Vue安装

### 安装

```bash
// 安装脚手架
yarn global add create-vite-app@版本号
或 npm i -g create-vite-app@版本号
// 创建项目目录
creat-vite-app newprojectName
或 cva newprojectName
// 启动项目
yarn dev
或 npm run dev
```

### vue2和vue3的区别

1. vue3的`Template`支持多个根标签，vue2不支持
2. vue3有createApp(), 而vue2的是new Vue()
3. createApp(组件),new Vue({template, render})    一个传组件、一个传对象

### 修改main.js为main.ts

```json   //添加tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": false,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```

## vue-router

### vue-router安装

```bash
npm info vue-router versions // 查版本号
npm i vue-router@版本号
```

### 使用

```typescript
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/', component: Starrytky
        },
        {
            path: '/', component: Starrytky2
        }
    ]
})

const app = createApp(App);
app.use(router);
app.mount("#app")
```
