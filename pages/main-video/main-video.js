// pages/main-video/main-video.js

import {
    getTopMv
} from '../../services/video'

Page({
    data: {
        videoList: [],
        offset: 0,
        hasMore: true
    },
    onLoad() {
        this.fetchTopMv()
    },

    async fetchTopMv() {
        const {
            data,
            hasMore
        } = await getTopMv(this.data.offset)
        const videoListRes = [...this.data.videoList, ...data]
        this.setData({
            hasMore,
            offset: videoListRes.length,
            videoList: videoListRes
        })
    },

    // 触底加载
    onReachBottom() {
        // 判断是否有更多数据
        if (!this.data.hasMore) return

        this.fetchTopMv(this.data.offset)
    },

    // 下拉刷新
    async onPullDownRefresh() {
        this.setData({
            offset: 0,
            videoList: [],
            hasMore: true
        })

        // 重新请求数据
        await this.fetchTopMv()

        // 停止下拉刷新
        wx.stopPullDownRefresh()
    }
})