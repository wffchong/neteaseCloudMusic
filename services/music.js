import {
    httpRequest
} from "./index";

export function getMusicBanner(type = 0) {
    return httpRequest.get({
        url: "/banner",
        data: {
            type
        }
    })
}

export function getPlaylistDetail(id) {
    return httpRequest.get({
        url: "/playlist/detail",
        data: {
            id
        }
    })
}

// 获取推荐歌曲
export function getSongMenuList(cat = '全部', limit = 6, offset = 0) {
    return httpRequest.get({
        url: '/top/playlist',
        data: {
            cat,
            limit,
            offset
        }
    })
}