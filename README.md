<p align="center">
  <a href="https://at.aotu.io/">
    <img width="200" src="https://github.com/VV-UI/VV-UI/blob/master/examples/assets/img/logo.png">
  </a>
</p>

# VV UI
`VV-UI` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站中后台产品

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)

## 安装

- 推荐使用 npm 安装

```bash
npm install vv-ui
```

- 也可以使用 `<script>` 全局引用

```html
<script type="text/javascript" src="vv.min.js"></script>
```

## 使用

```js
import VVUI from 'VVUI' // 引入组件库
import 'VVUI/lib/index.css' // 引入样式库

Vue.use(VVUI)
```

## 贡献

如果你在使用 `VV-UI` 时遇到问题，或者有好的建议，欢迎给我们提 [Issue](https://github.com/VV-UI/VV-UI/issues) 或 [Pull Request](https://github.com/VV-UI/VV-UI/pulls)


## Pull requests 规范

**Working on your first Pull Request?** You can learn how from this *free* series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

All pull requests are welcome. Thanks for taking the time to contribute.

- Create an issue about the features, such as new components.
- Fork the repo to your own account.
- Clone your fork.
- Create a new branch base on `dev`, if you want to add new component, the branch name should be formatted as `component-[Component Name]`. (e.g. `component-steps`) And the commit info should be formatted as `[Component Name]: Info about commit`.
- Make sure that running `npm run prepublish` outputs the correct files.
- Rebase before creating a PR to keep commit history clear. (Merge request to branch `dev`)
- Provide some description about your PR.
