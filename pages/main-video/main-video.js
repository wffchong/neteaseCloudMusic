// pages/main-video/main-video.js

import {
    getTopMv
} from '../../services/video'

Page({
    data: {
        videoList: []
    },
    onLoad() {
        this.fetchTopMv()
    },

    async fetchTopMv() {
        const {
            data
        } = await getTopMv()
        this.setData({
            videoList: data
        })
    }
})