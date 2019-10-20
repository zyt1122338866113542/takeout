// pages/components/address/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = [];
    var addressList = [];
    array = JSON.parse(options.address);
    addressList.push({ "realname": array[0] }, { "gender": array[1] }, { "mobile": array[2] }, { "area": array[3] }, { "detail": array[4] })
    this.setData({
      addressList
    });
    // console.log(this.data.addressList)
    if (options.isSwitchAddress) {
      this.setData({
        isSwitchAddress: true
      });
    }
    this.setData({
      address: JSON.parse(options.address)
    })
    // console.log(this.data.address)
  },
  onShow: function () {
    this.getAddress();
  },
  add: function () {
    wx.navigateTo({
      url: '../add/add'
    });
  },
  edit: function (e) {
    var index = e.currentTarget.dataset.index;
    var objectId = this.data.addressList[index].id;
    wx.navigateTo({
      url: '../add/add?objectId=' + objectId
    })
  },
  jumporderchecked(){
    var model = JSON.stringify(this.data.address);
    wx.navigateTo({
      url: '../../order/checked/checked?realname=' + this.data.address[0] + '&gender=' + this.data.address[1] + '&mobile=' + this.data.address[2] + '&area=' + this.data.address[3] + '&detail=' + this.data.address[4] + '&address=' + model,
    })
    // console.log(this.data.address)
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