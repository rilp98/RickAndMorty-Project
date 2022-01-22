import { useState } from "react";

export const useFetch = (d='rick')=>{
  const [item, setItem] = useState([]);
  const fetchData = ()=>{
      fetch(`https://rickandmortyapi.com/api/character/?name=${d}`)
      .then(resp =>resp.json())
      .then((resp)=>{
          setItem(resp.results);
        })
        console.log(d);
  }

  return{
  item,
  fetchData
  }
}