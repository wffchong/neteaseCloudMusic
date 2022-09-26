// pages/main-music/main-music.js
import {
    getMusicBanner
} from '../../services/music'
import {
    querySelect
} from '../../utils/query-select'
import {
    throttle
} from 'underscore'

const querySelectThrottle = throttle(querySelect, 100)

Page({
    data: {
        searchValue: '',
        banners: [],
        bannerHeight: 150
    },

    onLoad() {
        this.fetchMusicBanner()
    },

    onSearchClick() {
        wx.navigateTo({
            url: '/pages/detail-search/detail-search'
        })
    },

    async fetchMusicBanner() {
        const res = await getMusicBanner()
        this.setData({
            banners: res.banners
        })
    },

    onBannerImageLoad() {
        querySelectThrottle(".banner-image").then(res => {
            this.setData({
                bannerHeight: res[0].height
            })
        })
    }
})