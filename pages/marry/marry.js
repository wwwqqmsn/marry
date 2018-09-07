// pages/ceshi/ceshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageBackgroundColor: '#5cb85c',
    right: 150,
    bottom: 300,
  },
  buttonMove: function () {

    // 设置背景颜色数据
    this.setData({
      right: Math.floor(Math.random() * (750 - 50 + 1) + 50),
      bottom: Math.floor(Math.random() * (800 - 450 + 1) + 450)
    });
  },
  buttonOk: function () {

    // 设置背景颜色数据
    wx.showToast({
      title: '我会爱你一辈子！',
      
      duration: 20000
    })
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