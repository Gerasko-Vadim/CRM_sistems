import Axios from "axios";


 let http = Axios.create({
    baseURL: "https://cp.nadomkz.artwaga.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjc5NDVhZmIyODliMGQzMTI1MGU4MSIsImV4cCI6MTY0NDc0MjcyMSwiaWF0IjoxNjEzMjA2NzIxfQ.8G9FpLvAjyW-85xxr_lanqW2eyK6Fp9voGkETkGqDsQ"
  export default {
      mainCards:()=>http.get("/api/terminal/v1/productCategories", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
  }
