import axiosWithAuth from"./axiosWithAuth"

const useApi=(type,state,id)=>{
   state===undefined?"":state
   const get = () =>{ axiosWithAuth().get('/colors')}
   const post = ()=> {axiosWithAuth().post('/colors',state)}
   const del= ()=> {axiosWithAuth().delete(`/colors/${id}`)}
   const put = ()=> {axiosWithAuth().put(`colors/${id}`,state)}
return get,post,del,put
}
const {get}=useApi()
console.log(get)