import axios from 'axios'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export function ajaxGetAsync (url, data = {}) {
    return new Promise(function(resolved,reject){
        let promise;       
            //url 参数数据
          let dataStr = '';
          Object.keys(data).forEach(key=>{
              dataStr += key + '=' +data[key] + '&';
          })
          if(dataStr !== ''){
              dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
              url = url + '?' + dataStr;
          }
          promise =axios.get(url);

        promise.then(function(response){
        //   成功调用resolve()tt[hpkdfg]
          resolved(response.data);
        }).catch(function(error){
        //   失败调用reject()
          reject(error)
        })
    })      
  }

  export function ajaxPostAsync (url, data = {}) {
    return new Promise(function(resolved,reject){
        let promise;       
        promise = axios.post(url,data)
        promise.then(function(response){
        //   成功调用resolve()tt[hpkdfg]
          resolved(response.data);
        }).catch(function(error){
        //   失败调用reject()
          reject(error)
        })
    })      
  }

//   异步使用
//   const response = await ajaxAsync();