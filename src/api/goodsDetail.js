import request from '@/util/request'

//获取商品
export function getGoodsDetailInfo(data) {
    return request({
        url: '/api/goodsDetail/Info',
        method: 'post',
        data
    })
}
