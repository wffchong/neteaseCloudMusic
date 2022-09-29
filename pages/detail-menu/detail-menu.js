// pages/detail-menu/detail-menu.js
import {
    getSongMenuTag,
    getSongMenuList
} from '../../services/music'

Page({
    data: {
        songMenus: []
    },

    onLoad() {
        this.fetchAllMenuList()
    },

    async fetchAllMenuList() {
        const res = await getSongMenuTag()

        // 获取所有的tags
        const tags = res.tags

        const allPromise = []
        // 根据tag去获取对应的歌单
        for (const tag of tags) {
            allPromise.push(getSongMenuList(tag.name))
        }

        Promise.all(allPromise).then(res => {
            this.setData({
                songMenus: res
            })
        })


    }
})