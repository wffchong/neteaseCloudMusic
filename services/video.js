import {
    httpRequest
} from './index'

export function getTopMv(offset = 0, limit = 20) {
    return httpRequest.get({
        url: '/top/mv',
        data: {
            limit,
            offset
        }
    })
}