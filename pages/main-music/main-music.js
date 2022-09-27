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
import recommendStore from "../../store/recommendStore"

const querySelectThrottle = throttle(querySelect, 100)

Page({
    data: {
        searchValue: '',
        banners: [],
        bannerHeight: 150,
        recommendSongs: []
    },

    onLoad() {
        this.fetchMusicBanner()

        // 监听recommendSongInfo
        recommendStore.onState("recommendSongInfo", this.handleRecommendSongs)
        // 发起action
        recommendStore.dispatch("fetchRecommendSongsAction")
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

    // async fetchSongMenuList() {
    //     getSongMenuList().then(res => {
    //         this.setData({
    //             hotMenuList: res.playlists
    //         })
    //     })
    // },

    onBannerImageLoad() {
        querySelectThrottle(".banner-image").then(res => {
            this.setData({
                bannerHeight: res[0].height
            })
        })
    },

    onRecommendMoreClick() {
        wx.navigateTo({
            url: '/pages/detail-song/detail-song?type=recommend',
        })
    },

    // 从store中获取数据
    handleRecommendSongs(value) {
        if (!value.tracks) return
        this.setData({
            recommendSongs: value.tracks.slice(0, 6)
        })
    },

    onUnload() {
        recommendStore.offState("recommendSongs", this.handleRecommendSongs)
    }
})