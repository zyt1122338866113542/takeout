// pages/components/address/add/add.js
//创建数据库对象
// const db = wx.cloud.database();
var WxNotificationCenter = require('../../../utils/WxNotificationCenter.js');
var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    realname:'',//用户的名字
    gender:1,//用户的性别 
    mobile:"",  //电话
    area:'',  //地址
    detail:'', //详细地址
    address:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    that = this;
    // 注册通知(getAddres报错)
    WxNotificationCenter.addNotification("poiSelectedNotification", that.getAddress, that);
    // 属于编辑状态
    if (options.objectId) {
      that.loadAddress(options.objectId);
      that.setData({
        isEdit: true
      });
      wx.setNavigationBarTitle({
        title: '编辑地址'
      })
    } else {
      wx.setNavigationBarTitle({
        title: '添加地址'
      })
    }
  },
  add(e){
    var form = e.detail.value;
    console.log(form)
    if (form.realname == '') {
      wx.showModal({
        title: '请填写收件人姓名',
        showCancel: false
      });
      return;
    }
    if (!(/^1[34578]\d{9}$/.test(form.mobile))) {
      wx.showModal({
        title: '请填写正确手机号码',
        showCancel: false
      });
      return;
    }

    if (form.detail == '') {
      wx.showModal({
        title: '请填写详细地址',
        showCancel: false
      });
      return;
    }
  },
  selectAddress: function () {
    console.log('tapped')
    // 跳转选择poi
    wx.navigateTo({
      // url: '../search/search'
    });
  },
  onchangename(e){
    this.setData({
      realname: e.detail.value
    })
  },
  onchangemobile(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  onchangearea(e){
    this.setData({
      area: e.detail.value
    })
  },
  onchangedetail(e) {
    this.setData({
      detail: e.detail.value
    })
  },
  radioChange(e){
    this.setData({
      gender: e.detail.value
    })
  },
  adduser(e){
    var realname = e.target.dataset.realname;
    var gender = e.target.dataset.gender;
    var mobile = e.target.dataset.mobile;
    var area = e.target.dataset.area;
    var detail = e.target.dataset.detail;
    if(realname!==""&&gender!==""&&mobile!==""&&area!==""&&detail!==""){
      var address = [];
      address.push(realname, gender, mobile, detail, area)
      this.setData({
        realname, gender, mobile, area, detail, address
      })
      var model = JSON.stringify(address);
      wx.navigateTo({
        url: '../list/list?realname=' + realname + '&gender=' +gender+ '&mobile=' +mobile+ '&area=' +area+ '&detail=' +detail+ '&address=' +model,
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