import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()

fly.interceptors.request.use((config, promise) => {
  wx.showLoading({title: '数据加载中...'})
  config.headers['X-Tag'] = 'flyio'
  // config.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3QiLCJpYXQiOjE1MjgxMDk4MjQsImV4cCI6MTU1OTY0NTgyNCwibmJmIjoxNTI4MTA5ODI0LCJqdGkiOiJUQzhzUmRMcFZnWGpVZW5xIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.i9ynO6G00yKec4NrgHO87PtjgTOAfbjvg96PBJEqdUQ'
  return config
})

export function request (url, params) {
  return new Promise((resolve, reject) => {
    fly.request(url, params).then(response => {
      wx.hideLoading()
      resolve(response)
    }, err => {
      wx.hideLoading()
      wx.showToast({title: err.message, icon: 'none'})
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function post (url, params) {
  // let searchParams = new URLSearchParams()
  // for (let key in params) {
  //   searchParams.append(key, params[key])
  // }
  return new Promise((resolve, reject) => {
    fly.post(url, params).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

const env = process.env.NODE_ENV
if (env === 'development') {
  fly.config.baseURL = 'https://www.essayape.com'
}

export default {
  /* 活动页接口 */
  games (params) {
    return request('https://www.essayape.com/api/games', params)
  },
  /* 商城接口 */
  shops (params) {
    return request('https://www.essayape.com/api/shops', params)
  },
  /* 我的接口 */
  users (params) {
    return request('https://www.essayape.com/api/users', params)
  },
  /* 登录接口 */
  login (params) {
    return post('https://www.essayape.com/api/weapp/users', params)
  }
}
