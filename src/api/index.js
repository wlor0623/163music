import http from '@/http';
// 
const baseURL = 'http://118.126.106.247:9001';

const api = {
  // 手机登录
  cellphoneApi: `${baseURL}/login/cellphone`,
  // banner
  bannerApi: `${baseURL}/banner`,

  // 推荐歌单
  personalizedApi: `${baseURL}/personalized`
}

// 通过手机登录
export const cellphoneApi = param => http.post(api.cellphoneApi, param);
// banner
export const bannerApi = param => http.post(api.bannerApi, param);

// 推荐歌单
export const personalizedApi = param => http.post(api.personalizedApi, param);





