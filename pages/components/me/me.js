// pages/components/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userListInfo: [{
      icon: '../../../images/iconfont-dingdan.png',
      text: '我的订单',
      isunread: true,
      unreadNum: 2,
      id:1
    }, {
      icon: '../../../images/iconfont-card.png',
      text: '我的代金券',
      isunread: false,
      unreadNum: 2,
      id:2
    }, {
      icon: '../../../images/iconfont-icontuan.png',
      text: '我的拼团',
      isunread: true,
      unreadNum: 1,
      id:3
    }, {
      icon: '../../../images/iconfont-shouhuodizhi.png',
      text: '收货地址管理',
      id:4
    }, {
      icon: '../../../images/iconfont-kefu.png',
      text: '联系客服',
      id:5
    }, {
      icon: '../../../images/iconfont-help.png',
      text: '常见问题',
      id:6
    }],
    
  },
  getUser: function (event) {
    console.log(event);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  jump(e){
    var id = e.target.dataset.id;
    if (id == '4'){
      wx.navigateTo({
        url: '../address/list/list',
      })
    }
    if (id == '1') {
      wx.navigateTo({
        url: '../order/list/list',
      })
    }
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