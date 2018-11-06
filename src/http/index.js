import axios from 'axios';
axios.defaults.withCredentials = true;
let cancel = {};
let pending = [];
let CancelToken = axios.CancelToken;
let removePending = (config, f) => {
  let flagUrl = config.url + '&' + config.method
  if (pending.indexOf(flagUrl) !== -1) {
    if (f) {
      f() // 执行取消操作
    } else {
      pending.splice(pending.indexOf(flagUrl), 1) // 把这条记录从数组中移除
    }
  } else {
    if (f) {
      pending.push(flagUrl)
    }
  }
}

axios.defaults.withCredentials = true;
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method) {
      config.cancelToken = new CancelToken((c) => {
        removePending(config, c)
      })
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  if (response.config.method === 'post') {
    removePending(response.config)
  }
  return response
}, err => {
  console.log(err);
  
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.status = "400";
        err.message = '错误请求';
        break;
      case 401:
        err.status = "401";
        err.message = '未授权，请重新登录';
        break;
      case 403:
        err.status = "403";
        err.message = '拒绝访问';
        break;
      case 404:
        err.status = "404";
        err.message = '请求错误,未找到该资源'
        break;
      case 405:
        err.status = "405";
        err.message = '请求方法未允许'
        break;
      case 408:
        err.status = "408";
        err.message = '请求超时'
        break;
      case 500:
        err.status = "500";
        err.message = '服务器出错了 找后台去!'
        break;
      case 501:
        err.status = "501";
        err.message = '网络未实现'
        break;
      case 502:
        err.status = "502";
        err.message = '网络错误'
        break;
      case 503:
        err.status = "503";
        err.message = '服务不可用'
        break;
      case 504:
        err.status = "504";
        err.message = '504-网络超时'
        break;
      case 505:
        err.status = "505";
        err.message = '505-http版本不支持该请求'
        break;
      default:
        err.status = err.response.status;
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.status = "ERROR"
    err.message = "连接到服务器失败"
  };
  return Promise.resolve(err.response)
})
export default {
  //get请求
  get(url, param) {
    if (param) {
      param.currentTime = (new Date()).valueOf();
    }
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        withCredentials: true,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        if (res) {
          let data = res.data;
          console.log("数据回调:", data);
          if (data.code == 200) {
            resolve(data);
          }
        }
      })
    })
  },
  //post请求
  post(url, param) {
    if (param) {
      param.currentTime = (new Date()).valueOf();
    }
    return new Promise((resolve, reject) => {
      axios({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'post',
        url,
        data: param,
        withCredentials: true,
        transformRequest: [function (data) {
          let ret = '';
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
          }
          return ret;
        }],
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(res => {
        if (res) {
          let data = res.data;
          console.log("数据回调:", data);
          // if (data.status == -1 || data.data == "登录失效") {
          //   router.push("/");
          // }
          if (data.code == 200) {
            resolve(data);
          }
        }
      })
    })
  }
}