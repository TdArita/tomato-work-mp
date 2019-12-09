// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'history',
    lists: {
      "本周一": [
        { id: 1, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }, 
        { id: 2, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }
      ],
      "本周二": [
        { id: 1, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }, 
        { id: 2, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }, 
        { id: 3, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }
      ],
      "本周三": [
        { id: 1, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }, 
        { id: 2, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }
      ],
      "本周四": [
        { id: 1, time: "14:00", text: "我准备去干点什么，我准备去干点什么" },
        { id: 2, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }
      ],
      "本周五": [
        { id: 1, time: "14:00", text: "我准备去干点什么，我准备去干点什么" },
        { id: 2, time: "14:00", text: "我准备去干点什么，我准备去干点什么" }
      ]
    }
  },

  toggleTabs: function(e){
    var eName = e.currentTarget.dataset.tabname
    if(e.currentTarget.dataset.tabname == this.data.activeTab){
      return
    } else {
      console.log(e.currentTarget.dataset.tabname, this.data.activeTab)
      this.setData({ activeTab: eName})
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