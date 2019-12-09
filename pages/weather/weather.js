// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currWeather: null,
    date: (new Date()).toString()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getCurrWeather: function(){
    let that = this
    wx.request({
      url: 'http://api.jirengu.com/getWeather.php?callback=getWeather', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      responseType: 'text',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var weatherObj = JSON.parse(res.data.replace(/^[^]{23}|[^]{1}$/g, ''))
        that.setData({currWeather: weatherObj.results[0]})
        console.log(weatherObj)
      }
    })
  },
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getCurrWeather()
    setInterval(() => {
      this.setData({ date: (new Date()).toString()}, 1000)
    })
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