// pages/detail-song/detail-song.js
import rankingStore from "../../store/rankingStore"
import recommendStore from "../../store/recommendStore"

import {
    getPlaylistDetail
} from '../../services/music'

Page({
    data: {
        type: 'ranking',
        id: '',
        key: 'newRanking',
        songInfo: {}
    },
    onLoad(options) {
        // 1.确定获取数据的类型
        // type: ranking -> 榜单数据
        // type: recommend -> 推荐数据
        const type = options.type
        this.setData({
            type
        })

        // 根据type从store中获取榜单数据
        if (type === 'recommend') {
            recommendStore.onState('recommendSongInfo', this.handleRanking)
        } else if (type === 'menu') {
            const id = options.id
            this.setData({
                id
            })
            this.fetchMenuSongInfo()
        } else if (type === 'ranking') {
            const key = options.key
            this.setData({
                key
            })
            rankingStore.onState(key, this.handleRanking)
        }
    },

    async fetchMenuSongInfo() {
        const res = await getPlaylistDetail(this.data.id)
        this.setData({
            songInfo: res.playlist
        })
    },

    handleRanking(value) {
        this.setData({
            songInfo: value
        })
        wx.setNavigationBarTitle({
            title: value.name,
        })
    },

    onUnload() {
        if (this.data.type === "ranking") {
            rankingStore.offState(this.data.key, this.handleRanking)
        } else if (this.data.type === "recommend") {
            recommendStore.offState("recommendSongInfo", this.handleRanking)
        }
    }
})