import http from '@/http';

const api = {
  // 手机登录
  cellphoneApi: "/login/cellphone",
  // banner
  bannerApi: "/banner",

  // 推荐歌单
  personalizedApi: "/personalized",
  // 推荐新音乐
  newsongApi: "/personalized/newsong",
  // 私人fm
  personal_fmApi: "/personal_fm",

  // 推荐电台
  djprogramApi:"/personalized/djprogram",
// 歌单详情
playlistDetailApi:"/playlist/detail"
}

// 通过手机登录
export const cellphoneApi = param => http.post(api.cellphoneApi, param);
// banner
export const bannerApi = param => http.post(api.bannerApi, param);

// 推荐歌单
export const personalizedApi = param => http.post(api.personalizedApi, param);
// 推荐新音乐
export const newsongApi = param => http.post(api.newsongApi, param);
// 私人fm
export const personal_fmApi = param => http.post(api.personal_fmApi, param);

// 推荐电台
export const djprogramApi = param => http.post(api.djprogramApi, param);
// 歌单详情
export const playlistDetailApi = param => http.get(api.playlistDetailApi, param);













