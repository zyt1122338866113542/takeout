// pages/components/order/checked/checked.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   address:[],    //保存从add页面中获取的地址
   cartToArray:[],  //保存从dishes页面中获取的订单信息：名字，价格，数量
   personCountArray:[], //用户人数
   personCountIndex:2,
   remark:"",
   arrayprice:[],
   total:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrayaddress = [];
    var arraycart = [];
    var total = 0;
    // arrayaddress = JSON.parse(options.address);
    arraycart = JSON.parse(options.cartToArray);
    console.log(arraycart)
    this.setData({
      cartToArray: arraycart,
      arrayprice
      // address: arrayaddress
    });
    if(this.data.cartToArray.length>0){
      var arrayprice = [];
      var total = 0;
      this.data.cartToArray.forEach(function(item,index){
        total += item.price
      })
      console.log(total)
      this.setData({
        total
      })
    } 
  },
  selectAddress: function () {
    wx.navigateTo({
      url: '../../address/list/list?isSwitchAddress=true'
    });
  },
  // 获取评论
  getRemark: function (remark) {
    console.log(remark)
    this.setData({
      remark: remark
    });
  },
  payment(){
   console.log(this.data.cartToArray)
    wx.navigateTo({
      url: '../list/list?name=' + this.data.cartToArray.name + '&price=' + this.data.cartToArray.price + '&num=' + this.data.cartToArray.num + '&lid=' + this.data.cartToArray.lid + '&cartToArray=' + JSON.stringify(this.data.cartToArray)
    });
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