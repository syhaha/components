// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0
  },
  handleIncrement() {
    this.setData({
      count:this.data.count+1
    })
  },
  tabControlClick(event) {
    console.log(event)
  },
  handleIncrementCpn() {
    // 最终目的：修改my-sel中的countner
    // 1.获取组件对象
    const my_sel = this.selectComponent('#sel-id')
    // 2.通过setData修改组件中的数据
    // my_sel.setData({
    //   counter: my_sel.data.counter+1
    // })
    my_sel.incrementCounter(10)
  }
})