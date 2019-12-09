// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      {id: 1, text: "第一个任务", completed: false},
      {id: 2, text: "第二个任务", completed: false},
      {id: 3, text: "第三个任务", completed: true},
      {id: 4, text: "第四个任务", completed: false},
      {id: 5, text: "第五个任务", completed: true},
      {id: 6, text: "第六个任务", completed: false},
      {id: 7, text: "第七个任务", completed: true},
      {id: 8, text: "第八个任务", completed: false}
    ],
    buttonText: '创建任务',
    confirmVisible: false
  },

  // startClock: function(){
  //   wx.redirectTo({
  //     url: '/pages/tomato/tomato',
  //   })
  // },

  confirm: function(e){
    console.log(e.detail)
    if(e.detail){
      this.data.lists.unshift({id:this.data.lists.length + 1, text: e.detail, completed: false})
      this.setData({lists: this.data.lists})
      console.log(this.data.lists)
    }
    this.setData({confirmVisible: false})
  },

  showConfirm: function(e){
    this.setData({confirmVisible: true})
  },

  cancel: function() {
    this.setData({ confirmVisible: false })
  },

  completeIt: function(e){
    let idx = e.currentTarget.dataset.index
    if (this.data.lists[idx].completed === false){
      this.data.lists[idx].completed = true
      this.setData(this.data)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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