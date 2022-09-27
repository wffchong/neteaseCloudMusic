import {
    HYEventStore
} from 'hy-event-store'

import {
    getPlaylistDetail
} from '../services/music'

const rankingStore = new HYEventStore({
    state: {
        
    },
    actions: {
        fetchRankingDataAction(ctx) {
            getPlaylistDetail(3778678).then(res => {
                // ctx.recommendSongInfo = res.playlist
                console.log(res);
            })
        }
    }
})

export default rankingStore