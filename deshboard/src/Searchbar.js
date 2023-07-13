import React, { useEffect, useState } from "react";
 import axios from "axios";
function Searchbar(){

    const [data,setdata]=useState([]);
    const [finddata,setfinddata]=useState([])
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
    const response=res.data
    setdata(response)
})

},[])

    return(
        <div>
            {data}
        </div>
    )
}
export default Searchbar;