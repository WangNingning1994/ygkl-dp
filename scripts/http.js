const httpClient = axios.create({
  baseURL: 'https://zsrsjwx.zhoushan.gov.cn/rsapp',
});

httpClient.interceptors.response.use((res) => {
  if (res.data) {
    if (res.data.code == 1) {
      return res.data
    } else {
      throw new Error(res.data.message)
    }
  }
}, (err) => {
  console.log('oops, something went wrong.');
  return Promise.reject(err);
});

