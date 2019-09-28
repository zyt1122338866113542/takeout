//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../images/1.png',
      '../../images/2.png',
      '../../images/3.png',
      '../../images/4.png',
      '../../images/5.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'小吃',
        url:'dishes'
      },
      {
        name:'外卖',
        url:'take',
        isSplot:true
      },
      {
        name:'甜点',
        url:'out'
      }
    ],
    imgList:[
      '../../images/index/1.png',
      '../../images/index/2.png',
      '../../images/index/3.png',
      '../../images/index/4.png',
      '../../images/index/5.png',
      '../../images/index/6.png',
      '../../images/index/7.png',
      '../../images/index/8.png',
      '../../images/index/9.png',
      '../../images/index/10.png',
      '../../images/index/11.png',
      '../../images/index/12.png',
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
