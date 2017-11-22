# LoadingBar 加载进度条
----
全局创建了一个用于显示页面加载、异步请求的加载进度条。
因为可复用性的关系，```LoadingBar``` 只会全局创建一个实例，而且在 ```Vue.prototype``` 中添加了全局对象 ```$Loading```，可以直接通过 ```this.$Loading``` 操作实例
### 基础用法
通过调用 $Loading 提供的三种方法来控制全局的加载进度条 ```start()```、```end()```、```error()```

<script>
  export default{
    mounted () {
      
    },
    methods: {
      start () {
        this.$loading.start()
      },
      end () {
        this.$loading.end()
      },
      error () {
        this.$loading.error()
      },
      setSpeed () {
        this.$loading.config({
          speed: 10
        })
        this.$loading.start()
      },
      setSpinner () {
        this.$loading.config({
          easing: 'ease'
        })
        this.$loading.start()
      },
      setPercentNum () {
        this.$loading.config({
          percentNum: 0.1
        })
        this.$loading.start()
      },
      setShowSpinner () {
        this.$loading.config({
          showSpinner: false
        })
        this.$loading.start()
      }
    }
  }
</script>
<div class="demo-block">
   <w-button @click="start">开始</w-button>
   <w-button @click="end">结束</w-button>
   <w-button @click="error">错误</w-button>
</div>

::: demo

```html
<w-button @click="start">开始</w-button>
<w-button @click="end">结束</w-button>
<w-button @click="error">错误</w-button>
<script>
  export default{
    methods: {
      start () {
        this.$loading.start()
      },
      end () {
        this.$loading.end()
      },
      error () {
        this.$loading.error()
      }
    }
  }
</script>
```

:::

### 常规配置
提供 LoadingBar 的全局配置，使用方法如下：

<div class="demo-block">
   <w-button @click="setSpeed">设置speed速度</w-button>
   <w-button @click="setSpinner">设置spinner动画效果</w-button>
   <w-button @click="setPercentNum">设置percentNum每次加载的比例</w-button>
   <w-button @click="setShowSpinner">设置是否显示spinner</w-button>
</div>

::: demo

```html
<w-button @click="setSpeed">设置speed速度</w-button>
<w-button @click="setSpinner">设置spinner动画效果</w-button>
<w-button @click="setPercentNum">设置percentNum每次加载的比例</w-button>
<w-button @click="setShowSpinner">设置是否显示spinner</w-button>
<script>
  export default{
    methods: {
     setSpeed () {
       this.$loading.config({
         speed: 10
       })
       this.$loading.start()
     },
     setSpinner () {
       this.$loading.config({
         easing: 'ease'
       })
       this.$loading.start()
     },
     setPercentNum () {
       this.$loading.config({
         percentNum: 0.1
       })
       this.$loading.start()
     },
     setShowSpinner () {
       this.$loading.config({
         showSpinner: false
       })
       this.$loading.start()
     }
    }
  }
</script>

```

:::

### LoadingBar config参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| speed | 加载速度 | Number | 0-100 | 5 |
| easing | spinner加载动画 | String | linear, ease, cubic-bezier... | 贝萨尔曲线值|
| percentNum | 每次前进的百分比 | Float | 0-1 | Math.random() |
| showSpinner | 是否显示spinner | Boolean | true, false | 是否显示spinner |

