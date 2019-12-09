// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "第一条信息",
    number: 1,
    condition: 3,
    active: false,
    obj1: {
      key1: 1,
      value: 'this is obj1'
    },
    items: [{
      name: 1,
      desc: 'am one'
    },{
      name: 2,
      desc: 'am two'
    },{
      name: 3,
      desc: 'am three'
    }]
  },

  reverse(e){
    console.log(e)
    this.setData({message: this.data.message.split("").reverse().join("")})
  },
  reverseAry() {
    this.setData({items: this.data.items.reverse()})
  },
  addAry(){
    let changedItems = this.data.items
    changedItems.push({
      name: this.data.items.length + 1,
      desc: 'am' + (this.data.items.length + 1)
    })
    this.setData({ items: changedItems})
    console.log(this.data)
  },
  changeObj() {
    // this.data.obj1.key1 = 2
    // this.data.obj1.value = 'this is changed obj1'
    this.setData({'obj1.value': 'this is changed obj1'})
  },
  changeColor() {
    this.setData({active: !this.data.active})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({number: 333})
    // 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.number)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})