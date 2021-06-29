import Axios from "axios";
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjc5NDVhZmIyODliMGQzMTI1MGU4MSIsImV4cCI6MTY0NDc0MjcyMSwiaWF0IjoxNjEzMjA2NzIxfQ.8G9FpLvAjyW-85xxr_lanqW2eyK6Fp9voGkETkGqDsQ"

 let http = Axios.create({
    baseURL: "https://qrmenu.artwaga.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      headers:{
        Authorization: "Bearer " + token,
      }
    },
  });

 
  export default {
      getAllCategory:()=>http.get("/api/categories"),
      getTopProduct: () => http.get(`/api/categories/top`),
      getProductsByCategory:(id)=>http.get(`/api/categories/${id}`),
      getProductById: (id)=> http.get(`/api/products/${id}`)
    
  }
