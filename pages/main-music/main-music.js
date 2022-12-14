// pages/main-music/main-music.js
import {
    getMusicBanner,
    getSongMenuList
} from '../../services/music'
import {
    querySelect
} from '../../utils/query-select'
import {
    throttle
} from 'underscore'
import recommendStore from "../../store/recommendStore"
import rankingStore, {
    rankingsMap
} from '../../store/rankingStore'

const querySelectThrottle = throttle(querySelect, 100)

Page({
    data: {
        searchValue: '',
        banners: [],
        bannerHeight: 150,
        recommendSongs: [],
        // 歌单数据
        hotMenuList: [],
        recMenuList: [],
        // 巅峰榜
        rankingInfos: [],
        isRankingData: false
    },

    onLoad() {
        this.fetchMusicBanner()
        this.fetchSongMenuList()

        // 监听recommendSongInfo
        recommendStore.onState("recommendSongInfo", this.handleRecommendSongs)
        // 发起action
        recommendStore.dispatch("fetchRecommendSongsAction")

        // 监听巅峰榜的数据
        for (const key in rankingsMap) {
            rankingStore.onState(key, this.handleRanking(key))
        }

        rankingStore.dispatch("fetchRankingDataAction")
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

    // 获取歌单数据
    fetchSongMenuList() {
        // 获取热门歌单
        getSongMenuList().then(res => {
            this.setData({
                hotMenuList: res.playlists
            })
        })

        // 获取推荐歌单
        getSongMenuList("华语").then(res => {
            this.setData({
                recMenuList: res.playlists
            })
        })
    },

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

    handleRanking(key) {
        return value => {
            if (!value.name) return
            this.setData({
                isRankingData: true
            })
            const newRankingInfos = {
                ...this.data.rankingInfos,
                [key]: value
            }
            this.setData({
                rankingInfos: newRankingInfos
            })
        }
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

        for (const key in rankingsMap) {
            rankingStore.offState(key, this.handleRanking(key))
        }
    }
})