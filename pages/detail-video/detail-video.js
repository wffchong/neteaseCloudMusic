// pages/detail-video/detail-video.js
import {
    getMvUrl,
    getMvInfo,
    getMVRelated
} from '../../services/video'

Page({
    data: {
        id: '',
        mvUrl: '',
        mvInfo: {},
        relatedVideo: [],
        danmuList: [{
                text: "哈哈哈, 真好听",
                color: "#ff0000",
                time: 3
            },
            {
                text: "呵呵呵, 不错哦",
                color: "#ffff00",
                time: 10
            },
            {
                text: "嘿嘿嘿, 好喜欢",
                color: "#0000ff",
                time: 15
            },
        ]
    },

    onLoad(options) {
        const id = options.id
        this.setData({
            id
        })

        this.fetchMvUrl()
        this.fetchMvInfo()
        this.fetchMvRelated()
    },

    async fetchMvUrl() {
        const res = await getMvUrl(this.data.id)
        this.setData({
            mvUrl: res.data.url
        })
    },

    async fetchMvInfo() {
        const res = await getMvInfo(this.data.id)
        this.setData({
            mvInfo: res.data
        })
    },

    async fetchMvRelated() {
        const res = await getMVRelated(this.data.id)
        this.setData({
            relatedVideo: res.data
        })
    }
})