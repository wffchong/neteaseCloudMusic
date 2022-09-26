import {
    httpRequest
} from './index'

// 获取mv列表
export function getTopMv(offset = 0, limit = 20) {
    return httpRequest.get({
        url: '/top/mv',
        data: {
            limit,
            offset
        }
    })
}

// 根据id获取mv的url地址
export function getMvUrl(id) {
    return httpRequest.get({
        url: '/mv/url',
        data: {
            id
        }
    })
}

// 获取mv的详细信息
export function getMvInfo(id) {
    return httpRequest.get({
        url: '/mv/detail',
        data: {
            mvid: id
        }
    })
}

// 获取mv的相关信息
export function getMVRelated(id) {
    return httpRequest.get({
        url: "/related/allvideo",
        data: {
            id
        }
    })
}