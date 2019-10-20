var app = getApp()
var that;
// 最大行数
var max_row_height = 5;
// 行高
var cart_offset = 90;
// 底部栏偏移量
var food_row_height = 49;
Page({
	data: {
		hidden:false,
    maskVisual: 'hidden',
    animation:'',
    num:1,
    amount: 0,
    total:0,
    sum:[],
    othersum:[],
		curNav:1,
		curIndex:0,
		cart:[],
    cartData: {},
    cartToArray:[],
    cartObjects:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'热销菜品'
			},
			{
				id:2,
				name:'素菜系列'
			},
			{
				id:3,
				name:'凉拌系列'
			},
			{
				id:4,
				name:'套餐'
			},
      {
        id: 5,
        name: '干锅系列'
      },
      

		],
		dishesList:[
			[
				{
					name:"红烧肉",
					price:38,
					num:1,
					id:1
				},
				{
					name:"宫保鸡丁",
					price:58,
					num:1,
					id:2
				},
				{
					name:"水煮鱼",
					price:88,
					num:1,
					id:3
				},
        {
          name: "红烧肉1",
          price: 38,
          num: 1,
          id: 4
        },
        {
          name: "宫保鸡丁2",
          price: 58,
          num: 1,
          id: 5
        },
        {
          name: "水煮鱼3",
          price: 88,
          num: 1,
          id: 6
        },
        {
          name: "红烧3",
          price: 38,
          num: 1,
          id: 7
        }
			],
		
		],
		dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},2000)
	},
  //选中左侧的tab标签
	selectNav (event) {
		let id = event.target.dataset.id,
	  index = parseInt(event.target.dataset.index);
		self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择按钮
  choosed(e){
    var lid = e.currentTarget.dataset.btnId;
    var name = e.target.dataset.btnName;
    var price = e.currentTarget.dataset.btnPrice;
    var num = e.currentTarget.dataset.btnNum;
    var flag = true;
    var cart = this.data.cart;
    var othersum = this.data.othersum;
    var cartToArray = this.data.cartToArray;   //保存此次选中的商品名字，价格，数量
    // cartToArray.push({ 'name': name }, { 'num': num },{'price':price})
    cartToArray.push({'name':name,'num':num,'price':price,'lid':lid})
    // console.log(cartToArray)
    // 记录本次点击的lid
    if (cart.length > 0) {
      cart.forEach(function (item, index) {
        if (item == lid) {
          cart.splice(index, 1);
          flag = false;
        }
      })
    }
    // 放到cart数组中
    if (flag) cart.push(lid);
    var sum = this.data.sum;
    // 记录本次点击的价格
    if(sum.length>0){
      sum.forEach(function (item, index) {
        if(item == price){
          sum.splice(index, 1);
          flag = false;
        }
      })
    }
    // 添加道数组sum中
    if (flag) {
      sum.push(price);
      var total = 0;
      for (var i=0;i<sum.length;i++){
        total +=sum[i];
        othersum.push(total);
      }
    }
    this.setData({
      cartTotal: cart.length,
      total:total,
      othersum, cart, cartToArray
    })
    this.setStatus(lid)
  },
  // 修改按钮状态
	setStatus (dishId) {
    var othersum = this.data.othersum;
		var dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
          othersum.pop()
        }
			})
		}
		this.setData({
			dishesList:this.data.dishesList,
		})
	},
  // 结算
  checkout: function () {
    wx.navigateTo({
      url: '../order/checked/checked?name=' + this.data.cartToArray.name + '&price=' + this.data.cartToArray.price + '&num=' + this.data.cartToArray.num + '&lid=' + this.data.cartToArray.lid +  '&cartToArray=' + JSON.stringify(this.data.cartToArray)
    });
  },
  jumpcart(){
    console.log(1)
    wx.navigateTo({
      url: '../../components/cart/cart'
    });
  },

  //购物车
  cascadeToggle(){
    wx.navigateTo({
      url: '../../components/me/me'
    });
   
  },
	onLoad () {
		this.loadingChange()
	}
})