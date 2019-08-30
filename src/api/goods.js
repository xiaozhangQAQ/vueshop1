import request from '@/util/request'

//导航列表
export function getGoodsNav(data) {
    return request({
        url: '/api/goods/goodsNav',
        method: 'post',
        data
    })
}

// 商品列
export function getGoodsList(data) {
    return request({
        url: '/api/goods/goodsList',
        method: 'post',
        data
    })
}