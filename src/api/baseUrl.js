/**
 * Created by salamaashoush on 23/04/17.
 */
export default function getBaseUrl() {
  return getQueryString('useMockApi')?'http:localhost:3001/':'/';
}
function getQueryString(name,url) {
  if(!url) url=window.location.href;
  name=name.replace(/[\[\]]/g,"\\$&");
  let regex=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)"),
    result=regex.exec(url);
  if(!result) return null;
  if(!result[2]) return '';
  return decodeURIComponent(result[2].replace(/\+/g," "));
}
