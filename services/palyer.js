import {
    httpRequest
} from './index'

// 根据id获取歌曲播放信息
export function getSongDetail(id) {
    return httpRequest.get({
        url: '/song/detail',
        data: {
            ids: id
        }
    })
}