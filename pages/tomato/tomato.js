// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 1500,
    transTime: "",
    text: "暂停",
    giveUpconfirmVisible: false,
    finishConfirmVisible: false,
    giveUpReason: ""
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
    this.load()
  },
  load(){
    this.transformTime()
    this.timePass = setInterval(() => {
      if (this.data.time === 0) {
        this.setData({finishConfirmVisible: true})
        return this.clearTimePass()
      }
      this.data.time -= 1
      this.transformTime()
      this.setData(this.data)
    }, 1000)
  },
  clearTimePass() {
    clearInterval(this.timePass)
  },
  transformTime() {
    var time = this.data.time
    var result = ""
    var minutes = ~~(time / 60)
    var seconds = ~~(time % 60)
    if(seconds < 10){
      result = result + minutes + ":0" + seconds
    } else {
      result = result + minutes + ":" + seconds
    }
    this.data.transTime = result
    this.setData(this.data)
  },
  toggleTimePass(){
    if(this.data.text === '暂停'){
      this.clearTimePass()
      this.setData({ text: "开始" })
    } else if (this.data.text === '开始'){
      this.load()
      this.setData({ text: "暂停" })
    }
  },
  toggleConfirm: function(){
    this.clearTimePass()
    if (this.data.text === '暂停') {
      this.clearTimePass()
      this.setData({ text: "开始" })
    }
    this.setData({giveUpconfirmVisible: true})
  },
  confirm: function (e) {
    console.log(e.detail)
    if (e.detail) {
      this.data.giveUpReason = e.detail
      this.setData(this.data)
      console.log(this.data.giveUpReason)
    }
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  cancel: function () {
    this.setData({giveUpconfirmVisible: false })
  },
  oneGroupMore: function () {
    this.setData({time: 1500})
    this.clearTimePass()
    this.load()
  },
  thingsFinish: function(e){
    let doneThings = e.detail
    this.setData({finishConfirmVisible: false})
  },
  cancelFinish: function(e){
    this.setData({finishConfirmVisible: false})
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