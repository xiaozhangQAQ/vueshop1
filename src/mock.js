//引入mockjs
const Mock = require('mockjs');
//使用mockjs模拟数据
import mockData from '@/pages/goods/pdlist.js'

// 登录
Mock.mock('/user/login',(req, res) => {
    const token = 'admin'
    if (!token) {
        return {
            code: 60204,
            message: 'Account and password are incorrect.'
        }
    }
    return {
        code: 20000,
        data: token
      }
})



//前台轮播
Mock.mock('/api/home/lunbo', (req, res) => {
    return {
    data: [
    {
    "url" : '',
    "imgsrc": "news.png"
    },
    {
    "url" : '',
    "imgsrc": "news1.png"
    },
    {
    "url" : '',
    "imgsrc": "news2.png"
    },
    {
        "url" : '',
        "imgsrc": "news3.png"
    }
    ]
    }
})

//新闻列表
Mock.mock('/api/home/news', (req, res) => {
    return {
    data: [
    {
        "title" : '教你四招健康吃鸡肉',
        "imgsrc": "news1.png",
        'detail': 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
        "title" : '教你四招健康吃鸡肉',
        "imgsrc": "news2.png",
        'detail': 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
        "title" : '鸡蛋怎么做好吃',
        "imgsrc": "news3.png",
        'detail': 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
    ]
    }
})

//商品列
Mock.mock('/api/home/goodsList', (req, res) => {
    return {
    data: [
    {
    "id" : 1,
    "username": "aaa",
    "password": "aaa"
    },
    {
    "id" : 2,
    "username": "bbb",
    "password": "bbb"
    },
    {
    "id": 3,
    "username": "ccc",
    "password": "ccc"
    }
    ]
    }
})


// 商品页
//导航列表
Mock.mock('/api/goods/goodsNav', (req, res) => {
    return {
    data: [{name: '首页', mescroll: null, list: [], isListInit: false}, {name: '奶粉', mescroll: null, list: [], isListInit: false}, {name: '面膜', mescroll: null, list: [], isListInit: false}, {name: '图书', mescroll: null, list: [], isListInit: false}, {name: '果汁', mescroll: null, list: [], isListInit: false}, {name: '奶瓶', mescroll: null, list: [], isListInit: false}, {name: '美素', mescroll: null, list: [], isListInit: false}, {name: '璐拉', mescroll: null, list: [], isListInit: false}, {name: '启赋', mescroll: null, list: [], isListInit: false}, {name: '雅培', mescroll: null, list: [], isListInit: false}, {name: '花王', mescroll: null, list: [], isListInit: false}, {name: '韩蜜', mescroll: null, list: [], isListInit: false}]
    }
})
//商品列
Mock.mock('/api/goods/goodsList', (req, res) => {
    return {
    data: mockData
    }
})

// 商品详情页
Mock.mock('/api/goodsDetail/Info', (req, res) => {
    return {
        data:{
            img_lb: [
                {
                  url: '',
                  img: 'edg.png'               
                }, {
                  url: '',
                  img: 'ji.png'               
                }, {
                  url: '',
                  img: 'edg.png'                
                }, {
                  url: '',
                  img: 'ji.png'               
                }
            ],
            title:'100期罗牛山鸡蛋',
            price:'120.00',
            detail:'采取山地果园放养，自由采食加喂五谷杂粮',
            sy:'40',
            csnum:4,
            layimgbox:['edg01.png','edg02.png','edg03.png','edg04.png'],
            nummin:1,
            nummax:15
        }
    }
})