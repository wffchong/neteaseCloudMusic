import {
    baseURL
} from './config'

class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
    }

    request(options) {
        const url = options.url

        return new Promise((resolve, reject) => {
            wx.request({
                ...options,
                url: this.baseUrl + url,
                success: res => {
                    resolve(res.data)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    }

    get(options) {
        return this.request({
            ...options,
            method: 'GET'
        })
    }

    post(options) {
        return this.request({
            ...options,
            method: 'POST'
        })
    }
}

export const httpRequest = new HttpRequest()