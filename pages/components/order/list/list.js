// pages/components/order/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrayorder:[], //保存从order/checked获取的订单详情
    loadingTip: '上拉加载更多',
    page_index: 0,
    status:[
      { status:0 },
      { status: 1 },
      { status: 2 },
      { status: -1 },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrayorder = [];
    arrayorder = JSON.parse(options.cartToArray);
    this.setData({
      arrayorder
    });
    // console.log(arrayorder)
  },
  showDetail: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    // 传递订单objectId
    wx.navigateTo({
      // url: '../checked/checked',
    })
  },
  payment(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
    wx.redirectTo({
      url: '../../../index/index',
    })
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