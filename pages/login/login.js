
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '15620967539',
    password: '123',
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  //打开登录注释 
  login: function () {
    if (this.data.phone != "梁潇") {
      wx.showModal({
        title: 'sorry',
        content: '我找的人不是你',
      })
    } else {
      
      wx.navigateTo({
        url: '../marry/marry',
      })
      
      
       
    } 
  }

  
 
})