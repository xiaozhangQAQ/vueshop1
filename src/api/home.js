import request from '@/util/request'

//轮播图api
export function getRb(data) {
    return request({
        url: '/api/home/lunbo',
        method: 'post',
        data
    })
}

// 新闻列
export function getNews(data) {
    return request({
        url: '/api/home/news',
        method: 'post',
        data
    })
}

// 商品列
export function getGoodsList(data) {
    return request({
        url: '/api/home/goodsList',
        method: 'post',
        data
    })
}