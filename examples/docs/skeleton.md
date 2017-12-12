# skeleton 骨架屏
----
## 骨架屏样式组件
当文本没有加载出来时，显示文本的默认占位图。

<div class="demo-block">
  <w-row>
    <w-col :span="4">
      <w-skeleton></w-skeleton>
    </w-col>
    <w-col :span="4" class="ml-10">
      <w-row>
        <w-col :span="12">
          <w-skeleton :proportion="0.2"></w-skeleton>
        </w-col>
        <w-col :span="24" class="m-10">
          <w-skeleton :proportion="0.1"></w-skeleton>
        </w-col>
        <w-col :span="24" class="m-10">
          <w-skeleton :proportion="0.1"></w-skeleton>
        </w-col>                  
      </w-col>  
    </w-col>
  </w-row>
</div>

::: demo
```html
<w-row>
    <w-col :span="4">
      <w-skeleton></w-skeleton>
    </w-col>
    <w-col :span="4" class="ml-10">
      <w-row>
        <w-col :span="12">
          <w-skeleton :proportion="0.2"></w-skeleton>
        </w-col>
        <w-col :span="24" class="m-10">
          <w-skeleton :proportion="0.1"></w-skeleton>
        </w-col>
        <w-col :span="24" class="m-10">
          <w-skeleton :proportion="0.1"></w-skeleton>
        </w-col>                  
      </w-col>  
    </w-col>
  </w-row>
```
:::

## 关于骨架屏介绍
骨架屏的作用主要是在网络请求较慢时，提供基础占位，当数据加载完成，恢复数据展示。这样给用户一种很自然的过渡，不会造成页面长时间白屏或者闪烁等情况。
常见的骨架屏实现方案有```ssr```服务端渲染和```prerender```两种解决方案。这里的组件只是一个很简单的样式而已，最核心的还是他的思想，下面我会用代码介绍两种骨架屏的思想和实现方式：

#### prerender 渲染骨架屏
本组件库骨架屏的实现也是基于预渲染去实现的，有关于预渲染更详细的介绍请参考这篇文章：<a href="https://zhuanlan.zhihu.com/p/29148760">处理 Vue 单页面 Meta SEO的另一种思路</a>
下面我们主要介绍其实现步骤，首先我们也是需要配置webpack-plugin，不过已经有实现好的[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)可用
```js
var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  // ...
  plugins: [
    new PrerenderSpaPlugin(
      // Absolute path to compiled SPA
      path.join(__dirname, '../dist'),
      // List of routes to prerender
      ['/']
    )
  ]
}
```

然后写好我们的骨架屏文件```main.skeleton.vue```
```html
<template>
  <div class="main-skeleton">
    <w-skeleton height="80px"></w-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <w-skeleton height="300px"></w-skeleton>
        </div>
        <w-skeleton height="45px"></w-skeleton>
      </div>
      <div class="skeleton-bottom">
        <w-skeleton height="45px"></w-skeleton>
      </div>
    </div>
  </div>
</template>
```

当初次进入页面的时候我们需要显示骨架屏，数据加载完，我们需要移除骨架屏：

```html
<template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else>
      <div class="body"></div>
    </div>
  </div>
</template>
```

```js
  import mainSkeleton from './main.skeleton.vue'

  export default {
    name: 'app',
    data () {
      return {
        init: false
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      mainSkeleton
    }
  }
```

#### ssr 渲染骨架屏
下面我用我灵魂画师的笔法，画出了大致的过程：
<img src="../assets/img/skeleton.png" width="100%">

首先创建我们的```skeleton.entry.js```

```js
import Vue from 'vue';
import Skeleton from './skeleton.vue';

export default new Vue({
    components: {
        Skeleton
    },
    template: '<skeleton />'
});
```
当然这里的```skeleton.vue```使我们事先写好的骨架屏组件，看起来可能是这样：
```html
<template>
    <div class="skeleton-wrapper">
        <header class="skeleton-header"></header>
        <div class="skeleton-block"></div>
    </div>
</template>
```

然后我们需要的是能把```skeleton.entry.js```编译成服务端渲染可用的```bundle```文件，所以我们需要有个编译骨架屏的```webpack.ssr.conf.js```文件:
```js
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const nodeExternals = require('webpack-node-externals');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = merge(baseWebpackConfig, {
    target: 'node',
    devtool: false,
    entry: {
        app: resolve('./src/skeleton.entry.js')
    },
    output: Object.assign({}, baseWebpackConfig.output, {
        libraryTarget: 'commonjs2'
    }),
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    plugins: []
});
```

接下来最终的步骤，就是编写我们的webpackPlugin，我们期望我们的webpackPlugin可以帮我们把入口文件编译成bundle，然后再通过```vue-server-renderer```来render bundle，最终产出响应的html片段和css片段，这里贴出核心代码：
```js
    // webpack start to work
    var serverCompiler = webpack(serverWebpackConfig);
    var mfs = new MFS();
    // output to mfs
    serverCompiler.outputFileSystem = mfs;
    serverCompiler.watch({}, function (err, stats) {

        if (err) {
            reject(err);
            return;
        }

        stats = stats.toJson();
        stats.errors.forEach(function (err) {
            console.error(err);
        });
        stats.warnings.forEach(function (err) {
            console.warn(err);
        });

        var bundle = mfs.readFileSync(outputPath, 'utf-8');
        var skeletonCss = mfs.readFileSync(outputCssPath, 'utf-8');
        // create renderer with bundle
        var renderer = createBundleRenderer(bundle);
        // use vue ssr to render skeleton
        renderer.renderToString({}, function (err, skeletonHtml) {
            if (err) {
                reject(err);
            }
            else {
                resolve({skeletonHtml: skeletonHtml, skeletonCss: skeletonCss});
            }
        });
    });
```

最后一步，我们对产出的html片段, css片段进行组装，产出最终的html，所以我们需要监听webpack 的编译挂载之前的事件：
```js
 compiler.plugin('compilation', function (compilation) {

    // add listener for html-webpack-plugin
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
        ssr(webpackConfig).then(function (ref) {
            var skeletonHtml = ref.skeletonHtml;
            var skeletonCss = ref.skeletonCss;

            // insert inlined styles into html
            var headTagEndPos = htmlPluginData.html.lastIndexOf('</head>');
            htmlPluginData.html = insertAt(htmlPluginData.html, ("<style>" + skeletonCss + "</style>"), headTagEndPos);

            // replace mounted point with ssr result in html
            var appPos = htmlPluginData.html.lastIndexOf(insertAfter) + insertAfter.length;
            htmlPluginData.html = insertAt(htmlPluginData.html, skeletonHtml, appPos);
            callback(null, htmlPluginData);
        });
    });
 });
```


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 占位长度 | String | — | 100% |
| height | 占位宽度 | String | - | - |
| proportion | 高、宽比 | Number | — | 1 |
| bgColor | 背景色 | String | — | '#b4bccc' |

