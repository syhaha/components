// components/my-style/my-style.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  //若想外部组件对自定义组件造成样式影响
  options: {
    styleIsolation:"apply-shared"  //styleIsolation:"shared"自定义组件与外部组件相互影响
  }
})
