var app = getApp()
Page({
	data: {
		hidden:false,
    num:1,
		curNav:1,
		curIndex:0,
		cart:[],
    cartData: {},
    cartToArray:[],
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
      {
        id: 6,
        name: '炒菜'
      },
      {
        id: 7,
        name: '套餐'
      },
      {
        id: 8,
        name: '美味盖饭'
      },
      {
        id: 9,
        name: '面类'
      },
      {
        id: 10,
        name: '汤类'
      }
		],
		dishesList:[
			[
				{
					name:"红烧肉",
					price:38,
					num:2,
					id:1
				},
				{
					name:"宫保鸡丁",
					price:58,
					num:4,
					id:2
				},
				{
					name:"水煮鱼",
					price:88,
					num:8,
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
        },
        {
          name: "宫保鸡丁3",
          price: 58,
          num: 1,
          id: 8
        },
        {
          name: "水煮鱼3",
          price: 88,
          num: 1,
          id: 9
        },
        {
          name: "红烧肉1",
          price: 38,
          num: 1,
          id: 10
        },
        {
          name: "宫保鸡丁2",
          price: 58,
          num: 1,
          id: 11
        },
        {
          name: "水煮鱼3",
          price: 88,
          num: 1,
          id: 12
        }
			],
			[
				{
					name:"小炒日本豆腐",
					price:18,
					num:1,
					id:13
				},
				{
					name:"烤鱼",
					price:58,
					num:1,
					id:14
				},
        {
          name: "小炒日本豆腐",
          price: 18,
          num: 1,
          id: 15
        },
        {
          name: "烤鱼",
          price: 58,
          num: 1,
          id: 16
        },
        {
          name: "小炒日本豆腐",
          price: 18,
          num: 1,
          id: 17
        },
        {
          name: "烤鱼",
          price: 58,
          num: 1,
          id: 18
        },
        {
          name: "小炒日本豆腐",
          price: 18,
          num: 1,
          id: 19
        },
        {
          name: "烤鱼",
          price: 58,
          num: 1,
          id: 20
        }
			],
			[
				{
					name:"大拌菜",
					price:18,
					num:1,
					id:21
				},
				{
					name:"川北凉粉",
					price:8,
					num:1,
					id:22
				},
        {
          name: "水煮鱼",
          price: 88,
          num: 1,
          id: 23
        },
        {
          name: "大拌菜",
          price: 18,
          num: 1,
          id: 24
        },
        {
          name: "川北凉粉",
          price: 8,
          num: 1,
          id: 25
        },
        {
          name: "水煮鱼",
          price: 88,
          num: 1,
          id: 26
        },
        {
          name: "大拌菜",
          price: 18,
          num: 1,
          id: 27
        },
        {
          name: "川北凉粉",
          price: 8,
          num: 1,
          id: 28
        },
        {
          name: "水煮鱼",
          price: 88,
          num: 1,
          id: 29
        }
      ],
      [
        {
          name: "小炒日本豆腐",
          price: 18,
          num: 1,
          id: 30
        },
        {
          name: "烤鱼",
          price: 58,
          num: 1,
          id: 31
        },
        {
          name: "小炒日本豆腐",
          price: 18,
          num: 1,
          id: 32
        },
        {
          name: "烤鱼",
          price: 58,
          num: 1,
          id: 33
        },
        {
          name: "小炒日本豆腐",
          price: 18,
          num: 1,
          id: 34
        },
        {
          name: "烤鱼",
          price: 58,
          num: 1,
          id: 35
        },
        {
          name: "小炒日本豆腐",
          price: 18,
          num: 1,
          id: 36
        },
        {
          name: "烤鱼",
          price: 58,
          num: 1,
          id: 37
        }
      ],
      [
        {
          name: "大拌菜",
          price: 18,
          num: 1,
          id: 38
        },
        {
          name: "川北凉粉",
          price: 8,
          num: 1,
          id: 39
        },
        {
          name: "大拌菜",
          price: 18,
          num: 1,
          id: 40
        },
        {
          name: "川北凉粉",
          price: 8,
          num: 1,
          id: 41
        }
			],
			[]
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
    let lid = e.currentTarget.dataset.btnId;
    //console.log(lid);
    let flag = true;
    let cart = this.data.cart;
    if (cart.length > 0) {
      cart.forEach(function (item, index) {
        if (item == lid) {
          cart.splice(index, 1);
          flag = false;
        }
      })
    }
    if (flag) cart.push(lid);
    this.setData({
      cartTotal: cart.length
    })
    this.setStatus(lid)
  },
  // 修改按钮状态
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		this.setData({
			dishesList:this.data.dishesList
		})
	},
  //加
  add(e) {
    // 所点商品id
    var foodId = e.currentTarget.dataset.foodId;
    console.log('footid'+foodId)
		// console.log(foodId);
    // 获取商品数据
    var dishesList = this.data.dishesList;
    var num = (dishesList[foodId])[3].num;
    //console.log(num)
    num++;
    console.log(num)
    //console.log(dishesList[0].num)
    // 读取目前购物车数据
    var cartData = this.data.cartData;
    //console.log(cartData)
    // 获取当前商品数量
    var foodCount = cartData[foodId] ? cartData[foodId] : 0;
    // 自增1后存回
    cartData[foodId] = ++foodCount;
    // 设值到data数据中
    this.setData({
      cartData: cartData,
      dishesList
    });
    // 转换成购物车数据为数组
    //this.cartToArray[footId] = cartData[footId];
    //console.log(this.cartToArray)
    
  },
	onLoad () {
		this.loadingChange()
	}
})